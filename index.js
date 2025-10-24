// index.js
const path = require('path');
const fs = require('fs-extra');

(async () => {
  try {
    // Базовая директория для задания
    const root = path.join(__dirname, 'playground');

    // 3) создать папку
    const dir1 = path.join(root, 'folder-1');
    await fs.ensureDir(dir1);

    // 4) создать текстовый файл в созданной папке
    const fileInDir1 = path.join(dir1, 'note.txt');
    await fs.writeFile(fileInDir1, 'Hello from folder-1!\n', 'utf8');

    // 5) создать вторую папку
    const dir2 = path.join(root, 'folder-2');
    await fs.ensureDir(dir2);

    // 6) переместить файл из первой папки во вторую
    const fileInDir2 = path.join(dir2, 'note.txt');
    await fs.move(fileInDir1, fileInDir2, { overwrite: true });

    // 7) создать третью папку
    const dir3 = path.join(root, 'folder-3');
    await fs.ensureDir(dir3);

    // 8) скопировать файл из второй в третью папку
    const fileInDir3 = path.join(dir3, 'note.txt');
    await fs.copy(fileInDir2, fileInDir3, { overwrite: true });

    // 9) удалить файлы
    await fs.remove(fileInDir2);
    await fs.remove(fileInDir3);

    // 10) удалить все папки
    await fs.remove(root);

    console.log('Готово: операции выполнены успешно.');
  } catch (err) {
    console.error('Ошибка при выполнении операций:', err);
    process.exit(1);
  }
})();
