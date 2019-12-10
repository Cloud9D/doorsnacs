# Components
These are the various components that were expected to be reused within the application. Each comes with an individual `.css` file just incase there was a specific styling solution for each component.
## AddressDelivery
This is an unused search form meant to be utilized on the home page hero section. The intended purpose was to be able to insert one's address to find restaurants near them, however, we decided that this functionality would could not be implemented in a timely manner.
## Cards
An implementation of the Bootstrap 4 cards used to display restaurant information such as
* Restaurant/dish name
* Rating
* Description
* Image
* Pickup/delivery only
## Google Sign-In
This is a button utilized for the express purpose of signing in utilizing the Google API. Once the user signs-in, the state will change to reflect that the user is signed-in. This can easily be augmented with the use of application-level state such as [Redux](https://redux.js.org/). 
## Header
The main navigation header for the entire web application which encapsulates navigation links, a search bar, and the Google Sign-in. Currently, this component makes an API call to fetch a list of restaurants to makes suggestions for the search bar. This could easily be abstracted away to make a more fluent exploration experience.
## Restaurant Listings
This component mostly acts as a vehicle for an API call to get the restaurants for various reasons (restaurant page and home page). This could improved via abstration of the API call as well as implementation of the previously stated "Cards" component.