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
