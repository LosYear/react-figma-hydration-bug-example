# react-figma hydration bug

## Given
Simple layout with 3 different `<Rectangle>` components. 

## Steps to reproduce
1. Add plugin to Figma
2. Run plugin on a new Figma document, it will 3 rectangle nodes
3. Comment out one of the `<Rectangle>`, for example, the second one
4. Run plugin again

## What expected
One of the nodes have to be removed from the document tree

## What happens
```
The above error occurred in the <page> component:
    in page
    in Unknown
    in Unknown
    in Unknown

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://fb.me/react-error-boundaries to learn more about error boundaries.
```

Digging further gives us more precise error:

```
in get_parent: The node with id "1:91" does not exist"
```

Seems to be the problem with the hydration mechanism but needs more investigation