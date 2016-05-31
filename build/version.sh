#! /bin/bash
git config --global user.email "matt@mattgoucher.com"
git config --global user.name "mattgoucher"

  standard-version patch -m "chore(release): version %s build ${CIRCLE_BUILD_NUM} [ci skip]"

  git push --tags origin ${CIRCLE_BRANCH}
