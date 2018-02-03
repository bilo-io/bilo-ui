# NormsService

We need to create a norms_service, as it gets painful to use otherwise. Ideally, all the logic should be abstracted away from the endpoints.

Things the service should do, ideally:

### 1) Retrieve Global Norm

```ruby
def get_global_norm(survey_type_type, measure_model)
```

```js
{
  measure: "Relevance",
  survey_type_type: "Creative::CreativeStaticSurveyType",
  value: 6.91
}
```

### 2) Retrieve Client Norms
```ruby
def get_clients_with_norm(survey_type_type, measure_model)
```
```js
{
  measure: "Relevance",
  survey_type_type: "Creative::CreativeStaticSurveyType",
  countries: [{
    name: "United Kingdom",
    value: 7.22
  }, {
    name: "United States",
    value: 6.66
  },
    // ...
  ]
}
```

### 3) Retrieve Client Norms
```ruby
def get_clients_with_norm(survey_type_type, measure_model, clients)
```

```js
{
  measure: "Relevance",
  survey_type_type: "Creative::CreativeStaticSurveyType",
  value: 6.9
}
```