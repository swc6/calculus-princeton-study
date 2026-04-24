# 第二周：练习题目

## 基础概念题

### 选择题
1. 下列关于极限的说法正确的是：
   A. $\lim_{x \to 0} \frac{1}{x}$ 存在且等于0
   B. $\lim_{x \to 0} \frac{|x|}{x}$ 存在且等于1
   C. $\lim_{x \to 0} \frac{\sin x}{x} = 1$
   D. $\lim_{x \to \infty} \frac{x}{x+1}$ 不存在

2. 若 $\lim_{x \to a^+} f(x) = L_1$，$\lim_{x \to a^-} f(x) = L_2$，则当下列条件成立时，$\lim_{x \to a} f(x)$ 存在：
   A. $L_1 = L_2$
   B. $L_1 \neq L_2$
   C. $L_1 + L_2 = 0$
   D. $L_1 \cdot L_2 = 1$

3. 当 $x \to 0$ 时，下列函数不是无穷小量的是：
   A. $x^2$
   B. $\sin x$
   C. $\frac{1}{x}$
   D. $\ln(1+x)$

### 填空题
1. $\lim_{x \to 2} (x^2 - 3x + 1) = $ __________

2. $\lim_{x \to 0} \frac{\sin 5x}{x} = $ __________

3. $\lim_{x \to \infty} \left(1 + \frac{3}{x}\right)^x = $ __________

4. 若 $\lim_{x \to 1} \frac{x^2 - ax + 2}{x - 1} = 3$，则 $a = $ __________

## 求极限计算题

### 直接代入法练习
1. $\lim_{x \to 3} (2x^2 - 5x + 1)$
2. $\lim_{x \to -1} \frac{x^3 + 1}{x + 1}$
3. $\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$

### 因式分解法练习
1. $\lim_{x \to 2} \frac{x^2 - 4}{x^2 - x - 2}$
2. $\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1}$
3. $\lim_{x \to 3} \frac{x^2 - 9}{\sqrt{x+1} - 2}$

### 有理化法练习
1. $\lim_{x \to 0} \frac{\sqrt{1+x} - 1}{x}$
2. $\lim_{x \to 4} \frac{\sqrt{x} - 2}{\sqrt{x+1} - \sqrt{5}}$
3. $\lim_{x \to \infty} (\sqrt{x+1} - \sqrt{x})$

### 两个重要极限应用
1. $\lim_{x \to 0} \frac{\sin 3x}{\sin 5x}$
2. $\lim_{x \to 0} \frac{\tan x}{\sin x}$
3. $\lim_{x \to 0} \frac{1 - \cos x}{x^2}$
4. $\lim_{x \to \infty} \left(1 + \frac{2}{x}\right)^{3x}$
5. $\lim_{x \to 0} (1 + 3x)^{1/x}$
6. $\lim_{x \to \infty} \left(\frac{x+1}{x-1}\right)^x$

### 等价无穷小替换练习
1. $\lim_{x \to 0} \frac{\sin x}{\arctan x}$
2. $\lim_{x \to 0} \frac{e^x - 1}{\ln(1+x)}$
3. $\lim_{x \to 0} \frac{(1+x)^3 - 1}{x}$
4. $\lim_{x \to 0} \frac{\tan x - \sin x}{x^3}$

## 证明题

1. 证明：$\lim_{x \to 0} \frac{\sin x}{x} = 1$

2. 证明：$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$

3. 用夹逼定理证明：$\lim_{x \to +\infty} \frac{\sin x}{x} = 0$

4. 证明：若 $\lim f(x) = A$，且 $A > 0$，则存在 $\delta > 0$，使得当 $0 < |x - x_0| < \delta$ 时，$f(x) > 0$

## 综合应用题

1. 已知 $f(x) = \begin{cases} x^2 + 1 & \text{当 } x < 1 \\ ax + b & \text{当 } x \geq 1 \end{cases}$，若 $\lim_{x \to 1} f(x)$ 存在，求 $a$ 和 $b$ 的值。

2. 求 $\lim_{x \to 0} \frac{\sqrt{1+x} - \sqrt{1-x}}{x}$

3. 求 $\lim_{x \to 0} \frac{\sin x - \tan x}{x^3}$

4. 求 $\lim_{x \to \infty} \left(\sqrt{x^2 + x} - x\right)$

5. 求 $\lim_{n \to \infty} \left(\frac{1}{n^2} + \frac{2}{n^2} + \cdots + \frac{n}{n^2}\right)$

6. 讨论函数 $f(x) = \frac{|x|}{x}$ 当 $x \to 0$ 时的极限是否存在。

7. 求 $\lim_{x \to 0} x \cdot \sin \frac{1}{x}$，并说明理由。

8. 已知 $\lim_{x \to 2} \frac{x^2 + ax + b}{x^2 - 4} = 3$，求 $a$ 和 $b$ 的值。

## 提高题

1. 求 $\lim_{x \to 0} \frac{\sin x}{x}$ 的 $n$ 阶泰勒展开。

2. 证明：$\lim_{x \to 0^+} x^x = 1$

3. 求 $\lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/x^2}$

4. 已知 $\lim_{x \to 0} \frac{\ln(1+x) - ax}{x^2} = b$，求 $a$ 和 $b$ 的值。

5. 求 $\lim_{x \to 0} \frac{\cos x - 1}{\ln(1+x)}$