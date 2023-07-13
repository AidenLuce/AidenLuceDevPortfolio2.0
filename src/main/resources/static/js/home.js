$(function () {
    $('.logo').on("click", ()=>{
        alert("logo clicked")
    }).hover(()=>{
        $(this).css(
            'background-color', 'var(--gold)',
            'border-color', 'var(--white)',
            'color', 'var(--navy)'
        );
    },
        () => {
            $(this).css(
                'background-color', 'var(--navy)',
                'border-color', 'var(--gold)',
                'color', 'var(--gold)'
            );
        }
    );




})