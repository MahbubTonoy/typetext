# TypeText By Mahbub Tonoy

TypeText is a automatic typeing JavaScript API. This is a lite and minified javascript API for every modern websites.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

Download And Include typetext.js or typetext.min.js (the minified version) in into the heading tag your webpage.
```
<script src = "typetext.min.js" type = "text/javascript"></script>
```

### Installing

A step by step series of examples that tell you how to get a development env running

add `data-text` attribute into textarea/div or other element of your webpage. add your typeing text as attribute value.

```
<textarea rows = "4" cols = "50" data-text = "Your TypeText Goes Here" ></textarea>
```

and then add `data-speed` attribute into textarea/div or other element of your webpage. add your typing speed(millisecond) as attribute value.

```
<textarea rows = "4" cols = "50" data-text = "Your TypeText Goes Here" data-speed = "100"></textarea>
```
after that add `data-output` attribute into textarea/div or other element of your webpage. add your output type (innerHTML/placeholder/value) as attribute value.
(NOTE: attributes and it's values are case-sensitive, don't add 'innerhtml' or 'innerHtml' use innerHTML.)

```
<textarea rows = "4" cols = "50" data-text = "Your TypeText Goes Here" data-speed = "100" data-output = "innerHTML"></textarea>
```

Now Your Plugin is Ready To Run. Best of luck

## Built With

* [JavaScript](https://www.w3schools.com/js/) - The Web Programming Language

## Contributing

This Project has been contributed by "Mahbub Rashid Tonoy" (https://www.facebook.com/ThizIztonoy)

## Versioning

Project Will Update Day By Day.

## Authors

* **Mahbub Rashid Tonoy** - *Programmer* - [MahbubTonoy](https://github.com/MahbubTonoy)
