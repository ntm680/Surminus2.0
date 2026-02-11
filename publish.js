
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Load package.json for version
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const VERSION = packageJson.version;
const REPO_URL = 'https://github.com/ntm680/Surminus2.0.git';
const RELEASE_DIR = './release';

console.log(`🚀 Starting SECURE publication for SurMinus v${VERSION}...`);

try {
    // 1. Build the project (Outputs to dist AND launcher/dist)
    console.log('📦 Building project (JS Only)...');
    execSync('npm run build', { stdio: 'inherit' });

    // 2. Create version.json in dist
    console.log('📝 Creating version.json...');
    const versionData = { version: VERSION };
    fs.writeFileSync('./dist/version.json', JSON.stringify(versionData, null, 2));

    // 3. Prepare Release Directory
    if (!fs.existsSync(RELEASE_DIR)) {
        fs.mkdirSync(RELEASE_DIR);
    }

    // 4. Copy Artifacts to Release Directory
    console.log('📂 Copying artifacts to release folder...');
    const filesToCopy = [
        { src: 'dist/SurMinus.user.js', dest: 'SurMinus.user.js' },
        { src: 'dist/SurMinus (DO NOT EXTRACT).zip', dest: 'SurMinus (DO NOT EXTRACT).zip' },
        { src: 'dist/version.json', dest: 'version.json' }
    ];

    filesToCopy.forEach(file => {
        fs.copyFileSync(file.src, path.join(RELEASE_DIR, file.dest));
    });

    // 5. Git Operations inside Release Directory
    console.log('📤 Publishing to GitHub (Artifacts Only)...');
    
    const execRelease = (cmd) => execSync(cmd, { cwd: RELEASE_DIR, stdio: 'inherit' });

    // Init git if not exists
    if (!fs.existsSync(path.join(RELEASE_DIR, '.git'))) {
        execRelease('git init');
        execRelease(`git remote add origin ${REPO_URL}`);
        execRelease('git branch -M main');
    }

    execRelease('git add .');
    
    try {
        execRelease(`git commit -m "Release v${VERSION}"`);
    } catch (e) {
        console.log('⚠️ Nothing to commit (files might be unchanged).');
    }

    // Force push to overwrite any source code history if it exists, ensures only artifacts are there
    console.log('forcing push to ensure clean history...');
    execRelease('git push -f origin main');

    console.log('✅ Publication successful!');
    console.log(`🔗 ${REPO_URL.replace('.git', '')}`);
    console.log('🔒 Source code remains private.');

} catch (error) {
    console.error('❌ Publication failed:', error.message);
    process.exit(1);
}
