import $ from 'jquery'

export function hi() {
    console.log("hi")
}

export const doRegister = async () => {
        const response = await $.ajax({
            url: 'http://localhost:8085/api/user/newUser',
            method: 'POST',
            dataType: 'json',
            data: '{"forename":"Dubske", "surname":"steam", "status":"CEO"}',
            success: function (data) {
                console.log("You've successfully registered yourself on the website")
                console.log("Your details: ")
                console.log(data)
            },
            error: function (data) {
                console.log("FAILED");
            }
        });
};

