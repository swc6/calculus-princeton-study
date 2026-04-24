# 第二周：练习答案

## 基础概念题

### 选择题
1. **答案：C**
   解析：
   - A错误：$\lim_{x \to 0} \frac{1}{x}$ 不存在（左右极限分别为$-\infty$和$+\infty$）
   - B错误：$\lim_{x \to 0} \frac{|x|}{x}$ 的左右极限分别为$-1$和$1$，不相等，故不存在
   - C正确：这是第一个重要极限
   - D错误：$\lim_{x \to \infty} \frac{x}{x+1} = 1$，存在

2. **答案：A**
   解析：极限存在的充分必要条件是左极限和右极限都存在且相等。

3. **答案：C**
   解析：$\frac{1}{x}$ 当$x \to 0$时是无穷大量，不是无穷小量。

### 填空题
1. **答案：$-1$**
   解析：$\lim_{x \to 2} (x^2 - 3x + 1) = 4 - 6 + 1 = -1$

2. **答案：$5$**
   解析：$\lim_{x \to 0} \frac{\sin 5x}{x} = \lim_{x \to 0} 5 \cdot \frac{\sin 5x}{5x} = 5$

3. **答案：$e^3$**
   解析：$\lim_{x \to \infty} \left(1 + \frac{3}{x}\right)^x = \lim_{x \to \infty} \left[\left(1 + \frac{3}{x}\right)^{x/3}\right]^3 = e^3$

4. **答案：$1$**
   解析：由题意，$\lim_{x \to 1} \frac{x^2 - ax + 2}{x - 1} = 3$，利用因式分解：$\frac{x^2 - ax + 2}{x - 1} = \frac{(x-1)(x + 1 - a) + (3-a)}{x - 1}$，需满足$1 - a + 3 = 0$，故$a = 1$。

## 求极限计算题

### 直接代入法练习
1. $\lim_{x \to 3} (2x^2 - 5x + 1) = 2 \cdot 9 - 5 \cdot 3 + 1 = 18 - 15 + 1 = 4$

2. $\lim_{x \to -1} \frac{x^3 + 1}{x + 1} = \lim_{x \to -1} \frac{(x+1)(x^2 - x + 1)}{x + 1} = \lim_{x \to -1} (x^2 - x + 1) = 1 + 1 + 1 = 3$

3. $\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4} = \lim_{x \to 4} \frac{(\sqrt{x} - 2)(\sqrt{x} + 2)}{(x - 4)(\sqrt{x} + 2)} = \lim_{x \to 4} \frac{x - 4}{(x - 4)(\sqrt{x} + 2)} = \lim_{x \to 4} \frac{1}{\sqrt{x} + 2} = \frac{1}{4}$

### 因式分解法练习
1. $\lim_{x \to 2} \frac{x^2 - 4}{x^2 - x - 2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{(x-2)(x+1)} = \lim_{x \to 2} \frac{x+2}{x+1} = \frac{4}{3}$

2. $\lim_{x \to 1} \frac{x^3 - 1}{x^2 - 1} = \lim_{x \to 1} \frac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \lim_{x \to 1} \frac{x^2+x+1}{x+1} = \frac{3}{2}$

3. $\lim_{x \to 3} \frac{x^2 - 9}{\sqrt{x+1} - 2} = \lim_{x \to 3} \frac{(x-3)(x+3)(\sqrt{x+1} + 2)}{(\sqrt{x+1} - 2)(\sqrt{x+1} + 2)} = \lim_{x \to 3} \frac{(x-3)(x+3)(\sqrt{x+1} + 2)}{x-3} = \lim_{x \to 3} (x+3)(\sqrt{x+1} + 2) = 6 \cdot 4 = 24$

### 有理化法练习
1. $\lim_{x \to 0} \frac{\sqrt{1+x} - 1}{x} = \lim_{x \to 0} \frac{(\sqrt{1+x} - 1)(\sqrt{1+x} + 1)}{x(\sqrt{1+x} + 1)} = \lim_{x \to 0} \frac{x}{x(\sqrt{1+x} + 1)} = \lim_{x \to 0} \frac{1}{\sqrt{1+x} + 1} = \frac{1}{2}$

2. $\lim_{x \to 4} \frac{\sqrt{x} - 2}{\sqrt{x+1} - \sqrt{5}} = \lim_{x \to 4} \frac{(\sqrt{x} - 2)(\sqrt{x} + 2)(\sqrt{x+1} + \sqrt{5})}{(x-4)(\sqrt{x+1} + \sqrt{5})} = \lim_{x \to 4} \frac{(x-4)(\sqrt{x+1} + \sqrt{5})}{(x-4)(\sqrt{x} + 2)} = \lim_{x \to 4} \frac{\sqrt{x+1} + \sqrt{5}}{\sqrt{x} + 2} = \frac{\sqrt{5} + \sqrt{5}}{2 + 2} = \frac{2\sqrt{5}}{4} = \frac{\sqrt{5}}{2}$

3. $\lim_{x \to \infty} (\sqrt{x+1} - \sqrt{x}) = \lim_{x \to \infty} \frac{(\sqrt{x+1} - \sqrt{x})(\sqrt{x+1} + \sqrt{x})}{\sqrt{x+1} + \sqrt{x}} = \lim_{x \to \infty} \frac{1}{\sqrt{x+1} + \sqrt{x}} = 0$

### 两个重要极限应用
1. $\lim_{x \to 0} \frac{\sin 3x}{\sin 5x} = \lim_{x \to 0} \frac{\sin 3x}{3x} \cdot \frac{5x}{\sin 5x} \cdot \frac{3}{5} = \frac{3}{5}$

2. $\lim_{x \to 0} \frac{\tan x}{\sin x} = \lim_{x \to 0} \frac{\sin x}{x} \cdot \frac{x}{\cos x} \cdot \frac{1}{\sin x} = \lim_{x \to 0} \frac{1}{\cos x} = 1$

3. $\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \lim_{x \to 0} \frac{2\sin^2(x/2)}{x^2} = \lim_{x \to 0} \frac{2(x/2)^2}{x^2} = \frac{1}{2}$

4. $\lim_{x \to \infty} \left(1 + \frac{2}{x}\right)^{3x} = \lim_{x \to \infty} \left[\left(1 + \frac{2}{x}\right)^{x/2}\right]^6 = e^6$

5. $\lim_{x \to 0} (1 + 3x)^{1/x} = \lim_{x \to 0} \left[(1 + 3x)^{1/(3x)}\right]^3 = e^3$

6. $\lim_{x \to \infty} \left(\frac{x+1}{x-1}\right)^x = \lim_{x \to \infty} \left(1 + \frac{2}{x-1}\right)^x = \lim_{x \to \infty} \left(1 + \frac{2}{x-1}\right)^{x-1} \cdot \left(1 + \frac{2}{x-1}\right) = e^2 \cdot 1 = e^2$

### 等价无穷小替换练习
1. $\lim_{x \to 0} \frac{\sin x}{\arctan x} = \lim_{x \to 0} \frac{x}{x} = 1$

2. $\lim_{x \to 0} \frac{e^x - 1}{\ln(1+x)} = \lim_{x \to 0} \frac{x}{x} = 1$

3. $\lim_{x \to 0} \frac{(1+x)^3 - 1}{x} = \lim_{x \to 0} \frac{3x}{x} = 3$

4. $\lim_{x \to 0} \frac{\tan x - \sin x}{x^3} = \lim_{x \to 0} \frac{\sin x \left(\frac{1}{\cos x} - 1\right)}{x^3} = \lim_{x \to 0} \frac{\sin x \cdot \frac{1-\cos x}{\cos x}}{x^3} = \lim_{x \to 0} \frac{x \cdot \frac{x^2}{2}}{x^3} = \frac{1}{2}$

## 证明题

1. **证明：$\lim_{x \to 0} \frac{\sin x}{x} = 1$**
   证明：利用单位圆和夹逼定理。设圆心角为$x$（弧度），$0 < x < \frac{\pi}{2}$。
   在单位圆中，三角形$OAB$的面积为$\frac{1}{2}\sin x$，扇形$OAB$的面积为$\frac{1}{2}x$，三角形$OAC$的面积为$\frac{1}{2}\tan x$。
   因此，$\sin x < x < \tan x$，即$1 < \frac{x}{\sin x} < \frac{1}{\cos x}$。
   两边取倒数得：$\cos x < \frac{\sin x}{x} < 1$。
   当$x \to 0$时，$\cos x \to 1$，由夹逼定理可得$\lim_{x \to 0} \frac{\sin x}{x} = 1$。

2. **证明：$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$**
   证明：利用半角公式和重要极限。
   $\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \lim_{x \to 0} \frac{2\sin^2(x/2)}{x^2} = \lim_{x \to 0} \frac{2(x/2)^2}{x^2} = \frac{1}{2}$

3. **用夹逼定理证明：$\lim_{x \to +\infty} \frac{\sin x}{x} = 0$**
   证明：由于$-1 \leq \sin x \leq 1$，所以$-\frac{1}{x} \leq \frac{\sin x}{x} \leq \frac{1}{x}$。
   当$x \to +\infty$时，$-\frac{1}{x} \to 0$且$\frac{1}{x} \to 0$。
   由夹逼定理可得$\lim_{x \to +\infty} \frac{\sin x}{x} = 0$。

4. **证明：若 $\lim f(x) = A$，且 $A > 0$，则存在 $\delta > 0$，使得当 $0 < |x - x_0| < \delta$ 时，$f(x) > 0$**
   证明：取$\varepsilon = \frac{A}{2} > 0$，由极限定义，存在$\delta > 0$，使得当$0 < |x - x_0| < \delta$时，$|f(x) - A| < \frac{A}{2}$。
   因此$f(x) > A - \frac{A}{2} = \frac{A}{2} > 0$。

## 综合应用题

1. **解**：需使$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x)$
   - $\lim_{x \to 1^-} f(x) = 1^2 + 1 = 2$
   - $\lim_{x \to 1^+} f(x) = a \cdot 1 + b = a + b$
   所以$a + b = 2$，有无穷多组解，例如$a = 1, b = 1$。

2. $\lim_{x \to 0} \frac{\sqrt{1+x} - \sqrt{1-x}}{x} = \lim_{x \to 0} \frac{2x}{x(\sqrt{1+x} + \sqrt{1-x})} = \lim_{x \to 0} \frac{2}{\sqrt{1+x} + \sqrt{1-x}} = 1$

3. $\lim_{x \to 0} \frac{\sin x - \tan x}{x^3} = \lim_{x \to 0} \frac{\sin x(1 - \frac{1}{\cos x})}{x^3} = \lim_{x \to 0} \frac{\sin x \cdot \frac{\cos x - 1}{\cos x}}{x^3} = \lim_{x \to 0} \frac{x \cdot (-\frac{x^2}{2})}{x^3 \cdot \cos x} = -\frac{1}{2}$

4. $\lim_{x \to \infty} (\sqrt{x^2 + x} - x) = \lim_{x \to \infty} \frac{x}{\sqrt{x^2 + x} + x} = \lim_{x \to \infty} \frac{1}{\sqrt{1 + \frac{1}{x}} + 1} = \frac{1}{2}$

5. $\lim_{n \to \infty} \left(\frac{1}{n^2} + \frac{2}{n^2} + \cdots + \frac{n}{n^2}\right) = \lim_{n \to \infty} \frac{1 + 2 + \cdots + n}{n^2} = \lim_{n \to \infty} \frac{n(n+1)/2}{n^2} = \frac{1}{2}$

6. **解**：$\lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = 1$，$\lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = -1$。左右极限不相等，故极限不存在。

7. **解**：由于$-1 \leq \sin \frac{1}{x} \leq 1$，所以$-x \leq x \sin \frac{1}{x} \leq x$。当$x \to 0$时，$-x \to 0$且$x \to 0$，由夹逼定理可得$\lim_{x \to 0} x \sin \frac{1}{x} = 0$。

8. **解**：$\lim_{x \to 2} \frac{x^2 + ax + b}{x^2 - 4} = \lim_{x \to 2} \frac{x^2 + ax + b}{(x-2)(x+2)} = 3$
   由于分母在$x \to 2$时趋于0，极限存在，故分子也必须趋于0，即$4 + 2a + b = 0$，所以$b = -4 - 2a$。
   利用洛必达法则或因式分解，$\lim_{x \to 2} \frac{x^2 + ax + b}{x^2 - 4} = \lim_{x \to 2} \frac{x^2 + ax - 4 - 2a}{(x-2)(x+2)}$。
   将分子因式分解或使用洛必达法则，可得$2 + a/2 = 3$，故$a = 2$，$b = -8$。

## 提高题

1. $\lim_{x \to 0} \frac{\sin x}{x} = 1 - \frac{x^2}{6} + \frac{x^4}{120} - \cdots$

2. **证明：$\lim_{x \to 0^+} x^x = 1$**
   证明：$\lim_{x \to 0^+} x^x = \lim_{x \to 0^+} e^{x \ln x} = e^{\lim_{x \to 0^+} x \ln x}$。
   由于$\lim_{x \to 0^+} x \ln x = \lim_{x \to 0^+} \frac{\ln x}{1/x} = \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0$，
   故$\lim_{x \to 0^+} x^x = e^0 = 1$。

3. $\lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/x^2} = \lim_{x \to 0} e^{\frac{1}{x^2} \ln(\frac{\sin x}{x})}$
   $= e^{\lim_{x \to 0} \frac{\ln(\sin x/x)}{x^2}} = e^{\lim_{x \to 0} \frac{\ln(1 - x^2/6 + \cdots)}{x^2}} = e^{\lim_{x \to 0} \frac{-x^2/6}{x^2}} = e^{-1/6}$

4. **解**：$\lim_{x \to 0} \frac{\ln(1+x) - ax}{x^2} = b$
   利用泰勒展开：$\ln(1+x) = x - \frac{x^2}{2} + o(x^2)$，所以$\ln(1+x) - ax = (1-a)x - \frac{x^2}{2} + o(x^2)$。
   当$x \to 0$时，若极限存在且有限，则$1 - a = 0$，即$a = 1$。
   此时$\lim_{x \to 0} \frac{\ln(1+x) - x}{x^2} = \lim_{x \to 0} \frac{-\frac{x^2}{2} + o(x^2)}{x^2} = -\frac{1}{2}$，故$b = -\frac{1}{2}$。

5. $\lim_{x \to 0} \frac{\cos x - 1}{\ln(1+x)} = \lim_{x \to 0} \frac{-\frac{x^2}{2} + o(x^2)}{x + o(x)} = \lim_{x \to 0} \frac{-\frac{x^2}{2}}{x} = 0$