# 第三周：练习答案

## 导数的定义

### 选择题
1. **答案：C**
   解析：函数在某点可导的充要条件是左导数和右导数都存在且相等。

2. **答案：B**
   解析：$\lim_{h \to 0} \frac{f(x_0 + h) - f(x_0 - h)}{2h} = \lim_{h \to 0} \frac{[f(x_0 + h) - f(x_0)] - [f(x_0 - h) - f(x_0)]}{2h} = \frac{f'(x_0) + f'(x_0)}{2} = f'(x_0) = 2$

3. **答案：B**
   解析：$y = |x - 1|$在$x = 1$处连续，但左导数为-1，右导数为1，不相等，故不可导。

### 填空题
1. **答案：12**
   解析：$f'(x) = 3x^2$，所以$f'(2) = 3 \cdot 4 = 12$

2. **答案：$y = 2x - 1$**
   解析：$y' = 2x$，在$(1, 1)$处的切线斜率为2，切线方程为$y - 1 = 2(x - 1)$，即$y = 2x - 1$

3. **答案：$\frac{\sqrt{2}}{2}$**
   解析：$f'(x) = \cos x$，所以$f'\left(\frac{\pi}{4}\right) = \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2}$

### 解答题
1. **解**：用导数的定义求$f'(1)$
   $f'(1) = \lim_{\Delta x \to 0} \frac{f(1 + \Delta x) - f(1)}{\Delta x} = \lim_{\Delta x \to 0} \frac{(1 + \Delta x)^2 - 2(1 + \Delta x) + 1 - 0}{\Delta x} = \lim_{\Delta x \to 0} \frac{\Delta x^2}{\Delta x} = \lim_{\Delta x \to 0} \Delta x = 0$

2. **解**：用导数的定义求$f'(x)$
   $f'(x) = \lim_{\Delta x \to 0} \frac{\sqrt{x + \Delta x} - \sqrt{x}}{\Delta x} = \lim_{\Delta x \to 0} \frac{(\sqrt{x + \Delta x} - \sqrt{x})(\sqrt{x + \Delta x} + \sqrt{x})}{\Delta x(\sqrt{x + \Delta x} + \sqrt{x})} = \lim_{\Delta x \to 0} \frac{\Delta x}{\Delta x(\sqrt{x + \Delta x} + \sqrt{x})} = \frac{1}{2\sqrt{x}}$

3. **解**：讨论连续性和可导性
   - 连续性：$\lim_{x \to 0} x^2 \sin \frac{1}{x} = 0 = f(0)$，所以连续。
   - 可导性：$f'(0) = \lim_{\Delta x \to 0} \frac{f(\Delta x) - f(0)}{\Delta x} = \lim_{\Delta x \to 0} \frac{\Delta x^2 \sin \frac{1}{\Delta x}}{\Delta x} = \lim_{\Delta x \to 0} \Delta x \sin \frac{1}{\Delta x} = 0$，所以可导，且$f'(0) = 0$。

## 基本初等函数的导数

### 选择题
1. **答案：D**
   解析：三个选项都是正确的。

2. **答案：B**
   解析：$(e^{2x})' = e^{2x} \cdot 2 = 2e^{2x}$

3. **答案：A**
   解析：$(\tan x)' = \sec^2 x$

### 填空题
1. **答案：$\frac{1}{x \ln 2}$**
   解析：$(\log_2 x)' = \frac{1}{x \ln 2}$

2. **答案：$\frac{1}{\sqrt{1 - x^2}}$**
   解析：$(\arcsin x)' = \frac{1}{\sqrt{1 - x^2}}$

3. **答案：$\sec x \tan x$**
   解析：$(\sec x)' = \sec x \tan x$

### 解答题
1. **解**：$f'(x) = 4x^3 - 6x + 2$

2. **解**：$f'(x) = 2^x \ln 2 + e^x$

3. **解**：$f'(x) = \cos x - \sin x$

## 导数的四则运算法则

### 选择题
1. **答案：B**
   解析：$(x \sin x)' = \sin x + x \cos x$

2. **答案：A**
   解析：$\left(\frac{x}{1 + x^2}\right)' = \frac{1 \cdot (1 + x^2) - x \cdot 2x}{(1 + x^2)^2} = \frac{1 - x^2}{(1 + x^2)^2}$

3. **答案：A**
   解析：$f'(x) = 2x(x^3 - 2x) + (x^2 + 1)(3x^2 - 2) = 2x^4 - 4x^2 + 3x^4 - 2x^2 + 3x^2 - 2 = 5x^4 - 3x^2 - 2$

### 填空题
1. **答案：$1 - \frac{1}{x^2}$**
   解析：$\left(\frac{x^2 + 1}{x}\right)' = \left(x + \frac{1}{x}\right)' = 1 - \frac{1}{x^2}$

2. **答案：$3x^2 \ln x + x^2$**
   解析：$(x^3 \ln x)' = 3x^2 \ln x + x^3 \cdot \frac{1}{x} = 3x^2 \ln x + x^2$

3. **答案：$\frac{x \cos x - \sin x}{x^2}$**
   解析：$\left(\frac{\sin x}{x}\right)' = \frac{\cos x \cdot x - \sin x \cdot 1}{x^2} = \frac{x \cos x - \sin x}{x^2}$

### 解答题
1. **解**：$f'(x) = 2x e^x + x^2 e^x = x e^x (2 + x)$

2. **解**：$f'(x) = \frac{1 \cdot (x + 1) - (x - 1) \cdot 1}{(x + 1)^2} = \frac{2}{(x + 1)^2}$

3. **解**：$f'(x) = \ln x + x \cdot \frac{1}{x} - 1 = \ln x + 1 - 1 = \ln x$

## 复合函数的导数

### 选择题
1. **答案：B**
   解析：$y' = \cos(x^2) \cdot 2x = 2x \cos(x^2)$

2. **答案：B**
   解析：$y' = \frac{1}{\cos x} \cdot (-\sin x) = -\tan x$

3. **答案：B**
   解析：$y' = e^{\sin x} \cdot \cos x$

### 填空题
1. **答案：$\frac{x}{\sqrt{1 + x^2}}$**
   解析：$\frac{d}{dx} \sqrt{1 + x^2} = \frac{1}{2\sqrt{1 + x^2}} \cdot 2x = \frac{x}{\sqrt{1 + x^2}}$

2. **答案：$\frac{1}{x \ln x}$**
   解析：$\frac{d}{dx} \ln(\ln x) = \frac{1}{\ln x} \cdot \frac{1}{x} = \frac{1}{x \ln x}$

3. **答案：$2\sin x \cos x$**
   解析：$\frac{d}{dx} \sin^2 x = 2\sin x \cdot \cos x = \sin 2x$

### 解答题
1. **解**：$y' = 3(1 + 2x)^2 \cdot 2 = 6(1 + 2x)^2$

2. **解**：$y' = \frac{1}{1 + e^x} \cdot e^x = \frac{e^x}{1 + e^x}$

3. **解**：$y' = \cos(\cos x) \cdot (-\sin x) = -\sin x \cos(\cos x)$

4. **解**：$y' = e^{\tan x} \cdot \sec^2 x$

## 高阶导数

### 选择题
1. **答案：A**
   解析：$f'(x) = 4x^3$，$f''(x) = 12x^2$

2. **答案：B**
   解析：$f'(x) = e^x \sin x + e^x \cos x = e^x(\sin x + \cos x)$
   $f''(x) = e^x(\sin x + \cos x) + e^x(\cos x - \sin x) = 2e^x \cos x$

3. **答案：A**
   解析：$f'(x) = \frac{1}{x}$，$f''(x) = -\frac{1}{x^2}$，$f'''(x) = \frac{2}{x^3}$，依此类推，$f^{(n)}(x) = \frac{(-1)^{n-1}(n-1)!}{x^n}$

### 填空题
1. **答案：$4e^{2x}$**
   解析：$f'(x) = 2e^{2x}$，$f''(x) = 4e^{2x}$

2. **答案：$\sin x$**
   解析：$f'(x) = \cos x$，$f''(x) = -\sin x$，$f'''(x) = -\cos x$，$f^{(4)}(x) = \sin x$

3. **答案：$\frac{2}{x^3}$**
   解析：$f'(x) = -\frac{1}{x^2}$，$f''(x) = \frac{2}{x^3}$

### 解答题
1. **解**：$f'(x) = 3x^2 - 4x$，$f''(x) = 6x - 4$

2. **解**：$f'(x) = e^x \cos x - e^x \sin x = e^x(\cos x - \sin x)$
   $f''(x) = e^x(\cos x - \sin x) + e^x(-\sin x - \cos x) = -2e^x \sin x$

3. **解**：$f'(x) = \frac{1}{1 + x}$，$f''(x) = -\frac{1}{(1 + x)^2}$，$f'''(x) = \frac{2!}{(1 + x)^3}$，依此类推，$f^{(n)}(x) = \frac{(-1)^{n-1}(n-1)!}{(1 + x)^n}$

## 隐函数的导数

### 选择题
1. **答案：B**
   解析：对$x^2 + y^2 = 1$两边求导得$2x + 2y y' = 0$，解得$y' = -\frac{x}{y}$

2. **答案：A**
   解析：当$x = 0$时，$e^0 + y^2 = 0$，解得$y = 0$。对$e^{xy} + y^2 = x$两边求导得$e^{xy}(y + x y') + 2y y' = 1$，代入$x = 0, y = 0$得$1 \cdot 0 + 0 = 1$，解得$y' = 1$

### 填空题
1. **答案：$\frac{-y}{x + 2y}$**
   解析：对$xy + y^2 = 1$两边求导得$y + x y' + 2y y' = 0$，解得$y' = \frac{-y}{x + 2y}$

2. **答案：$\frac{-y}{e^y + x}$**
   解析：对$e^y + xy - e = 0$两边求导得$e^y y' + y + x y' = 0$，解得$y' = \frac{-y}{e^y + x}$

### 解答题
1. **解**：对$x^3 + y^3 = 3xy$两边求导得$3x^2 + 3y^2 y' = 3y + 3x y'$，整理得$y'(y^2 - x) = y - x^2$，所以$y' = \frac{y - x^2}{y^2 - x}$

2. **解**：对$y = 1 + xe^y$两边求导得$y' = e^y + x e^y y'$，整理得$y'(1 - x e^y) = e^y$，所以$y' = \frac{e^y}{1 - x e^y}$

3. **解**：对$\sin(xy) + x^2 = y^2$两边求导得$\cos(xy)(y + x y') + 2x = 2y y'$，整理得$y'[2y - x \cos(xy)] = y \cos(xy) + 2x$，所以$y' = \frac{y \cos(xy) + 2x}{2y - x \cos(xy)}$

## 参数方程的导数

### 选择题
1. **答案：A**
   解析：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{3t^2}{2t} = \frac{3t}{2}$

2. **答案：C**
   解析：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{\cos t}{-\sin t} = -\cot t$

### 填空题
1. **答案：$2t$**
   解析：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{2t}{1} = 2t$

2. **答案：$-e^{-2t}$**
   解析：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{-e^{-t}}{e^t} = -e^{-2t}$

### 解答题
1. **解**：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{2t - 3}{2}$

2. **解**：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{1 - \frac{1}{1 + t^2}}{\frac{2t}{1 + t^2}} = \frac{\frac{t^2}{1 + t^2}}{\frac{2t}{1 + t^2}} = \frac{t}{2}$

3. **解**：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{\sin t + t \cos t}{\cos t - t \sin t}$

## 综合应用题

1. **解**：$y' = 3x^2 - 6x$，在点$(1, 0)$处的切线斜率为$3 - 6 = -3$，切线方程为$y = -3(x - 1)$，即$y = -3x + 3$。法线斜率为$\frac{1}{3}$，法线方程为$y = \frac{1}{3}(x - 1)$，即$y = \frac{1}{3}x - \frac{1}{3}$。

2. **解**：速度$v = \frac{ds}{dt} = 3t^2 - 6t + 2$，在$t = 2$时，$v = 12 - 12 + 2 = 2$。加速度$a = \frac{dv}{dt} = 6t - 6$，在$t = 2$时，$a = 12 - 6 = 6$。

3. **解**：边际成本函数$C'(x) = 0.02x$，当$x = 100$时，$C'(100) = 2$。

4. **解**：$f'(x) = 2x e^{-x} - x^2 e^{-x} = x e^{-x}(2 - x)$
   $f''(x) = e^{-x}(2 - x) + x e^{-x}(-1) - x e^{-x}(2 - x) = e^{-x}(2 - 4x + x^2)$

5. **解**：$f'(x) = 3x^2 + 2ax + b$，由题意得$f'(1) = 0$，$f'(3) = 0$，$f(0) = 1$。
   即$3 + 2a + b = 0$，$27 + 6a + b = 0$，$c = 1$。解得$a = -6$，$b = 9$，$c = 1$。

6. **解**：$f'(x) = \frac{2x(x + 1) - x^2}{(x + 1)^2} = \frac{x^2 + 2x}{(x + 1)^2}$，在$x = 1$处，$f(1) = \frac{1}{2}$，$f'(1) = \frac{3}{4}$，切线方程为$y - \frac{1}{2} = \frac{3}{4}(x - 1)$，即$y = \frac{3}{4}x - \frac{1}{4}$。

7. **解**：对$x^2 + y^2 - 2xy = 0$两边求导得$2x + 2y y' - 2y - 2x y' = 0$，整理得$y'(2y - 2x) = 2y - 2x$，所以$y' = 1$（当$y \neq x$时）。

8. **解**：$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{3t^2 + 2}{2t}$，当$t = 1$时，$x = 2$，$y = 3$，$\frac{dy}{dx} = \frac{5}{2}$，切线方程为$y - 3 = \frac{5}{2}(x - 2)$，即$y = \frac{5}{2}x - 2$。

9. **解**：$f(x) = \sin x \cos x = \frac{1}{2} \sin 2x$，$f'(x) = \cos 2x$，$f''(x) = -2 \sin 2x$，$f'''(x) = -4 \cos 2x$，$f^{(4)}(x) = 8 \sin 2x$，依此类推，$f^{(n)}(x) = 2^{n-1} \sin(2x + \frac{n\pi}{2})$

10. **证明**：若函数$f(x)$在$x_0$处可导，则$\lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = f'(x_0)$。因此，$\lim_{x \to x_0} [f(x) - f(x_0)] = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} \cdot (x - x_0) = f'(x_0) \cdot 0 = 0$，即$\lim_{x \to x_0} f(x) = f(x_0)$，所以$f(x)$在$x_0$处连续。