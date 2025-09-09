# Button Width Utilities

This module provides consistent button sizing utilities for the Widget Waffle UI system.

## Usage Examples

### Fixed Width Classes

```html
<!-- Exact pixel width -->
<button class="btn btn-w-150">Save</button>
<button class="btn btn-w-200">Download Report</button>

<!-- Semantic sizing using design tokens -->
<button class="btn btn-w-lg">Large Button</button>
<button class="btn btn-w-md">Medium Button</button>
```

### Min-Width Classes (Recommended)

```html
<!-- Allows content to expand beyond minimum -->
<button class="btn btn-min-w-120">Submit</button>
<button class="btn btn-min-w-lg">Flexible Large</button>
```

### Responsive Classes

```html
<!-- Full width on mobile, fixed on desktop -->
<button class="btn btn-w-200 btn-w-sm-full">Responsive</button>

<!-- Auto width on mobile -->
<button class="btn btn-w-250 btn-w-sm-auto">Adaptive</button>
```

### Button Groups

```html
<!-- Equal width buttons -->
<div class="btn-group btn-group-equal">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
  <button class="btn">Reset</button>
</div>

<!-- Stacked on mobile, row on desktop -->
<div class="btn-group btn-group-stack">
  <button class="btn btn-w-120">Previous</button>
  <button class="btn btn-w-120">Next</button>
</div>
```

## Available Classes

### Fixed Width (Exact Pixels)

- `.btn-w-60` through `.btn-w-300` (increments of 10px)
- Common sizes: 80, 100, 120, 150, 180, 200, 250, 300

### Semantic Width (Design Tokens)

- `.btn-w-xs` (60px)
- `.btn-w-sm` (80px)
- `.btn-w-md` (120px)
- `.btn-w-lg` (150px)
- `.btn-w-xl` (180px)
- `.btn-w-2xl` (200px)
- `.btn-w-3xl` (250px)
- `.btn-w-4xl` (300px)

### Min-Width Classes

- `.btn-min-w-{size}` for all fixed sizes
- `.btn-min-w-{semantic}` for all semantic sizes

### Responsive Utilities

- `.btn-w-full` - 100% width
- `.btn-w-auto` - Auto width
- `.btn-w-fit` - Fit content
- `.btn-w-sm-full` - Full width on small screens
- `.btn-w-xs-full` - Full width on extra small screens

## CSS Custom Properties

You can override the design tokens in your theme:

```css
:root {
  --btn-width-lg: 160px; /* Override default 150px */
  --btn-width-xl: 200px; /* Override default 180px */
}
```

## Best Practices

1. **Use min-width when possible** - Allows content to expand naturally
2. **Prefer semantic classes** - More maintainable than exact pixels
3. **Consider responsive behavior** - Use responsive utilities for mobile
4. **Use button groups** - For consistent spacing and alignment
5. **Test with different content lengths** - Ensure buttons work with various text lengths
