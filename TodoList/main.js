$(document).ready(function () {
    $('#add-todo > button').on('click', function () {
        // What we wrote in input element?
        let text = $(this).prev().val();
        // Empty input element
        $(this).prev().val('');
        // Create new element with jQuery
        let new_todo = $(`<li class="todo-item">
                            <label>
                                <input type="checkbox">
                                ${text}
                            </label>
                        </li>`);
        // Add event to new element. Event fires when input changes 
        new_todo.find('input').on('change', function () {
            $(this).closest('li').toggleClass('crossed');
        });
        // Append new element to the list
        $('.todo-list').append(new_todo);
    });
});