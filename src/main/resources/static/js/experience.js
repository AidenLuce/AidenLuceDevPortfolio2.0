$('.invisible').viewportChecker({
    // Class to add to the elements when they are visible
    classToRemove: 'invisible',
    classToAdd: 'visible',


    // The offset of the elements (let them appear earlier or later)
    offset: 100,

    // Add the possibility to remove the class if the elements are not visible
    repeat: true,

    // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
    callbackFunction: function(elem, action){

    }
});