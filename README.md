# EFT Hideout Tracker

My private Hideout Tracker for the game [Escape from Tarkov](https://www.escapefromtarkov.com/).

## Description

I found some online solutions for tracking which module require specific resources, but they didn't fit my usecase, so I decided to create my own webapplication. Its easy to use and simple in design.

For starters, the app retrieves the necessary knowledge required from the [EFT API](https://tarkov.dev/api/) (if there is no data available yet). The data is then saved locally in the localStorage using a new data structure.

All you need to do now is add your resources for the module you want to upgrade/keep track of. The app will check on each input change if the required resources are met. If they are, the upgrade button becomes available, and after you click it, the next level will appear. Once the last level has been upgraded, the module will disappear from the list.

> [!NOTE]
> I have not taken into consideration what module is unlocked based on the current level of the other modules. So they are all available.
> Should also be noted that skill levels are not taken into consideration as a requirement. Reason is simple you can just upgrade a module if you have collected the required resources and your skill is at the level you need it to be.

## Idea's future TO-DO's

- Gatekeep each module based on the level of the other modules that are required (for example: Gym shouldnt be unlocked untill Defective Wall is)
- Completed module button for Stash if you have EOD version?
- Rework the input system in combination with a "Inventory list" widget which will keep track off all resources and automatically assign them to the correct input (showing the total amount of the specific item)

## TO-DO list

- [ ] Rework Hideout Page / Panel to optimize rendering
- [ ] "Stash inventory list" widget
  - [x] Implement design (Sidebar with animation)
  - [x] Rework/implement Redux (Add a global state for easier sharing of data between stash inventory and hideout panels)
  - [ ] Connect Stash inventory Widget with Hideout Page Panels (All resources are automatically assigned to the correct input).
  - [ ] On upgrade the required amount of resources are reduced from the "global" Stash inventory
- [x] Fix Level 1 issue with Stash [^1]
- [x] Fix Level 1 issue with Defective wall [^1]
- [ ] Add icons for each module (Beter identification)
- [x] Add button for reset of data (For when new wipes occurs)
  - [ ] Rework functionality
- [x] Add **max out resources** functionality + button
  - [x] Not working properly with onInputChangeDebounced. This needs a fix. [^2]

[^1]: _Currently there is a problem with Stash and Defective Wall not having any requirements. Apparently the Stash has none on level 1 so I need to come up with a solution on skipping the first level. The Defective Wall has the same issue as it can be upgraded right away without any requirements._
[^2]: Currently clicking to fast on the next max button will not properly trigger the update button.
