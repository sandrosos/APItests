const inputComida = document.querySelector("#food-input");

const inputResult = document.querySelector("#result");

const botao = document.querySelector(".btn");

const resultField = document.querySelector('.resulting-search')

botao.addEventListener("click", function() {
    var query = inputComida.value;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
        headers: { 'X-Api-Key': 'FN741hlbSg1cIzAhGJz+PA==KKWiBc9U2hZjSY24'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result[0].name);
            document.querySelector('.search--field').classList.add('hidden');
            resultField.classList.remove('hidden')
            result.forEach(result => {
                var name = result.name;
                var image

                /* $.ajax({
                    method: 'GET',
                    url: 'https://api.unsplash.com/search/photos/?query=' + name,
                    headers: { 'accessKey': 'lXUVPBqbLGdGzrJE1BjlXU0trI-iPQsmLqEc9N8E9-A'},
                    contentType: 'application/json',
                    success: function(result1) {
                        console.log(result);
                        // image = result1[0].photos[0].src.small
                    },
                    error: function ajaxError(jqXHR) {
                        console.error('Error: ', jqXHR.responseText);
                    }
                }); */



                resultField.innerHTML += `
                    <div class="card">
                        <div class="name"> Food: ${result.name}</div>
                        <div class="calories">Calories per serving: ${result.calories} Kcal</div>
                        <div class="serving-size">Serving size: ${result.serving_size_g} G</div>
                    </div>
                `
                
            });
            
            
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });

    
});

