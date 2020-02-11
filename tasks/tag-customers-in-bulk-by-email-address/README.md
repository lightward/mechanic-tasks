# Tag customers in bulk by email address

* [Task script](./script.liquid)

This task prompts you for a list of email addresses and tags, one pair per line, in the format "customer@example.com:tag". The task adds each tag to its related customer. Developers: this task is an example of working in batches with GraphQL – useful when working with bulk data.

## Subscriptions

```liquid
mechanic/user/text
```

## Documentation

Enter a list of email addresses and tags, one pair per line, in the format "customer@example.com:tag". The task will add each tag to its related customer, unless (a) the customer already has the tag, (b) the customer could not be found, or (c) a problem was found either with the entered line or with the customer record.