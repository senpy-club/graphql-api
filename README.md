# `graphql-api`

GraphQL access to The Senpy API!

## Example Query

Try it out at [graphql.senpy.club/playground](https://graphql.senpy.club/playground)!

```graphql
query {
  random: random {
    language
    image
  }
  me: me {
    ip
  }
  languages
  language: language(language: "C")
  boys: boys {
    random: random {
      language
      image
    }
    me: me {
      ip
    }
    languages
    language: language(language: "C")
  }
}
```

## License

[MIT License](./LICENSE)
