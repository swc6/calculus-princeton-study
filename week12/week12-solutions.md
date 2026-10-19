# 第12周：练习答案

## 数列与级数的基本概念、几何级数

### 选择题
1. **答案：A**
   解析：裂项 $\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$，则 $S_n = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}$

2. **答案：A**
   解析：$|r| \neq 1$ 时 $S_n = \frac{a(1-r^n)}{1-r}$。当 $|r| < 1$ 时 $r^n \to 0$，$S_n \to \frac{a}{1-r}$；当 $|r| > 1$ 时 $r^n$ 无界。$r = 1$ 时 $S_n = na \to \infty$，$r = -1$ 时 $S_n$ 振荡，故当且仅当 $|r| < 1$ 时收敛

3. **答案：B**
   解析：这是首项 $\frac{2}{3}$、公比 $r = \frac{2}{3}$ 的几何级数，$|r| < 1$，和 $S = \frac{2/3}{1 - 2/3} = 2$

### 填空题
1. **答案：$1$**
   解析：首项 $\frac{1}{2}$、公比 $\frac{1}{2}$ 的几何级数，$S = \frac{1/2}{1 - 1/2} = 1$

2. **答案：$\frac{3}{4}$**
   解析：$\frac{1}{n(n+2)} = \frac{1}{2}\left(\frac{1}{n} - \frac{1}{n+2}\right)$，$S_n = \frac{1}{2}\left(1 + \frac{1}{2} - \frac{1}{n+1} - \frac{1}{n+2}\right) \to \frac{1}{2} \cdot \frac{3}{2} = \frac{3}{4}$

3. **答案：$1$**
   解析：级数的和即部分和数列的极限：$S = \lim_{n \to \infty} S_n = \lim_{n \to \infty} \frac{n}{n+1} = 1$

### 解答题
1. **解**：$\frac{1}{n(n+3)} = \frac{1}{3}\left(\frac{1}{n} - \frac{1}{n+3}\right)$，部分和 $S_n = \frac{1}{3}\left(1 + \frac{1}{2} + \frac{1}{3} - \frac{1}{n+1} - \frac{1}{n+2} - \frac{1}{n+3}\right)$，故 $\lim_{n \to \infty} S_n = \frac{1}{3}\left(1 + \frac{1}{2} + \frac{1}{3}\right) = \frac{1}{3} \cdot \frac{11}{6} = \frac{11}{18}$。级数收敛，和为 $\frac{11}{18}$

2. **解**：这是首项 $1$、公比 $r = -\frac{1}{3}$ 的几何级数，$|r| = \frac{1}{3} < 1$ 收敛，和 $S = \frac{1}{1 - \left(-\frac{1}{3}\right)} = \frac{1}{\frac{4}{3}} = \frac{3}{4}$

3. **解**：$\lim_{n \to \infty} \frac{n}{2n+1} = \frac{1}{2} \neq 0$，不满足级数收敛的必要条件（通项趋于零），故级数发散

4. **解**：$0.\overline{45} = \frac{45}{100} + \frac{45}{100^2} + \frac{45}{100^3} + \cdots$，为首项 $\frac{45}{100}$、公比 $\frac{1}{100}$ 的几何级数，$S = \frac{45/100}{1 - 1/100} = \frac{45}{99} = \frac{5}{11}$

5. **解**：由收敛级数的性质，$\sum_{n=1}^{\infty} \left(\frac{1}{2^n} + \frac{1}{3^n}\right) = \sum_{n=1}^{\infty} \frac{1}{2^n} + \sum_{n=1}^{\infty} \frac{1}{3^n}$，其中 $\sum \frac{1}{2^n} = \frac{1/2}{1-1/2} = 1$，$\sum \frac{1}{3^n} = \frac{1/3}{1-1/3} = \frac{1}{2}$，故和为 $1 + \frac{1}{2} = \frac{3}{2}$

6. **解**：$a_1 = S_1 = \frac{1+1}{1} = 2$；$a_2 = S_2 - S_1 = \frac{3}{2} - 2 = -\frac{1}{2}$；级数的和为 $S = \lim_{n \to \infty} S_n = \lim_{n \to \infty} \frac{n+1}{n} = 1$

7. **解**：发散。用反证法：若 $\sum \left(\frac{1}{n} + \frac{1}{2^n}\right)$ 收敛，而已知 $\sum \frac{1}{2^n}$ 收敛，则由性质两者之差 $\sum_{n=1}^{\infty} \left[\left(\frac{1}{n} + \frac{1}{2^n}\right) - \frac{1}{2^n}\right] = \sum \frac{1}{n}$（调和级数）也应收敛，矛盾。故原级数发散

## 正项级数判别法

### 选择题
1. **答案：A**
   解析：p-级数当 $p > 1$ 时收敛，$p \leq 1$ 时发散（$p = 1$ 即调和级数发散）

2. **答案：A**
   解析：比值判别法中，$\rho < 1$ 收敛，$\rho > 1$ 发散，$\rho = 1$ 时失效，不能得出结论

3. **答案：B**
   解析：$\sum \frac{1}{n^{3/2}}$ 为 $p = \frac{3}{2} > 1$ 的 p-级数，收敛；A 为 $p = \frac{1}{2}$ 的 p-级数，C、D 与调和级数同型（或极限比较），均发散

### 填空题
1. **答案：$p = 2$；收敛**
   解析：$n \geq 1$ 时 $\frac{1}{n^2+n} < \frac{1}{n^2}$，而 $\sum \frac{1}{n^2}$（$p = 2 > 1$）收敛，由比较判别法原级数收敛

2. **答案：发散**
   解析：比值判别法中 $\rho = 2 > 1$，故级数发散

3. **答案：$\rho = \frac{1}{2}$；收敛**
   解析：$\lim \frac{a_{n+1}}{a_n} = \lim \frac{n \cdot 2^n}{(n+1) \cdot 2^{n+1}} = \lim \frac{1}{2} \cdot \frac{n}{n+1} = \frac{1}{2} < 1$，故级数收敛

### 解答题
1. **解**：取 $b_n = \frac{1}{n}$，$\lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{n}{2n-1} = \frac{1}{2} \in (0, +\infty)$。由极限比较判别法，$\sum a_n$ 与调和级数 $\sum \frac{1}{n}$ 同敛散，而调和级数发散，故原级数发散

2. **解**：$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{(n+1)^2}{3^{n+1}} \cdot \frac{3^n}{n^2} = \frac{1}{3} \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^2 = \frac{1}{3} < 1$，由比值判别法，级数收敛

3. **解**：$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{(n+1)!}{10^{n+1}} \cdot \frac{10^n}{n!} = \lim_{n \to \infty} \frac{n+1}{10} = +\infty > 1$，由比值判别法，级数发散

4. **解**：取 $b_n = \frac{1}{n}$，$\lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{n}{\sqrt{n(n+1)}} = \lim_{n \to \infty} \sqrt{\frac{n}{n+1}} = 1 \in (0, +\infty)$。由极限比较判别法，与调和级数同敛散，故级数发散

5. **解**：$f(x) = \frac{1}{x\ln x}$ 在 $[2, +\infty)$ 上非负、连续且单调递减，且 $a_n = f(n)$。计算 $\int_2^{+\infty} \frac{dx}{x \ln x} = \int_2^{+\infty} \frac{d(\ln x)}{\ln x} = \left[\ln(\ln x)\right]_2^{+\infty} = +\infty$，反常积分发散。由积分判别法，级数发散

6. **解**：取 $b_n = \frac{1}{\sqrt{n}}$，$\lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{n \sqrt{n}}{\sqrt{n^3+2}} = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{2}{n^3}}} = 1 \in (0, +\infty)$。由极限比较判别法，与 $p = \frac{1}{2} \leq 1$ 的 p-级数同敛散，故级数发散

7. **解**：$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{2^{n+1}(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{2^n n!} = \lim_{n \to \infty} 2 \cdot \frac{n^n}{(n+1)^n} = 2 \lim_{n \to \infty} \left(\frac{n}{n+1}\right)^n = \frac{2}{e} \approx 0.736 < 1$，由比值判别法，级数收敛

8. **解**：$\lim_{n \to \infty} \sqrt[n]{a_n} = \lim_{n \to \infty} \frac{n}{2n+1} = \frac{1}{2} < 1$，由根值判别法，级数收敛

## 交错级数与绝对收敛、条件收敛

### 选择题
1. **答案：A**
   解析：莱布尼茨判别法需要两个条件同时满足：$a_n$ 单调递减且 $\lim a_n = 0$

2. **答案：B**
   解析：$a_n = \frac{1}{n}$ 单调递减趋于 0，由莱布尼茨判别法收敛；但 $\sum \left|\frac{(-1)^n}{n}\right| = \sum \frac{1}{n}$ 为调和级数发散，故为条件收敛

3. **答案：A**
   解析：绝对收敛必收敛，故 $\sum a_n$ 必收敛且为绝对收敛

### 填空题
1. **答案：条件收敛**
   解析：$\sum \frac{1}{\sqrt{n}}$ 是 $p = \frac{1}{2} \leq 1$ 的 p-级数，发散，故非绝对收敛；$\frac{1}{\sqrt{n}}$ 单调递减趋于 0，由莱布尼茨判别法原级数收敛，故条件收敛

2. **答案：绝对收敛**
   解析：$\sum \left|\frac{(-1)^n}{n^2}\right| = \sum \frac{1}{n^2}$ 为 $p = 2 > 1$ 的 p-级数，收敛，故原级数绝对收敛

3. **答案：条件收敛**
   解析：$\frac{1}{\ln n}$ 单调递减且 $\lim_{n \to \infty} \frac{1}{\ln n} = 0$（$n \geq 2$），由莱布尼茨判别法收敛；而 $n \geq 3$ 时 $\ln n < n$，故 $\frac{1}{\ln n} > \frac{1}{n}$，与调和级数比较知 $\sum \frac{1}{\ln n}$ 发散，故条件收敛

### 解答题
1. **解**：取绝对值得 $\sum_{n=1}^{\infty} \frac{1}{n^3}$，为 $p = 3 > 1$ 的 p-级数，收敛。故原级数绝对收敛（从而收敛）

2. **解**：先看绝对值级数 $\sum \frac{\ln n}{n}$：当 $n \geq 3$ 时 $\ln n \geq 1$，故 $\frac{\ln n}{n} \geq \frac{1}{n}$，与调和级数比较知其发散，故非绝对收敛。再看原级数：设 $f(x) = \frac{\ln x}{x}$，$f'(x) = \frac{1 - \ln x}{x^2} < 0$（当 $x > e$），故 $n \geq 3$ 时 $\frac{\ln n}{n}$ 单调递减，且 $\lim_{n \to \infty} \frac{\ln n}{n} = 0$。由莱布尼茨判别法，原级数收敛。综上，级数条件收敛

3. **解**：$\lim_{n \to \infty} \frac{n}{n+1} = 1 \neq 0$，通项不趋于零（不满足收敛的必要条件），故级数发散（注：莱布尼茨判别法不适用，因为 $a_n$ 不趋于 0）

4. **解**：绝对值级数为 p-级数 $\sum \frac{1}{n^p}$：(1) 当 $p > 1$ 时 $\sum \frac{1}{n^p}$ 收敛，原级数绝对收敛；(2) 当 $0 < p \leq 1$ 时 $\sum \frac{1}{n^p}$ 发散，但 $a_n = \frac{1}{n^p}$ 单调递减趋于 0，由莱布尼茨判别法原级数收敛，故为条件收敛；(3) 当 $p \leq 0$ 时通项 $\frac{(-1)^{n-1}}{n^p}$ 不趋于 0（$p = 0$ 时振荡于 $\pm 1$；$p < 0$ 时 $|a_n| \to \infty$），级数发散

5. **解**：先看绝对值级数 $\sum \frac{1}{2^n - 1}$，用比值判别法：$\lim_{n \to \infty} \frac{2^n - 1}{2^{n+1} - 1} = \lim_{n \to \infty} \frac{1 - \frac{1}{2^n}}{2 - \frac{1}{2^n}} = \frac{1}{2} < 1$，故 $\sum \frac{1}{2^n-1}$ 收敛。因此原级数绝对收敛

6. **解**：绝对值级数 $\sum \frac{n}{n^2+1}$：与 $\frac{1}{n}$ 极限比较，$\lim \frac{n}{n^2+1} \cdot n = 1$，而 $\sum \frac{1}{n}$ 发散，故非绝对收敛。原级数：设 $f(x) = \frac{x}{x^2+1}$，$f'(x) = \frac{1 - x^2}{(x^2+1)^2} < 0$（$x > 1$），故 $n \geq 1$ 后 $\frac{n}{n^2+1}$ 单调递减（$\frac{1}{2} > \frac{2}{5}$），且 $\lim_{n \to \infty} \frac{n}{n^2+1} = 0$。由莱布尼茨判别法收敛。综上，级数条件收敛

7. **解**：绝对值级数 $\sum \frac{\sqrt{n}}{n+1}$：与 $\frac{1}{\sqrt{n}}$ 极限比较，$\lim \frac{\sqrt{n}}{n+1} \cdot \sqrt{n} = \lim \frac{n}{n+1} = 1$，而 $\sum \frac{1}{\sqrt{n}}$（$p = \frac{1}{2}$）发散，故非绝对收敛。原级数：$f(x) = \frac{\sqrt{x}}{x+1}$，$f'(x) = \frac{1 - x}{2\sqrt{x}(x+1)^2} < 0$（$x > 1$），故 $\frac{\sqrt{n}}{n+1}$ 当 $n \geq 1$ 单调递减（$\frac{1}{2} > \frac{\sqrt{2}}{3}$），且 $\lim_{n \to \infty} \frac{\sqrt{n}}{n+1} = 0$。由莱布尼茨判别法收敛。综上，级数条件收敛

8. **解**：$\left|\frac{\sin\frac{n\pi}{2}}{n^2}\right| \leq \frac{1}{n^2}$，而 $\sum \frac{1}{n^2}$（$p = 2 > 1$）收敛，由比较判别法 $\sum \left|\frac{\sin\frac{n\pi}{2}}{n^2}\right|$ 收敛。故原级数绝对收敛

## 综合应用题

1. **解**：由 $a > 1$ 知 $n \geq 1$ 时 $1 + a^n > a^n$，故 $0 < \frac{1}{1+a^n} < \frac{1}{a^n} = \left(\frac{1}{a}\right)^n$。而 $\sum \left(\frac{1}{a}\right)^n$ 是公比 $\frac{1}{a} \in (0,1)$ 的几何级数，收敛。由比较判别法，原级数收敛

2. **解**：$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{3^{n+1}}{(n+1) \cdot 2^{n+1}} \cdot \frac{n \cdot 2^n}{3^n} = \frac{3}{2} \lim_{n \to \infty} \frac{n}{n+1} = \frac{3}{2} > 1$，由比值判别法，级数发散

3. **解**：当 $n \geq 3$ 时 $\ln n < n$，故 $\frac{1}{\ln n} > \frac{1}{n}$。调和级数 $\sum \frac{1}{n}$ 发散，由比较判别法，原级数发散

4. **解**：$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{(n+1)\left(\frac{3}{4}\right)^{n+1}}{n\left(\frac{3}{4}\right)^n} = \frac{3}{4} \lim_{n \to \infty} \frac{n+1}{n} = \frac{3}{4} < 1$，由比值判别法，级数收敛

5. **解**：取绝对值得 $\sum \frac{n^3}{2^n}$，用比值判别法：$\lim_{n \to \infty} \frac{(n+1)^3}{2^{n+1}} \cdot \frac{2^n}{n^3} = \frac{1}{2} \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^3 = \frac{1}{2} < 1$，故 $\sum \frac{n^3}{2^n}$ 收敛，原级数绝对收敛

6. **解**：因为 $\sum a_n$ 收敛，所以 $\lim_{n \to \infty} a_n = 0$，故存在 $N$，当 $n \geq N$ 时 $0 \leq a_n \leq 1$，从而 $a_n^2 \leq a_n$。由比较判别法，$\sum_{n=N}^{\infty} a_n^2$ 收敛；又增加或去掉有限项不改变敛散性，故 $\sum a_n^2$ 收敛。证毕

7. **解**：$f(x) = \frac{1}{x \ln^2 x}$ 在 $[2, +\infty)$ 上非负、连续且单调递减。计算 $\int_2^{+\infty} \frac{dx}{x \ln^2 x} = \int_2^{+\infty} \frac{d(\ln x)}{\ln^2 x} = \left[-\frac{1}{\ln x}\right]_2^{+\infty} = \frac{1}{\ln 2} < +\infty$，反常积分收敛。由积分判别法，级数收敛

8. **解**：第一次下落经过 8 米；此后每次"弹起 + 下落"经过的路程为 $2 \times 8 \times \left(\frac{1}{2}\right)^n$（$n = 1, 2, \cdots$）。总路程
$$S = 8 + \sum_{n=1}^{\infty} 2 \cdot 8 \cdot \left(\frac{1}{2}\right)^n = 8 + 16 \sum_{n=1}^{\infty} \left(\frac{1}{2}\right)^n = 8 + 16 \times 1 = 24$$
即总路程为 24 米
