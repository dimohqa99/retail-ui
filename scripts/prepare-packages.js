const shell = require("shelljs");
const fs = require("fs");

shell.cd(__dirname);
shell.cd("..");

const sourcePackageJson = fs.readFileSync("./package.json", "utf8");
const retailUIpackageConfig = JSON.parse(sourcePackageJson);
delete retailUIpackageConfig.devDependencies;
delete retailUIpackageConfig.scripts;
fs.writeFileSync("retail-ui-dist/package.json", JSON.stringify(retailUIpackageConfig, null, "  "));

const reactUIpackageConfig = JSON.parse(sourcePackageJson);
delete reactUIpackageConfig.devDependencies;
delete reactUIpackageConfig.scripts;
reactUIpackageConfig.peerDependencies["@skbkontur/react-ui"] = reactUIpackageConfig.peerDependencies["retail-ui"];
delete reactUIpackageConfig.peerDependencies["retail-ui"];
reactUIpackageConfig.name = "@skbkontur/react-ui-validations";
fs.writeFileSync("react-ui-dist/package.json", JSON.stringify(reactUIpackageConfig, null, "  "));

function prepareCommonFiles(targetDir) {
    shell.rm("-rf", targetDir + "/src/*");
    shell.cp("-R", "src/", targetDir);
    shell.cp(".npmrc", targetDir);
    shell.cp("src/index.d.ts", targetDir);
    shell.cp("README.md", targetDir);
    shell.cp("CHANGELOG.md", targetDir);
}

prepareCommonFiles("react-ui-dist");
prepareCommonFiles("retail-ui-dist");
