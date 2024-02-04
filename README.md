<p align="center">
  <img src="https://raw.githubusercontent.com/joaotanaca/weather-app/main/public/weather.png" alt="Logo"/>
</p>

# Weather app

Uma solução para ficar atualizado sobre as condições climáticas, proporcionando informações sobre o clima, utilizando https://open-meteo.com/ em qualquer lugar do mundo.

## Funcionalidades

- Temas dark e light
- Armazenamento de localizações climáticas.
- PWA, Progressive Web App.

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`VITE_SECURE_LOCAL_STORAGE_HASH_KEY`

`VITE_SECURE_LOCAL_STORAGE_PREFIX`

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/joaotanaca/weather-app.git
```

Entre no diretório do projeto

```bash
  cd weather-app
```

Instale as dependências

```bash
  npm install
```

ou

```bash
  yarn
```

Inicie o servidor

```bash
  npm run dev
```

ou

```bash
  yarn dev
```

## Referência

- [Open-meteo API](https://open-meteo.com/en/docs)
- [OpenWeather API](https://openweathermap.org/api/geocoding-api)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
