# Drag-and-drop question game

In a simple quiz game, the player must sort these five random values. Using the game's drag-and-drop HTML5 APIs, the user may drop values into input buckets.

How Does It Work?
The quiz game is composed of the following components:

# Choices

The options, which are the draggable values, must be sorted by the user. These values are generated at random and are shown as draggable components. The user can drop these values into the input buckets.

# Inputs

The user drops the values into the inputs to sort them, which are the droppable input buckets. The 5 values are matched with 5 input buckets. To finish the sorting, the user must drag & drop the alternatives into the appropriate input buckets.

# Check Button

The check button turns on once the user has entered all the data into the input buckets. The sorting validation procedure is started when the check button is clicked.

# Result Message

The quiz game verifies that the user has correctly sorted the values once the user clicks the check button. If the sorting is accurate or inaccurate, a result message is shown. A fade-in animation is used to display the outcome message.

# Reset Button

A reset button is active when the any one number is dragged in lower section. The quiz game may be restarted with new random values by clicking the reset button.

# Behind Scene

JavaScript, HTML, and CSS were used to create the quiz game. Without utilising any third-party libraries, it makes use of the drag and drop capabilities provided by HTML5 drag and drop APIs.

The drag and drop events are handled by the JavaScript code, which also creates the droppable input buckets and the choices that may be moved about. Additionally, it verifies the user's sorting and modifies the result message as necessary. Additionally, depending on the game status, it turns on and off the reset and check buttons.

The quiz game's style, including the visual effects, animations, and transitions, is provided by the CSS code. Dragging, dropping, displaying the outcome message, and fading in the reset button all use animations.

# TGetting Started Steps

The given HTML file ('index.html') must be opened in a web browser that supports HTML5 drag and drop APIs in order to play the quiz game. By dragging and dropping the values into the appropriate order, you may play the game. After verifying the outcome, you can start it over.

You are free to change the game's HTML, CSS, and JavaScript code to make it look a certain way, offer other features, or have it perform a certain way.

# Playing the quiz game with drag and drop is fun!


