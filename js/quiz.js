document.addEventListener('DOMContentLoaded', function() {

    const quizInfo = {};
    maxStage = 5;

    const stageIndicators = document.querySelectorAll('#stages div');
    const stageContents = document.querySelectorAll('.stage-content');

    function stageShow(stageNumber) {
        if(stageNumber>maxStage) {

            console.log(JSON.stringify(quizInfo));
            document.querySelector('#stages').classList.add('d-none');
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: JSON.stringify(quizInfo),
            })
            .done(function () {
                console.log("done");
            })
            .fail(function () {
                console.log("fail");
            });
            return;
        }

        const stageContent = [...stageContents].find(sc => sc.dataset.stage==stageNumber);
        stageContent.classList.add("show");
        const title = stageContent.dataset.title;
        const items = stageContent.querySelectorAll(".stage-content > div > div");
        [...items].forEach(i => {
            i.addEventListener('click', () => {
                const option = i.dataset.option;
                quizInfo[title] = option;
                [...stageIndicators].find(indicator => indicator.dataset.stage == stageNumber).classList.add('bg-gold');
                stageContent.classList.remove("show");
                stageShow(stageNumber+1);
            })
        })
    }


    stageShow(1);
});