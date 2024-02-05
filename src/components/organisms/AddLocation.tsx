import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { FiArrowLeft, FiNavigation } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import InputGroupLocation from './InputGroupLocation';
import city from '@/store/city';
import forecasts from '@/store/forecasts';
import CitiesCards from './CitiesCards';
import Button from '../atom/Button';
import Alert from '../molecules/Alert';
import tailwind from '@/constants/colors/tailwind';
import { AxiosError } from 'axios';
import validateUniqueForecast from '@/helpers/validateUniqueForecast';

const AddLocation = observer(() => {
  const navigate = useNavigate();
  const [step, setStep] = useState<0 | 1>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleAddLocation = useCallback(async () => {
    if (validateUniqueForecast(forecasts.forecasts, city.citySelected)) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    if (!city.citySelected.country) return;
    try {
      setLoading(true);
      await forecasts.addForecast();
      navigate('/forecasts');
    } catch (err) {
      console.error((err as AxiosError).message);
    }
  }, [navigate]);

  const handlePreviousStep = useCallback(() => {
    city.resetCitySelected();
    city.cities = [];
    setStep(0);
  }, []);

  const handleNextStep = useCallback(async () => {
    if (step) {
      handleAddLocation();
    } else if (city.citySelected.name || (city.citySelected.lat && city.citySelected.lon)) {
      setLoading(true);
      await city.search(city.citySelected.name);
      setStep(1);
      setLoading(false);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [step, handleAddLocation]);

  const erroMessage = useMemo(
    () => (!step ? 'Campo cidade ou longitude e latitude obrigatórios!' : 'Cidade já adicionada!'),
    [step],
  );

  return (
    <div className="flex flex-col gap-4 md:bg-white md:dark:bg-[#1B1B1D] rounded-lg px-6 py-5 w-full max-w-2xl mx-auto md:shadow-card">
      <div
        className={`w-full overflow-hidden relative pt-2 ${
          !step ? 'h-80 md:h-44' : 'h-72 min-[340px]:h-[360px] sm:h-[420px] md:h-[540px] overflow-y-auto'
        }`}
      >
        <div
          className={`w-[200%] flex justify-between transition-all duration-500 absolute ${
            !step ? 'left-0' : '-left-full'
          }`}
        >
          <div className="w-[49%] ml-1">
            <InputGroupLocation />
          </div>
          <div className="w-[49%] mr-1 flex flex-col gap-2">
            {city.cities.length ? (
              <CitiesCards cities={city.cities} />
            ) : (
              <div className="flex flex-col items-center justify-center w-full md:hidden gap-2 text-center">
                <div className="bg-neutral-200 p-4 rounded-full mb-4">
                  <FiNavigation className="translate-y-[2px]" size={28} color={tailwind.neutral[600]} />
                </div>
                <h2 className="text-neutral-900 dark:text-white font-semibold text-2xl">Cidade não encotrada.</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      {error ? <Alert color="critical" title={erroMessage} /> : null}
      <div className={`flex ${step ? 'justify-between' : 'justify-end'}  mt-6`}>
        {step ? (
          <Button color="transparent" onClick={handlePreviousStep}>
            <FiArrowLeft size={20} /> Voltar
          </Button>
        ) : null}
        <div className="flex gap-3">
          <Button
            className="hidden md:block"
            color="transparent"
            onClick={() => {
              city.resetCitySelected();
              navigate('/forecasts');
            }}
          >
            Cancelar
          </Button>

          <Button
            color={step ? 'positive' : 'primary'}
            disabled={!city.citySelected.id && !!step}
            onClick={handleNextStep}
          >
            {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : !step ? 'Proximo' : 'Adicionar'}
          </Button>
        </div>
      </div>
    </div>
  );
});

export default AddLocation;
