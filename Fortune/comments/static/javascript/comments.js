const nickname = document.getElementById("nickname")
const comment = document.getElementById("comment")
const comment_btn = document.getElementById("comment_btn")

comment_btn.addEventListener("click", function (){
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    payload = {
        "nickname": nickname.value,
        "comment": comment.value
    }
    $.ajax({
        headers: {'X-CSRFToken': csrftoken},
        type: 'POST',
        dataType: "json",
        url: "/comments_url/",
        timeout: 0,
        data: payload,
        success: function(data){
            console.log('SUCCESS: ' + data['response'])
            if(data['response'] == "Comment saved!"){
                location.reload(true)
            }

            else if(data['response'] != null){
                alert("This is data: ", data['response'])
            }
        },
        error: function(request, status, error){
            console.log(request.responseText);
            console.log(status);
            console.log(error);
        }
    })
})



function delete_button(clicked_id){
    const delete_btn = document.getElementById(clicked_id)
    const c_id = clicked_id.split("_")

    if (delete_btn != null){
        Delete(c_id[1])
    }

    function Delete(comm_id){
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        payload = {
            "comm_id": comm_id
        }
        $.ajax({
            headers: {'X-CSRFToken': csrftoken},
            type: 'POST',
            dataType: "json",
            url: "/delete_comment_url/",
            timeout: 0,
            data: payload,
            success: function(data){
                if(data['response'] == "Comment deleted!"){
                    location.reload(true)
                }

                else if(data['response'] != null){
                    alert("This is data: ", data['response'])
                }
            },
            error: function(request, status, error){
                console.log(request.responseText);
                console.log(status);
                console.log(error);
            }
        })
    }
}
