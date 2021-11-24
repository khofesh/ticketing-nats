udemy microservices

```shell
[fahmad@ryzen auth]$  kubectl create secret generic jwt-secret --from-literal=JWT_KEY=your-jwt-key
secret/jwt-secret created

[fahmad@ryzen auth]$  kubectl get secrets
NAME                  TYPE                                  DATA   AGE
default-token-dwr92   kubernetes.io/service-account-token   3      36d
jwt-secret            Opaque                                1      12s
pgpassword            Opaque                                1      31d
```

## NATS

A StatefulSet is another Kubernetes controller that manages pods just like Deployments. But it differs from a Deployment in that it is more suited for stateful apps. ... By nature, a StatefulSet needs persistent storage so that the hosted application saves its state and data across restarts.

https://www.magalix.com/blog/kubernetes-statefulsets-101-state-of-the-pods

https://github.com/nats-io/k8s

### nats-box

https://github.com/nats-io/nats-box

https://github.com/nats-io/k8s

```sh
[fahmad@ryzen tickets]$ kubectl run -i --rm --tty nats-box --image=synadia/nats-box --restart=Never
If you don't see a command prompt, try pressing enter.
nats-box:~# nats sub -s nats hello &
nats-box:~# 05:39:15 Subscribing on hello
^C
nats-box:~# nats pub -s nats hello world
05:40:12 Published 5 bytes to "hello"
[#1] Received on "hello"
world

nats-box:~#

```

### port-forward

```sh
kubectl port-forward nats-0 4222:4222
```

## rabbitmq
