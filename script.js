document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const rawInput = document.getElementById('search-input').value;
    const forceSearch = rawInput.startsWith(' ');
    const cleanInput = rawInput.trim();
    
    if (!cleanInput) return; 

    const isUrl = !forceSearch && /^\S+\.\S+$/.test(cleanInput);

    if (isUrl) {
        let finalUrl = cleanInput;
        if (!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
            finalUrl = 'https://' + finalUrl;
        }
        // Use window.top to ensure it escapes any extension iframes
        window.top.location.href = finalUrl;
    } else {
        const searchUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(cleanInput);
        window.top.location.href = searchUrl;
    }
});
