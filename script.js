function optimizeUrl() {
    var url = document.getElementById('urlInput').value;
    
    // Calculate character count
    var charCount = url.length;
    var charCountColor = charCount > 50 ? 'darkred' : 'green';
    var charCountBackground = charCountColor === 'darkred' ? 'lightcoral' : 'lightgreen';
    var charCountAction = charCount > 50 ? 'Shorten the URL!' : 'Looks good!';

    // Check if the URL has numbers
    var hasNumbers = /\d/.test(url) ? "Yes" : "No";
    var hasNumbersColor = hasNumbers === "Yes" ? 'darkred' : 'green';
    var hasNumbersBackground = hasNumbersColor === 'darkred' ? 'lightcoral' : 'lightgreen';
    var hasNumbersAction = hasNumbers === "Yes" ? 'Remove numbers!' : 'Looks good!';

    // Check if the URL contains specific words
    var words = ["to", "in", "and", "for", "by"];
    var hasWords = words.some(word => url.includes(word)) ? "Yes" : "No";
    var hasWordsColor = hasWords === "Yes" ? 'darkred' : 'green';
    var hasWordsBackground = hasWordsColor === 'darkred' ? 'lightcoral' : 'lightgreen';
    var hasWordsAction = hasWords === "Yes" ? 'Remove prepositions!' : 'Looks good!';

    // Calculate number of paths
    var pathCount = url.split('/').filter(part => part.length > 0).length - 1;
    var pathCountColor = pathCount > 3 ? 'darkred' : 'green';
    var pathCountBackground = pathCountColor === 'darkred' ? 'lightcoral' : 'lightgreen';
    var pathCountAction = pathCount < 3 ? 'Looks good!' : 'Simplify URL Structure!';

    // Calculate optimisation score (example: higher score for fewer characters, no numbers, and no specific words)
    var optimisationScore = 100;
    if (charCount > 50) optimisationScore -= 10;
    if (hasNumbers === "Yes") optimisationScore -= 20;
    if (hasWords === "Yes") optimisationScore -= 10;
    if (pathCount > 3) optimisationScore -= 20;
    optimisationScore -= pathCount * 5;

    // Determine score color and background
    var scoreColor, scoreBackground, scoreAction;
    if (optimisationScore > 90) {
        scoreColor = 'green';
        scoreBackground = 'lightgreen';
        scoreAction = 'Looks good!';
    } else if (optimisationScore >= 70 && optimisationScore <= 90) {
        scoreColor = 'darkgoldenrod';
        scoreBackground = 'lightyellow';
        scoreAction = 'You can do better!';
    } else {
        scoreColor = 'darkred';
        scoreBackground = 'lightcoral';
        scoreAction = "OMG! That's bad!";
    }

    // Create the result table with borders and styling
    var resultTable = `
        <table style="border-collapse: collapse; width: 100%;">
            <tr style="border: 1px solid #dddddd;">
                <th style="border: 1px solid #dddddd; background-color: #f2f2f2; text-align: left; padding: 8px;">Characteristic</th>
                <th style="border: 1px solid #dddddd; background-color: #f2f2f2; text-align: left; padding: 8px;">Value</th>
                <th style="border: 1px solid #dddddd; background-color: #f2f2f2; text-align: left; padding: 8px;">Action</th>
            </tr>
            <tr style="border: 1px solid #dddddd;">
                <td style="border: 1px solid #dddddd; padding: 8px;">Optimisation Score</td>
                <td style="border: 1px solid #dddddd; padding: 8px; color:${scoreColor}; background-color:${scoreBackground};">${optimisationScore}</td>
                <td style="border: 1px solid #dddddd; padding: 8px;">${scoreAction}</td>
            </tr>
            <tr style="border: 1px solid #dddddd;">
                <td style="border: 1px solid #dddddd; padding: 8px;">Character Count</td>
                <td style="border: 1px solid #dddddd; padding: 8px; color:${charCountColor}; background-color:${charCountBackground};">${charCount}</td>
                <td style="border: 1px solid #dddddd; padding: 8px;">${charCountAction}</td>
            </tr>
            <tr style="border: 1px solid #dddddd;">
                <td style="border: 1px solid #dddddd; padding: 8px;">Has Numbers</td>
                <td style="border: 1px solid #dddddd; padding: 8px; color:${hasNumbersColor}; background-color:${hasNumbersBackground};">${hasNumbers}</td>
                <td style="border: 1px solid #dddddd; padding: 8px;">${hasNumbersAction}</td>
            </tr>
            <tr style="border: 1px solid #dddddd;">
                <td style="border: 1px solid #dddddd; padding: 8px;">Contains Propositions</td>
                <td style="border: 1px solid #dddddd; padding: 8px; color:${hasWordsColor}; background-color:${hasWordsBackground};">${hasWords}</td>
                <td style="border: 1px solid #dddddd; padding: 8px;">${hasWordsAction}</td>
            </tr>
            <tr style="border: 1px solid #dddddd;">
                <td style="border: 1px solid #dddddd; padding: 8px;">Path Depth</td>
                <td style="border: 1px solid #dddddd; padding: 8px; color:${pathCountColor}; background-color:${pathCountBackground};">${pathCount}</td>
                <td style="border: 1px solid #dddddd; padding: 8px;">${pathCountAction}</td>
            </tr>
        </table>
    `;

    // Display the result table
    document.getElementById('result').innerHTML = resultTable;
}