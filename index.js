function copyText(htmlElement)
{
    if (!htmlElement) {
        return;
    }
    let elementText = htmlElement.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);

    inputElement.select();

    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

document.querySelector('#btn1').onclick =
function ()
{
    copyText(document.querySelector('#step1'));
}

document.querySelector('#btn2').onclick =
function ()
{
    copyText(document.querySelector('#step2'));
}

document.querySelector('#btn3').onclick =
function ()
{
    copyText(document.querySelector('#step3'));
}

document.querySelector('#btn4').onclick =
function ()
{
    copyText(document.querySelector('#step4'));
}

document.querySelector('#btn5').onclick =
function ()
{
    copyText(document.querySelector('#step5'));
}

document.querySelector('#btn6').onclick =
function ()
{
    copyText(document.querySelector('#step6'));
}

document.querySelector('#btn7').onclick =
function ()
{
    copyText(document.querySelector('#step7'));
}

document.querySelector('#btn8').onclick =
function ()
{
    copyText(document.querySelector('#step8'));
}

document.querySelector('#btn9').onclick =
function ()
{
    copyText(document.querySelector('#step9'));
}

document.querySelector('#btn10').onclick =
function ()
{
    copyText(document.querySelector('#step10'));
}

document.querySelector('#btn11').onclick =
function ()
{
    copyText(document.querySelector('#step11'));
}

document.querySelector('#btn12').onclick =
function ()
{
    copyText(document.querySelector('#step12'));
}