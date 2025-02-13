        let num1;
        let num2;
        document.getElementById('result').classList.add('hidden');
        function printValue() {
            // console.log("hello");
            num1 = document.getElementById("num1").value;
            num2 = document.getElementById("num2").value;

            document.getElementById('num1-value').innerText += " "+num1;
            document.getElementById('num2-value').innerText += " "+num2;
            document.getElementById('result').classList.remove('hidden');
            document.getElementById('result').classList.add('active');
        }

        function getOpration(type){
            switch(type)
            {
                case "add":
                    document.getElementById('ans').value = parseInt(num1) + parseInt(num2);
                    break;
                case "sub":
                    document.getElementById('ans').value = parseInt(num1) - parseInt(num2);
                    break;
                case "mul":
                    document.getElementById('ans').value = parseInt(num1) * parseInt(num2);
                case "div":
                    document.getElementById('ans').value =  parseInt(num1) % parseInt(num2);

            }
        }

