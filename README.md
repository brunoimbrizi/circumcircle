circumcircle
============

Fast algorithm to calculate the circumcircle of a 2D triangle.

## Install
```
npm install circumcircle
```

## Example
```js
const circumcircle = require('circumcircle');

const points = [ [0.0, -0.5], [0.5, 0.5], [-0.5, 0.5] ];
console.log(circumcircle(points));
```
Output:

```js
{ x: 0, y: 0.125, r: 0.625 }
```

## Demo

[circumcircle demo](https://brunoimbrizi.github.io/circumcircle/demo/)

## Usage

### `circumcircle(points, radiusSq = false)`

- `points` an array with 3 points `[ [x,y], [x,y], [x,y] ]`

- `radiusSq` returns the radius squared - faster because it skips `Math.sqrt()`

**Returns** an object with circumcenter and circumradius `{ x, y, r }`


## Credits

[Lingjia Liu](https://gist.github.com/mutoo/5617691) and [Joseph O'Rourke](https://web.archive.org/web/20071030134248/http://www.exaflop.org/docs/cgafaq/cga1.html)

## See Also

- [circumradius](https://github.com/mikolalysenko/circumradius)
- [circumcenter](https://github.com/mikolalysenko/circumcenter)

## License

MIT, see [LICENSE](LICENSE) for details.
