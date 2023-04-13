
const core = require('@actions/core');
const github = require('@actions/github');

try {

    const fs = require('fs');

    const csproj = core.getInput('csproj');
    const version = core.getInput('version');
    const displayVersion = core.getInput('displayVersion');
    const printFile = core.getInput('printFile');

    if (version && version.trim() == '') {
        core.setFailed("Paramenter csproj is required.");
    }
    
    // match <ApplicationVersion> followed by any sequence of characters that are not a '<', followed by </ApplicationVersion>
    const applicationVersionPattern = /<ApplicationVersion>[^<]*<\/ApplicationVersion>/g; 
    const applicationDisplayVersionPattern = /<ApplicationDisplayVersion>[^<]*<\/ApplicationDisplayVersion>/g; 
    
    if (version && version.trim() !== '') {
        // Read the file contents
        var fileContents = fs.readFileSync(csproj, 'utf8');
        var updatedApplicationVersion = fileContents.replace(applicationVersionPattern, `<ApplicationVersion>${version}</ApplicationVersion>`);
        // Write the updated contents back to the file
        fs.writeFileSync(csproj, updatedApplicationVersion, 'utf8');

        console.log(`<ApplicationVersion>${version}</ApplicationVersion>`);
    } 

    if (displayVersion && displayVersion.trim() !== '') {
        // Read the file contents
        var fileContents = fs.readFileSync(csproj, 'utf8');
        var updatedApplicationVersion = fileContents.replace(applicationDisplayVersionPattern, `<ApplicationDisplayVersion>${displayVersion}</ApplicationDisplayVersion>`);
        // Write the updated contents back to the file
        fs.writeFileSync(csproj, updatedApplicationVersion, 'utf8');

        console.log(`<ApplicationDisplayVersion>${displayVersion}</ApplicationDisplayVersion>`);
    }

    if(printFile) {
        var fileContents = fs.readFileSync(csproj, 'utf8');
        console.log(fileContents);
    }
} 
catch (error) {
    core.setFailed(error.message);
}