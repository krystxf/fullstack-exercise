# Blog Assignment Code Review ✍️✨

## Review Information ℹ️

- **Ranking**
  - 🟢: Good
  - 🟡: Could Be Improved
  - 🔴: Needs Improvement
  - ⚪: Not Applicable (for example due to exercise scope)

## Project Setup 🛠️

- 🟢 **Environment variables**: It's a good practice to include an `.env.example` file to guide users on the required environment variables.
- 🟢 **Package manager - pnpm**: Using modern package managers like `pnpm` is a good choice. The project is a good starting base for a mono-repo setup.
- 🟢 **Next.js**: Next.js is a solid choice for a blog application, providing server-side rendering and static site generation out of the box. The project also utilizes the `app` router with server components allowing for usage of latest Next.js features and server components.
- 🟡 **Node.js version not specified**: It's recommended to specify the Node.js version, preferably in a `.nvmrc` file or the `engines` field in `package.json`, to ensure consistent development environments.
- 🔴 **No code formatter used**: The project lacks a Prettier configuration, which can lead to inconsistent code formatting. Furthermore, adding Prettier can be beneficial for other reasons like organizing tailwind classes or imports.
  Overall, the project setup is alright, but quite basic and easily achievable with `create-next-app` alone. The project does not utilize any extra helpful plugins for `eslint` or `Prettier` which is completely missing. Adding Prettier is definitely a low hanging fruit.

## Packages and Dependencies 📦

- 🟡 **Libraries used**: There are not many dependencies, which is ok for a small project. However this exercise had instructions that it should be written as if it was big production application. There is lack of tools that would be normally used on such scale. Some of the libraries to consider: `react-query`, `zustand` or `jotai`, `react-hook-form`, `radix-ui`, `shadcn`, `clsx` and `twMerge`.
- 🟡 **Unused dependencies**: `Zod` is included in the project and a single `authSchema` is defined, but it's not used anywhere.

## Project structure 🏗️

- 🟢 **File grouping**: The files are nicely grouped into folders by type (components, hooks, lib, utils, etc.). For a smaller project like this, it's a good approach. For larger projects, it might be better to group firstly by feature and then by type.
- 🟢 **Components**: The components are nicely separated and reusable.

## Code style

- 🟢 **Naming**: The naming conventions are consistent and follow some good practices like booleans starting with `is` or `has` and most functions starting with a verb.
- 🔴 **String manipulation**: The project uses string concatenation in some places like `inputClassName + " min-h-48"`. It would be better to use template literals for readability. Also, the `clsx` or the naive `twMerge` implementation could be used here.

## Styling 🎨

- 🟢 **Tailwind CSS**: Tailwind CSS is becoming the go-to choice for modern web development. It's great to see it used in this project.
- 🟡 **Mixing of approaches**: The `src/app/not-found.tsx` page uses CSS modules, which seems unnecessary and the styles inside could be easily written using Tailwind CSS with usage of the [square bracket notation](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values). It's better to stick to one styling approach, unless there is a reason not to.
- 🔴 **Design VS implementation**: The project does not follow the design provided in the Figma prototype. This does not give us insight into how well you can follow design specifications (not that it needs to be pixel perfect). On top of that, the implemented design is much easier to implement than the one provided.
- 🔴 **Lack of responsiveness**: The application does not contain any responsive styles. Since the design was heavily simplified, it's hard to judge how well you could handle complex responsiveness in a real project. Needless to say, even with this simple UI, it breaks on smaller screens.
- 🔴 **Bad layout setup**: The header and footer are exceeding the visible height of the page. This is because the content in the middle has `min-h-screen` class which together with the header and footer height exceeds the screen height. Such layout is usually created with `flexbox` or `grid layout`.

## Best practices 🏆

- 🟢 **Conventional commits**: The project uses conventional commits for commit messages.
- 🟢 **Usage of constants**: Constants that are used in multiple places are extracted to a separate file like `LocalStorageKeys`.
- 🟢 **Named exports**: The project primarily uses named exports which is a good practice.
- 🟡 **Early return**: Some places could utilize early return to make the code more readable and eliminate deep nesting. For example:
  ```tsx
  loadFromLocalStorage: (state) => {
    const storedAuth = window.localStorage.getItem(LocalStorageKeys.auth);
    if (storedAuth) {
      const { access_token, expires_at } = JSON.parse(storedAuth);
      if (new Date().getTime() < expires_at) {
        state.accessToken = access_token;
        state.isAuthenticated = true;
        state.expiresAt = expires_at;
      } else {
        state.isAuthenticated = false;
        window.localStorage.removeItem(LocalStorageKeys.auth); // Token expired
      }
    } else {
      state.isAuthenticated = false;
    }
  },
  ```
  could be rewritten as:
  ```tsx
  loadFromLocalStorage: (state) => {
    const storedAuth = window.localStorage.getItem(LocalStorageKeys.auth);
    if (!storedAuth) {
      state.isAuthenticated = false;
      return;
    }
    const { access_token, expires_at } = JSON.parse(storedAuth);
    if (new Date().getTime() < expires_at) {
      state.accessToken = access_token;
      state.isAuthenticated = true;
      state.expiresAt = expires_at;
    } else {
      state.isAuthenticated = false;
      window.localStorage.removeItem(LocalStorageKeys.auth); // Token expired
    }
  },
  ```

## Features 🚀

- 🟡 **Markdown**: The project utilizes a markdown library for rendering the article content, however the different elements are not styled.
- 🔴 **Missing features**: 🚨 A lot of features from the assignment are missing like `comments`, `articles table in admin`, `related articles`, `profile dropdown`, `image upload`.

## Forms and Validation 📝

- 🟡 **Form handling**: Inputs are handled by the `useState` hook. It would be nice to see usage of a form library like `react-hook-form`. On top of that, there is not much validation on the form fields (except the native `required` prop). Consider using `zod` for more robust validation (but in this case, the forms were simple so it's ok).

## SEO 🌐

- 🟢 **Sitemap and robots.txt**: The project includes a `sitemap.xml` and `robots.txt` file generated using the latest `Next.js` features. The sitemap is generated with the existing articles through calling the API 👍. The admin part of the application is hidden from search engines which is a good practice.
- 🟢 **Metadata**: Public pages for articles have basic metadata like `title` and `description`. This is a good practice for SEO and showcases more advanced knowledge of Next.js features. The article detail metadata is generated from the fetched article data.

## Basic Accessibility ♿

- 🟢 **Headings**: The project uses proper heading structure. The `h1` is used only once and the rest of the headings follow in order.
- 🟢 **Labels**: Labels are used properly for form inputs.
- 🟡 **HTML5**: The project uses semantic HTML5 like `nav`, `footer` and `main` elements which is good for accessibility. However, the `header` element is not used for the header, the `article` element is not used for the article content and `abbr` or `span` elements are used for displaying date, which could utilize the `time` element. There is definitely some room for improvement here.

## Rendering strategies 🚀

- 🟢 **SSR**: The project utilizes server side rendering with server components, which is beneficial for SEO and performance.
- ⚪ **Advanced API's**: Since this is an application for blogs (mostly static content), it would be nice to see some advanced `Next.js` API usage like [`ISR`](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration). Or even [on demand revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration#on-demand-revalidation-with-revalidatetag) with `revalidateTag`.

## Performance and optimizations 🚀

- 🟡 **Image optimizaiton**: The image in article card uses `fill` prop on the `Image` component which is not necessary. It would be better to specify the `width` and `height` props since we know the width of the element on the page. Therefore, the image can be optimized for the specific size.

## Typesafety 👷

- 🟢 **Type definitions**: The project is fully typed and does not use `any` types ✅.
- 🟢 **Type reusability**: Types like `PageWithParams` utilize generics for reusability.
- 🟢 **Flexibility**: Primitive components like `Button` utilize the `ButtonHTMLAttributes<HTMLButtonElement>` type for props, which allows for flexibility and reusability.

## State management 🗄️

- 🟢 **Global state**: `Redux` is used for global state management for things like keeping the users `auth` state. The store is nicely setup utilizing `slices`. However, more lightweight solutions like `zustand` or `jotai` could be considered.
- 🟢 **Remote state**: The project uses the `query` toolkit from `Redux` for fetching data. This allows for better data management with caching and revalidation ✅. While the synergy with redux is great, consider using `react-query` instead. It provides more features and is much more flexible.
- 🟡 **Query tags**: Some query tags inside `src/lib/api` are not properly setup. For a query like `articles/${id}`, it would be better to use a tag like `[{type: "articles", id: 1}]`. This way, you can differentiate it from the general `articles` query.

## Eror Handling and Notifications 🚨

- 🟢 **Toast notifications**: The project uses `react-hot-toast` for displaying notifications. It keeps the user informed about the state of the application.
- ⚪ **API errors**: Some errors are too general. For example, the login form always showcases invalid creadentials error message. It would be better to differentiate between different types of errors (for example based on the 401 status code).

## Authentication and Authorization 🔐

- 🟡 **Robustness**: Expired access tokens seem to be handled only on initial load. Therefore if the token expires when using the app, the user will not be redirected to the login page.
- ⚪ **Security**: The project uses local storage for storing the access token. It would be better to use `httpOnly` cookies for storing the token and creating `Next.js` API routes for handling authentication acting as a proxy to the API (backend for frontend). This would allow for checking the auth on the server side as well which plays nicely with `SSR` and server components.

## Documentation 📚

- 🟢 **Comments usage**: Comments are used only where necessary (explaining why is something the way it is) and are clear and concise 👍.
- 🟡 **Leftover TODO and FIXME comments**: There are some leftover `TODO` and `FIXME` comments in the code. It seems like some parts of the code were rushed and not finished.
- ⚪ **Readme.md**: On real projects, it's a good practice to include some basic information about the project in `README.md` like `setup`, `deployment`, `usage`, etc.

## Summary 📝

The project is nicely setup and utilizes modern features from Next.js, but is missing a tool for code formatting like Prettier. The quality of the code is quite good with some slight room for improvement. Unfortunately, the projects biggest downside is the lack of features from the assignment which make the project quite simple and make it hard to give good evaluation. It seems like there was not enough time available for the project to be completed as expected. The design is also not implemented as expected and the responsiveness is missing. Overall, the project showcases good practices and knowledge, but lacks some important features and aspects of a real-world application.
