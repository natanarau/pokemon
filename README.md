Login dev
{ cpf: "42338768833", cardNumber: "7988" }

to add cashback: 
axios.post('https://cashback-sales-consumer.k8s-dev.bancomidway.io/v1/sales-kafka', {
    purchaseValue: 500,
    typePurchase: "on-us",
    cpfCnpj: "42338768833 ",
    sellerName: "",
    integrationID: "1",
    partnerID: 1,
    productID: 1,
    transactionModality: 1,
    purchaseDate: 1647454930846,
    cardBrand: 1,
    branchCode: 1,
    additionalCard: false
})

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `generate`: generate component files
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
- `export`: deploy to static bucket

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Folder Strucutre

The following aspects were used to create the folder structure

```
↳ @types                            # extension types (not related to application types)
  ...
↳ src                               # sources
  ↳ components                      # shared components used in the pages templates
    ↳ complex                       # mixin of data display and input components
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ test.tsx                  # tests
    ↳ ...                           # all other components
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ __test__                  # tests
          ↳ {CName}.test.tsx        # code test
                  # tests
  ↳ constants                       # application constants
    {filename}.tsx                  # some file with constants
    ...
  ↳ hocs                            # application hocs
    ...
  ↳ hooks                           # application hooks
    ↳ use{HookName}                 # application hook
      ↳ index.ts                    # hook function
      ↳ test.ts                     # hook tests
  ↳ layout                          # layout wrapper for all pages (header, etc.)
    ...
  ↳ page_templates                  # routes screens
    ↳ private                       # private screens
      ↳ ComponentTemplate           # route main component (don't create subfolder)
        ↳ components                # components used only in a specific route (see components)
        index.tsx                   # element
        styles.ts                   # styles
    ↳ public                        # public screens
      ↳ ComponentTemplate           # route main component (don't create subfolder)
        ↳ components                # components used only in a specific route (see components)
        index.tsx                   # element
        styles.ts                   # styles
  ↳ providers                       # application providers
    ↳ {ProviderName}Provider        # Provider component
      index.tsx                     # element
      styles.ts                     # styles
  ↳ styles                          # global styles and themes
    global.ts                       # global styles
    theme                           # global themes
    ...
  ↳ utils                           # helper functions
    {filename}.tsx                  # some file with helper functions
  ↳ service                         # API services
    index.tsx                       # Axios instance
    {filename}.tsx                  # some file with API connection and calls
    ...
```
