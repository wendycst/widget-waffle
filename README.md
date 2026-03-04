# Angular Coding Test

## Table of Contents

- [Setup Guide](#setup-guide)
- [Coding Task: Layout Implementation](#coding-task-layout-implementation)

---

## Setup Guide

Follow these steps to set up and run the project:

1. **Install Node.js and npm**  
   Ensure you have Node.js version v24.5.0 or above and npm version v11.5.1 or above installed. You can check your current versions with:

   ```sh
   node --version
   npm --version
   ```

2. **Install Dependencies**  
   Run the following command in your project root to install all dependencies:

   ```sh
   npm ci
   ```

3. **Install Nx Extension**  
   Install the Nx Console extension in Visual Studio Code for better integration and developer experience.

4. **Run the Development Server**  
   To start the development server for the `widget-waffle` app, execute the following command in your terminal:

   ```sh
   npx nx serve widget-waffle
   ```

---

# Coding Task: Layout Implementation

Create a responsive page layout that matches the design shown in the reference screenshot (`apps/widget-waffle/assets/images/coding-test-layout.png`).

## Layout Structure

Your implementation must include the following components:

### 1. Main Content Area (Left Section)

- **Content**: Populate with sufficient text content to demonstrate scrolling
- (See Requirement 3 below for dynamic content via API)
- **CRITICAL REQUIREMENT**: This section **MUST be scrollable**
  - The content should exceed the viewport height
  - Only this section should scroll, not the entire page
- **Layout**: Takes up the majority of the horizontal space (approximately 60-70% width)

### 2. Drawer/Sidebar Section (Right Section)

#### Section Title Area

- **Section Title**: "Drawer's Section Title"
- Fixed at the top while content scrolls

#### Content Area

- **Content**: Contains informational text or instructions
- **CRITICAL REQUIREMENT**: This section **MUST be scrollable**
  - The content should exceed the viewport height
  - Only this section should scroll, not the entire drawer
  - The section title and footer should remain fixed while scrolling this area

#### Sidebar Footer Area

- **Sidebar Button**: One action button (Search) aligned to the center
  - **Search**: Primary/filled button style
- Fixed at the bottom of their respective sections

#### General Layout Requirements

- **Library**: Use Angular Material MatSidenavModule
- **Layout**: Fixed width sidebar on the right (approximately 30-40% width)
- **Behavior**: Should remain visible and not scroll with the main content
- **CRITICAL REQUIREMENT**: Drawer **MUST be collapsible** (expandable/hideable) with toggle functionality

> **💡 Hint**: Assume the app contains multiple pages (routes). Not every page requires a drawer, and different pages panel may require different content.

> **📝 Note**: Colorful border lines in the visual reference image are indicators only; do not show borders in actual UI.

### 3. Dynamic Content via Public API

Replace the static placeholder text in the Main Content Area with live data from a public API:

- Fetch posts from: https://jsonplaceholder.typicode.com/posts
- Display the first 10 posts
- For each post, show:
  - Title (as a subheading)
  - Body (as paragraph text)
- Show a loading state (e.g., “Loading…” or a spinner) while data is being fetched
- Handle errors gracefully (e.g., display “Failed to load content” if the request fails)
- Implementation requirements:
  - Use Angular’s HttpClient
  - Encapsulate data logic in a dedicated service
  - Use the async pipe in the template (avoid manual subscription management)
  - Do not hardcode the API URL in components—use environment files or constants

## Technical Requirements

1. **Responsive Layout**

   - Use CSS Flexbox or CSS Grid for the two-column layout
   - Ensure proper spacing and alignment
   - **Allowed tools for creating the two-column layout:**
     1. Angular Material Sidenav
     2. CSS (flexbox or grid)
     3. Tailwind (optional)
   - **No other third-party libraries are allowed**

2. **Scrollable Area**

   - Implement proper overflow handling for the main content area
   - The main content section must scroll independently

3. **Styling**

   - Maintain consistent padding and margins

4. **Angular Implementation**
   - Create components as needed
   - Follow Angular best practices
   - Use Angular Material or PrimeNG components where appropriate (buttons, icons, etc.)

## Deliverables

- Working implementation that matches the reference layout
- Properly structured Angular components
- Use **_MatSidenavModule_**
- Responsive design that works on different screen sizes
- Support minimum desktop width: 1280 × 720 px
- Demonstration of the scrollable main content area

## Submission Instructions

1. Clone the original repository
2. Create a new private repository under your own GitHub account **_(not a fork)_**
3. Push your changes to this private repository
4. Add wendycst as a collaborator
5. Share the repository link with us

## Reference

See `apps/widget-waffle/assets/images/coding-test-layout.png` for the visual reference of the expected layout.

**Note**: If there is any discrepancy between the requirements in this README.md and the reference screenshot, follow the requirements specified in README.md.
