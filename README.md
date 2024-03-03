# EFT Hideout Tracker

My private Hideout Tracker for the game [Escape from Tarkov](https://www.escapefromtarkov.com/).

## Description

I found some online solutions for tracking which module require specific resources, but they didn't fit my usecase, so I decided to create my own webapplication. Its easy to use and simple in design.

For starters, the app retrieves the necessary knowledge required from the [EFT API](https://tarkov.dev/api/) (if there is no data available yet). The data is then saved locally in the localStorage using a new data structure.

All you need to do now is add your resources for the module you want to upgrade/keep track of. The app will check on each input change if the required resources are met. If they are, the upgrade button becomes available, and after you click it, the next level will appear. Once the last level has been upgraded, the module will disappear from the list.

> [!NOTE]
> I have not taken into consideration what module is unlocked based on the current level of the other modules. So they are all available.

## TO-DO list

- [ ] Fix Level 1 issue with Stash [^1]
- [ ] Fix Level 1 issue with Defective wall [^1]
- [ ] Add Icons for each module (Beter identification)
- [x] Add button for reset of data (For when new wipes occurs)
  - [ ] Rework functionality
- [x] Add **max out resources** functionality + button
  - [ ] Not working properly with onInputChangeDebounced. This needs a fix. [^2]
- [ ] Check to see where stuff needs to be reworked
  - [ ] Rework if necessary

[^1]: _Currently there is a problem with Stash and Defective Wall not having any requirements. Apparently the Stash has none on level 1 so I need to come up with a solution on skipping the first level. The Defective Wall on the other hand has a different issue as it can be upgraded right away without requirements._
[^2]: Currently clicking to fast on the next max button will not properly trigger the update button.
