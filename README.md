# react-children-animated

Simple react component to animate children.

## example 1

Using `ReactChildrenAnimated` among some paragraphs to show different sentences:

```
<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id velit metus. Nunc in dignissim dui.</p>
  <p>Aenean sed malesuada magna. Praesent a erat vel dolor sollicitudin posuere. </p>
  <ReactChildrenAnimated delay={10000}>
    <p>[sentence1: Maecenas accumsan dolor at mi finibus dictum.]</p>
    <p>[sentence2: Donec imperdiet efficitur arcu, in facilisis tellus.]</p>
    <p>[sentence3: Pellentesque malesuada magna vel purus ornare, eget laoreet justo faucibus.]</p>
  </ReactChildrenAnimated>
  <p>Nunc viverra et nisl ut venenatis. Vestibulum ornare eros vitae nulla tristique rutrum.</p>
</div>
```

## example 2

Using `ReactChildrenAnimated` in a paragraph to show different phrases:

```
<div>
  <p>
    <span> Aliquam id augue ut sem sodales facilisis. </span>
    <ReactChildrenAnimated delay={5000}>
      <span>[phrase1: Etiam a pulvinar odio]</span>
      <span>[phrase2: Suspendisse potenti]</span>
      <span>[phrase3: Praesent id faucibus est]</span>
    </ReactChildrenAnimated>
    <span> Sed blandit purus mi, quis efficitur ex rutrum at. </span>
  </p>
</div>
```
