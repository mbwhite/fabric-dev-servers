

# delete all existing containers and images
# This is not used in general usage but this might
#read -p "Press y to delete all docker containers images" -n 1 -r
#echo    # (optional) move to a new line
#if [[ $REPLY =~ ^[Yy]$ ]]
#then
#  docker rm $(docker ps -a -q) -f
#  docker rmi $(docker images -q) -f
#fi
