# riot-examples-and-thoughts
I've read some articles about framework-less front-end development and I must say that I feel drawn to the idea. In short it means, do not use large monolithic frameworks anymore, but use libraries to fulfill specific tasks.

I thought that Riot might be a nice library to fulfill the function of a UI component builder and so I wanted to take it for a spin.

- [Riot website](https://muut.com/riotjs/)
- [See this project in action]() (TODO github pages)
 
## Conclusions

Riot is..

- small in size and simple to use
- a fun way to create UI components
- not scoping styles or id's on custom elements, like web-components do. Instead it copies it into &lt;style&gt; tags at the bottom of the &lt;head&gt;. Note that inline css is not w3c complient
- currently not supporting CSS preprocessors. There's a pull-request though! But still, this creates a &lt;style&gt; tag for each custom element
- this stackoverflow question</a>


And further:

- On it's own, Riot is not enough to create more than a simple app, but it wasn't designed to be
- Riot can be a part of a (framework-less) front-end toolset, where it fulfills a specific task (UI components)
- This toolset needs to be well defined, with strong code conventions that should be followed and preached
- To optimize the workflow a solid platform needs to be defined that helps development and optimizes the delivered product (just some grunt tasks may not be enough)


## About the framework-less approach
- [the zero framework manifesto](http://bitworking.org/news/2014/05/zero_framework_manifesto) (1461 words)
- [thoughts about a non-framework toolset (with library suggestions)](https://andywalpole.me/#!/blog/142134/2015-the-end-the-monolithic-javascript-framework) (3134 words)
- [Ender](http://enderjs.com/) to manage your libraries
