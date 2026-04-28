# 第6周：练习答案

## 微分中值定理

### 选择题
1. **答案：B**
   解析：
   - A. $f(x) = |x - 1|$在$x = 1$处不可导，不满足条件
   - B. $f(x) = x^2 - 2x$在$[0, 2]$上连续，在$(0, 2)$内可导，且$f(0) = f(2) = 0$，满足罗尔定理条件
   - C. $f(x) = \frac{1}{x}$在$x = 0$处不连续，不满足条件
   - D. $f(x) = \sqrt{x - 1}$在$x = 0$处无定义，不满足条件

2. **答案：A**
   解析：这是罗尔定理的结论。

3. **答案：A**
   解析：由拉格朗日中值定理的推论，若$f'(x) = 0$，则$f(x)$为常数。

### 填空题
1. **答案：$\pm \frac{\sqrt{3}}{3}$**
   解析：$f'(x) = 3x^2 - 3 = 0$，解得$x = \pm 1$。但$\xi$必须在$(-1, 1)$内，且满足罗尔定理条件，所以$\xi = \pm \frac{\sqrt{3}}{3}$。

2. **答案：$e - 1$**
   解析：$f'(x) = \frac{1}{x}$，由拉格朗日中值定理，$\frac{\ln e - \ln 1}{e - 1} = \frac{1}{\xi}$，即$\frac{1}{e - 1} = \frac{1}{\xi}$，所以$\xi = e - 1$。

3. **答案：1**
   解析：$f'(x) = 2x$，由拉格朗日中值定理，$\frac{f(2) - f(0)}{2 - 0} = f'(\xi)$，即$\frac{4 - 0}{2} = 2\xi$，解得$\xi = 1$。

### 解答题
1. **解**：$f(0) = 0$，$f(2) = 8 - 12 + 4 = 0$，$f'(x) = 3x^2 - 6x + 2$。由罗尔定理，存在$\xi \in (0, 2)$，使$f'(\xi) = 0$，即$3\xi^2 - 6\xi + 2 = 0$，解得$\xi = \frac{6 \pm \sqrt{36 - 24}}{6} = 1 \pm \frac{\sqrt{3}}{3}$，均在$(0, 2)$内。

2. **解**：$f(0) = 0$，$f(\pi) = 0$，$f'(x) = \cos x$。由罗尔定理，存在$\xi \in (0, \pi)$，使$f'(\xi) = 0$，即$\cos \xi = 0$，所以$\xi = \frac{\pi}{2}$。

3. **证明**：设$f(t) = \ln(1 + t)$，在$[0, x]$上应用拉格朗日中值定理，存在$\xi \in (0, x)$，使$\frac{\ln(1 + x) - \ln 1}{x - 0} = \frac{1}{1 + \xi}$，即$\ln(1 + x) = \frac{x}{1 + \xi}$。由于$0 < \xi < x$，所以$\frac{1}{1 + x} < \frac{1}{1 + \xi} < 1$，因此$\frac{x}{1 + x} < \ln(1 + x) < x$。

4. **证明**：设$f(t) = \ln t$，在$[b, a]$上应用拉格朗日中值定理，存在$\xi \in (b, a)$，使$\frac{\ln a - \ln b}{a - b} = \frac{1}{\xi}$，即$\ln \frac{a}{b} = \frac{a - b}{\xi}$。由于$b < \xi < a$，所以$\frac{1}{a} < \frac{1}{\xi} < \frac{1}{b}$，因此$\frac{a - b}{a} < \ln \frac{a}{b} < \frac{a - b}{b}$。

5. **证明**：设$F(x) = f(x) + x - 1$，则$F(0) = f(0) + 0 - 1 = -1$，$F(1) = f(1) + 1 - 1 = 1$。由介值定理，存在$\xi \in (0, 1)$，使$F(\xi) = 0$，即$f(\xi) + \xi - 1 = 0$，所以$f(\xi) = 1 - \xi$。

## 洛必达法则

### 选择题
1. **答案：C**
   解析：$\lim_{x \to 0} \frac{x^2 \sin \frac{1}{x}}{\sin x} = \lim_{x \to 0} \frac{x \sin \frac{1}{x}}{\frac{\sin x}{x}} = \frac{0}{1} = 0$，但使用洛必达法则后$\lim_{x \to 0} \frac{2x \sin \frac{1}{x} - \cos \frac{1}{x}}{\cos x}$不存在，所以不能直接使用洛必达法则。

2. **答案：B**
   解析：$\lim_{x \to 0} \frac{\ln(1 + x)}{x} = \lim_{x \to 0} \frac{1/(1 + x)}{1} = 1$

3. **答案：A**
   解析：应用$n$次洛必达法则，$\lim_{x \to \infty} \frac{x^n}{e^x} = \lim_{x \to \infty} \frac{n!}{e^x} = 0$

### 填空题
1. **答案：3**
   解析：$\lim_{x \to 0} \frac{\sin 3x}{x} = \lim_{x \to 0} \frac{3\cos 3x}{1} = 3$

2. **答案：0**
   解析：$\lim_{x \to \infty} \frac{\ln x}{x} = \lim_{x \to \infty} \frac{1/x}{1} = 0$

3. **答案：2**
   解析：$\lim_{x \to 0} \frac{e^x - e^{-x}}{\sin x} = \lim_{x \to 0} \frac{e^x + e^{-x}}{\cos x} = \frac{1 + 1}{1} = 2$

### 解答题
1. **解**：$\lim_{x \to 0} \frac{\sin x - x}{x^3} = \lim_{x \to 0} \frac{\cos x - 1}{3x^2} = \lim_{x \to 0} \frac{-\sin x}{6x} = \lim_{x \to 0} \frac{-\cos x}{6} = -\frac{1}{6}$

2. **解**：$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{e^x - 1}{2x} = \lim_{x \to 0} \frac{e^x}{2} = \frac{1}{2}$

3. **解**：$\lim_{x \to \infty} \frac{x^2}{e^x} = \lim_{x \to \infty} \frac{2x}{e^x} = \lim_{x \to \infty} \frac{2}{e^x} = 0$

4. **解**：$\lim_{x \to 0^+} x \ln x = \lim_{x \to 0^+} \frac{\ln x}{1/x} = \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} (-x) = 0$

5. **解**：$\lim_{x \to 0} \left(\frac{1}{x} - \frac{1}{\sin x}\right) = \lim_{x \to 0} \frac{\sin x - x}{x \sin x} = \lim_{x \to 0} \frac{\sin x - x}{x^2} = \lim_{x \to 0} \frac{\cos x - 1}{2x} = \lim_{x \to 0} \frac{-\sin x}{2} = 0$

6. **解**：$\lim_{x \to 1} \frac{x^3 - 3x + 2}{x^3 - x^2 - x + 1} = \lim_{x \to 1} \frac{3x^2 - 3}{3x^2 - 2x - 1} = \lim_{x \to 1} \frac{6x}{6x - 2} = \frac{6}{4} = \frac{3}{2}$

7. **解**：设$y = (\cos x)^{1/x^2}$，则$\ln y = \frac{\ln \cos x}{x^2}$。$\lim_{x \to 0} \ln y = \lim_{x \to 0} \frac{\ln \cos x}{x^2} = \lim_{x \to 0} \frac{-\tan x}{2x} = \lim_{x \to 0} \frac{-\sec^2 x}{2} = -\frac{1}{2}$，所以$\lim_{x \to 0} y = e^{-1/2} = \frac{1}{\sqrt{e}}$。

8. **解**：设$y = x^{\sin x}$，则$\ln y = \sin x \ln x$。$\lim_{x \to 0^+} \ln y = \lim_{x \to 0^+} \sin x \ln x = \lim_{x \to 0^+} \frac{\ln x}{\csc x} = \lim_{x \to 0^+} \frac{1/x}{-\csc x \cot x} = \lim_{x \to 0^+} \frac{\sin x}{-x \cos x} = 0$，所以$\lim_{x \to 0^+} y = e^0 = 1$。

## 泰勒中值定理

### 选择题
1. **答案：A**
   解析：$e^x$的3阶麦克劳林多项式是$1 + x + \frac{x^2}{2!} + \frac{x^3}{3!}$。

2. **答案：B**
   解析：$\sin x$的5阶麦克劳林多项式是$x - \frac{x^3}{3!} + \frac{x^5}{5!} = x - \frac{x^3}{6} + \frac{x^5}{120}$。

3. **答案：A**
   解析：泰勒展开式中$(x - a)^n$的系数是$\frac{f^{(n)}(a)}{n!}$。

### 填空题
1. **答案：$1 - \frac{x^2}{2!} + \frac{x^4}{4!}$**
   解析：$\cos x$的4阶麦克劳林多项式是$1 - \frac{x^2}{2!} + \frac{x^4}{4!}$。

2. **答案：$x - \frac{x^2}{2} + \frac{x^3}{3}$**
   解析：$\ln(1 + x)$的3阶麦克劳林多项式是$x - \frac{x^2}{2} + \frac{x^3}{3}$。

3. **答案：$1 + 2x + 2x^2$**
   解析：$e^{2x}$的2阶麦克劳林多项式是$1 + 2x + \frac{(2x)^2}{2!} = 1 + 2x + 2x^2$。

### 解答题
1. **解**：$f(1) = e$，$f'(1) = e$，$f''(1) = e$，$f'''(1) = e$，所以3阶泰勒多项式为$e + e(x - 1) + \frac{e}{2!}(x - 1)^2 + \frac{e}{3!}(x - 1)^3$。

2. **解**：$f\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}$，$f'\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}$，$f''\left(\frac{\pi}{4}\right) = -\frac{\sqrt{2}}{2}$，$f'''\left(\frac{\pi}{4}\right) = -\frac{\sqrt{2}}{2}$，所以3阶泰勒多项式为$\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}\left(x - \frac{\pi}{4}\right) - \frac{\sqrt{2}}{4}\left(x - \frac{\pi}{4}\right)^2 - \frac{\sqrt{2}}{12}\left(x - \frac{\pi}{4}\right)^3$。

3. **解**：$\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} + o(x^5)$，所以$\sin x - x + \frac{x^3}{6} = \frac{x^5}{120} + o(x^5)$，因此$\lim_{x \to 0} \frac{\sin x - x + \frac{x^3}{6}}{x^5} = \frac{1}{120}$。

4. **解**：$e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)$，所以$e^x - 1 - x - \frac{x^2}{2} = \frac{x^3}{6} + o(x^3)$，因此$\lim_{x \to 0} \frac{e^x - 1 - x - \frac{x^2}{2}}{x^3} = \frac{1}{6}$。

5. **解**：$f(x) = \frac{1}{1 + x} = (1 + x)^{-1}$，其麦克劳林展开为$1 - x + x^2 - x^3 + \cdots + (-1)^n x^n + \cdots$，收敛区间为$(-1, 1)$。

## 综合应用题

1. **证明**：设$f(x) = x^3 - 3x + 1$，则$f(0) = 1$，$f(1) = 1 - 3 + 1 = -1$。由介值定理，存在$\xi \in (0, 1)$，使$f(\xi) = 0$，即方程在$(0, 1)$内至少有一个实根。

2. **证明**：设$F(x) = e^{-x}f(x)$，则$F(a) = F(b) = 0$。由罗尔定理，存在$\xi \in (a, b)$，使$F'(\xi) = 0$，即$e^{-\xi}(f'(\xi) - f(\xi)) = 0$，所以$f'(\xi) = f(\xi)$。

3. **证明**：设$F(x) = f(x) - x^2$，则$F(0) = f(0) - 0 = 0$，$F(1) = f(1) - 1 = 0$。由罗尔定理，存在$\xi \in (0, 1)$，使$F'(\xi) = 0$，即$f'(\xi) - 2\xi = 0$，所以$f'(\xi) = 2\xi$。

4. **解**：$\lim_{x \to 0} \frac{\tan x - \sin x}{x^3} = \lim_{x \to 0} \frac{\sin x(1 - \cos x)}{x^3 \cos x} = \lim_{x \to 0} \frac{x \cdot \frac{x^2}{2}}{x^3} = \frac{1}{2}$

5. **解**：$\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3)$，所以$\ln(1 + x) - x + \frac{x^2}{2} = \frac{x^3}{3} + o(x^3)$，因此$\lim_{x \to 0} \frac{\ln(1 + x) - x + \frac{x^2}{2}}{x^3} = \frac{1}{3}$。

6. **证明**：$e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24}e^\xi$，其中$\xi$介于0和x之间。当$x > 0$时，$\frac{x^4}{24}e^\xi > 0$，所以$e^x > 1 + x + \frac{x^2}{2} + \frac{x^3}{6}$。

7. **解**：由$\lim_{x \to 0} \frac{f(x)}{x} = 1$，得$f(0) = 0$，$f'(0) = 1$。利用泰勒展开，$f(x) = f(0) + f'(0)x + \frac{f''(0)}{2}x^2 + o(x^2) = x + x^2 + o(x^2)$，所以$\lim_{x \to 0} \frac{f(x) - x}{x^2} = \lim_{x \to 0} \frac{x^2 + o(x^2)}{x^2} = 1$。

8. **解**：$\cos x = 1 - \frac{x^2}{2} + o(x^2)$，所以$1 - \cos x = \frac{x^2}{2} + o(x^2)$，因此$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$。

9. **证明**：由拉格朗日中值定理，存在$\xi \in (a, b)$，使$\frac{f(b) - f(a)}{b - a} = f'(\xi)$。再由柯西中值定理，存在$\eta \in (a, b)$，使$\frac{f(b) - f(a)}{e^b - e^a} = \frac{f'(\eta)}{e^\eta}$。将两式联立得$\frac{f'(\xi)}{f'(\eta)} = \frac{e^b - e^a}{b - a} e^{-\eta}$。

10. **解**：$f(x) = (x - 1)^4$，所以在$x = 1$处的泰勒展开式就是它本身：$f(x) = (x - 1)^4$。