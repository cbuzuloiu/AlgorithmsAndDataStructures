1. În care dintre variantele de mai jos se declară un tablou unidimensional (vector) 𝑥 în care se
pot memora cel mult 100 de numere reale?

a) x=float[100];
b) double x[100];
c) floating x[100];
d) real x(100);

`Raspuns corect b) double x[100];`


6. Se consideră următoarea secvenţă de instrucțiuni:

```c
int t=0,a=1234,b=10;
while(a>=b)
{
	a=a-b;
	t++;
}
printf("%d %d",t,a);
```

Ce valori vor fi afișate pe ecran după executarea secvenței de mai sus?

a) 124 4
b) 123 4
c) 123 5
d) 124 3

`Raspuns corect b) 123 4`

### Explicație:

1. Se inițializează variabilele:     
    - `t = 0`
    - `a = 1234`
    - `b = 10`
2. **Bucle `while(a >= b)`**    
    - Atâta timp cât `a` este mai mare sau egal cu `b`, se execută corpul buclei.
    - Se scade `b` din `a` și se incrementează `t`.
3. **Ce face această buclă?**    
    - Practic, se determină de câte ori încape `b` în `a`.
    - Este echivalent cu `t = a / b` și `a` rămâne restul împărțirii `a % b`.
4. **Calcul efectiv**:    
    - `t = 1234 / 10 = 123`
    - `a = 1234 % 10 = 4`

123 4 Aceasta este valoarea finală a variabilelor `t` și `a` afișată pe ecran.


