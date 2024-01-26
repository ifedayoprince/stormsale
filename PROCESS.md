
# StormSale Thought Process

### Name
I arrived at the name StormSale after looking deeply at the logo and remembered StormGain.
The top triangle looks a boat sail, and thus I decided to name it StormSale.

## Outline Standout Areas
- Name and process documentation (StormSale)
- Dark theme
- Dropdown looks
- Tooltips for User Experience
- Code with Storybook
- Scroll behaviour
- Hover effects
- Search bar effect
- Mobile UI

## Dynamic Data
I initially wanted to just use the available dummy data as a fixed stats (i.e embedded in the code itself).
But I decided against it and went with dynamic data. 
This is data that can be modified in one spot and reflects on the entire platform.

- The dynamic data for `Orders` can be found in [orders.json](./src/app/_data/orders.json)
All statistics and graphs are constructed from the list of orders in the file.

The data had to be modelled with TypeScript for security as well.

- The dynamic data for the entire dashboard can be found in [metadata.json](./src/app/_data/metadata.json)
With it, the name, email, avatar etc of the admin can be customized.


*All data here was generated with FakerJS*

## What's Working
- `Notifications` display a dialog.