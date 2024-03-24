#!/usr/bin/env node

import path from 'node:path';
import process from 'node:process';
import fs from 'node:fs/promises';
import {execa} from 'execa';
import defaultConfig from './assets/behemoth-config.js';

const projectPath = process.cwd();
const sourcePath = path.resolve(projectPath, 'src');
const configPath = path.resolve(sourcePath, 'behemoth-config.js');
// const packageJsonPath = path.join(projectPath, 'package.json');

await fs.mkdir(sourcePath, {recursive: true});

try {
	await import(configPath);
	console.log('behemoth-config.js found. Process ended.');
} catch {
	await fs.writeFile(configPath, defaultConfig);
}

await execa('npm', ['install', '@behemothjs/behemoth', {cwd: projectPath}]);
