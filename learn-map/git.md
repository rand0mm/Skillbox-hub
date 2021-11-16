git status 

git add .

git commit -m ""

git log


git checkout -b new branch новая ветка и смена на нее

git checkout master смена ветки

git branch список веток(только локальные)

git branch new branch создание ветки

git push -u origin new branch создание ветки и соединение с  удаленным репозиторием

git pull стянуть c сервака

git branch -a показать все ветки

git stash отложить изменения

git stash list список

git stash pop последние из отложеных слить в текущую версию

git stash drop N удалить стеш под номером N

git merge <имя ветки откуда слить в текущую>

три стратегии мерджа:
создание отдельного комита
обьединение комитов в один
и перенос комитов из ветки


git diff <file> незакомиченные изменения в файле 

git diff незакомиченные измененния во всех файлах рабочей директории

git diff <commit> сравнение комита с текущей версией(с последним комитом)

git diff <commit> <commit2> 

git diff <commit> <commit2> <file>

git diff <file> <file2>

git blame <file> просмотр пристально на каждую строкую.



git restore <file> незакомиченное в конкретном файле удаляется

git restore --staged <file> вернуть из индекса

git reset --hard удаляет все незакомиченное даже если добавлено в индекс

git clean -f удаляет все новые неотслеживаемые и незакоминченые изменения

git rm --cached <file> удаляет файл из отслеживания после закомита

git mv переименовывание файла после коммита


git checkout <commit> <file> получить файл из этого коммита в рабочую версию уже закомиченым

git checkout --<file> отмена изменения в рабочей директории файла

git commit --amend изменяем последний коммит все что добавлено в индекс идет туда

git revert <commit> возвращаемся к конкретному комиту
git reset --hard удаляем все изменения в рабочей директории
git reset --soft

git revert <commit> отменить данный коммит создав другой

git revert --no-commit <commit> отменить коммит не коммитя, для отката нескольких коммитов подряд

git reset  --soft <commit> с отправкой в индекс

git reset <commit> с отправкой в рабочий каталог

git reset  --hard <commit> с безвозвратным удалением

git commit --amend -m <new> переименовать ласт комит

git commit --amend --no-edit добавить изменения к ласт коммиту



git reset --merge <commit> отмена мердж получившийся

git merge --abort отмена неполучившегося мерджа

git branch -m переименовывание ветки

git branch -d <branch> удаление ветки предварительно слив с другой веткой
