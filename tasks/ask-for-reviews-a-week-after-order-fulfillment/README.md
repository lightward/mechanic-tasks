# Ask for reviews a week after order fulfillment

* [Task script](./script.liquid)

Follow up with your customers automatically, and establish the purchase -> earn-reviews -> attract-customers cycle. This task comes prefilled with a friendly email that gives the customer direct links to their purchases on your website – customize this email to taste.

## Default options

```json
{
  "email_subject__required": "Will you review your order? :)",
  "email_body__multiline_required": "Hello,\n\nThanks for ordering from {{ shop.name }}!\n\nYour item{% if order.line_items.size > 1 %}s{% endif %} arrived a week ago, and we have a quick question: <b>will you review your purchase?</b>\n\nHere {% if order.line_items.size > 1 %}are direct links{% else %}is a direct link{% endif %}, to make this easy for you:\n<ul>{% for line_item in order.line_items %}{% if line_item.product_exists or event.preview %}<li><a href=\"https://{{ shop.domain }}/products/{{ line_item.product.handle }}\">{{ line_item.name }}</a></li>{% endif %}{% endfor %}</ul>\nThanks so much!\n\nSincerely,\nThe team at {{ shop.name }}",
  "days_to_wait_before_emailing__number_required": 7
}
```

## Subscriptions

```liquid
shopify/orders/fulfilled+{{ options.days_to_wait_before_emailing__number_required | default: 7 }}.days
```

## Documentation

(none)