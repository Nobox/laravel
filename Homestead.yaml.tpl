---
ip: "192.168.10.10"
memory: 2048
cpus: 1
hostname: laravel
name: laravel
provider: virtualbox

authorize: ~/.ssh/id_rsa.pub

keys:
    - ~/.ssh/id_rsa

folders:
    - map: "/home/vagrant/Code/nobox/laravel"
      to: "/home/vagrant/laravel"
      type: "nfs"

sites:
    - map: homestead.app
      to: "/home/vagrant/laravel/public"

databases:
    - homestead
