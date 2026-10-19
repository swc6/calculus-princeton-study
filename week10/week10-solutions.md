# 第10周：练习答案

## 曲线间面积

### 选择题
1. **答案：B**
   解析：交点：$x^2 = 2x$，得 $x = 0$ 或 $x = 2$，在 $[0, 2]$ 上 $2x \geq x^2$，$A = \int_0^2 (2x - x^2) dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$

2. **答案：C**
   解析：在 $[0, 1]$ 上 $e^x \geq x$，$A = \int_0^1 (e^x - x) dx = \left[e^x - \frac{x^2}{2}\right]_0^1 = (e - \frac{1}{2}) - 1 = e - \frac{3}{2}$

3. **答案：C**
   解析：$y = \sin x$ 在 $[0, \pi]$ 上位于 $x$ 轴上方，在 $[\pi, 2\pi]$ 上位于下方，各部分面积之和 $= \int_0^\pi \sin x dx + \left|\int_\pi^{2\pi} \sin x dx\right| = 2 + 2 = 4$（注意不能用 $\int_0^{2\pi} \sin x dx = 0$，那是代数和）

### 填空题
1. **答案：$\frac{32}{3}$**
   解析：令 $4 - x^2 = 0$ 得 $x = \pm 2$，$A = \int_{-2}^2 (4 - x^2) dx = \left[4x - \frac{x^3}{3}\right]_{-2}^2 = (8 - \frac{8}{3}) - (-8 + \frac{8}{3}) = \frac{32}{3}$

2. **答案：$\frac{64}{3}$**
   解析：交点：$x^2 = 8 - x^2$，得 $x = \pm 2$，在 $[-2, 2]$ 上 $8 - x^2 \geq x^2$，$A = \int_{-2}^2 (8 - 2x^2) dx = \left[8x - \frac{2x^3}{3}\right]_{-2}^2 = 32 - \frac{32}{3} = \frac{64}{3}$

3. **答案：$\frac{9}{2}$**
   解析：交点：$y^2 = y + 2$，即 $(y - 2)(y + 1) = 0$，得 $y = 2$ 或 $y = -1$，在 $[-1, 2]$ 上 $y + 2 \geq y^2$，对 $y$ 积分：$A = \int_{-1}^2 (y + 2 - y^2) dy = \left[\frac{y^2}{2} + 2y - \frac{y^3}{3}\right]_{-1}^2 = \frac{10}{3} + \frac{7}{6} = \frac{9}{2}$

### 解答题
1. **解**：交点：$9 - x^2 = x + 3$，即 $x^2 + x - 6 = 0$，$(x + 3)(x - 2) = 0$，得 $x = -3$ 或 $x = 2$。在 $[-3, 2]$ 上 $9 - x^2 \geq x + 3$，所以
   $$A = \int_{-3}^2 (6 - x - x^2) dx = \left[6x - \frac{x^2}{2} - \frac{x^3}{3}\right]_{-3}^2 = \left(12 - 2 - \frac{8}{3}\right) - \left(-18 - \frac{9}{2} + 9\right) = \frac{22}{3} + \frac{27}{2} = \frac{125}{6}$$

2. **解**：交点：$\sin x = \cos x$，得 $x = \frac{\pi}{4}$。在 $[0, \frac{\pi}{4}]$ 上 $\cos x \geq \sin x$，在 $[\frac{\pi}{4}, \frac{\pi}{2}]$ 上 $\sin x \geq \cos x$，所以
   $$A = \int_0^{\pi/4} (\cos x - \sin x) dx + \int_{\pi/4}^{\pi/2} (\sin x - \cos x) dx = (\sqrt{2} - 1) + (\sqrt{2} - 1) = 2\sqrt{2} - 2$$

3. **解**：交点：$x^3 = x$，即 $x(x - 1)(x + 1) = 0$，得 $x = -1, 0, 1$。在 $[-1, 0]$ 上 $x^3 \geq x$，在 $[0, 1]$ 上 $x \geq x^3$，所以
   $$A = \int_{-1}^0 (x^3 - x) dx + \int_0^1 (x - x^3) dx = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$$

4. **解**：$y = \ln x$ 与 $y = 1$ 的交点为 $x = e$；$y = \ln x$ 与 $x = 1$ 的交点为 $(1, 0)$。在 $[1, e]$ 上 $1 \geq \ln x$，所以
   $$A = \int_1^e (1 - \ln x) dx = \left[2x - x\ln x\right]_1^e = (2e - e) - 2 = e - 2$$
   （其中 $\int \ln x\, dx = x\ln x - x$）

5. **解**：交点：$\frac{1}{x} = x$（$x > 0$），得 $x = 1$。在 $[1, 2]$ 上 $x \geq \frac{1}{x}$，所以
   $$A = \int_1^2 \left(x - \frac{1}{x}\right) dx = \left[\frac{x^2}{2} - \ln x\right]_1^2 = \frac{3}{2} - \ln 2$$

6. **解**：交点：$|x| = x^2 - 2$。当 $x \geq 0$ 时 $x = x^2 - 2$，得 $x = 2$；由对称性 $x = -2$ 也是交点。在 $[-2, 2]$ 上 $|x| \geq x^2 - 2$，被积函数为偶函数：
   $$A = \int_{-2}^2 (|x| - x^2 + 2) dx = 2\int_0^2 (x - x^2 + 2) dx = 2\left[\frac{x^2}{2} - \frac{x^3}{3} + 2x\right]_0^2 = 2\left(2 - \frac{8}{3} + 4\right) = \frac{20}{3}$$

7. **解**：交点：$x^3 = 2x - x^2$，即 $x(x^2 + x - 2) = x(x + 2)(x - 1) = 0$，得 $x = -2, 0, 1$。在 $[-2, 0]$ 上 $x^3 \geq 2x - x^2$，在 $[0, 1]$ 上 $2x - x^2 \geq x^3$，所以
   $$A = \int_{-2}^0 (x^3 + x^2 - 2x) dx + \int_0^1 (2x - x^2 - x^3) dx = \frac{8}{3} + \frac{5}{12} = \frac{37}{12}$$

8. **解**：交点：$y^2 = 2y^2 - 1$，得 $y^2 = 1$，$y = \pm 1$。在 $[-1, 1]$ 上 $y^2 \geq 2y^2 - 1$，对 $y$ 积分：
   $$A = \int_{-1}^1 (y^2 - 2y^2 + 1) dy = \int_{-1}^1 (1 - y^2) dy = 2\left(1 - \frac{1}{3}\right) = \frac{4}{3}$$

## 旋转体的体积

### 选择题
1. **答案：A**
   解析：圆盘法：$V = \pi \int_0^4 (\sqrt{x})^2 dx = \pi \int_0^4 x dx = \pi \left[\frac{x^2}{2}\right]_0^4 = 8\pi$

2. **答案：B**
   解析：垫圈法：交点为 $0$ 与 $1$，在 $[0, 1]$ 上 $x \geq x^2$，$V = \pi \int_0^1 (x^2 - x^4) dx = \pi\left(\frac{1}{3} - \frac{1}{5}\right) = \frac{2\pi}{15}$

3. **答案：A**
   解析：柱壳法：$V = 2\pi \int_0^1 x(x - x^2) dx = 2\pi \int_0^1 (x^2 - x^3) dx = 2\pi\left(\frac{1}{3} - \frac{1}{4}\right) = \frac{\pi}{6}$

### 填空题
1. **答案：$\frac{128\pi}{7}$**
   解析：$V = \pi \int_0^2 (x^3)^2 dx = \pi \int_0^2 x^6 dx = \pi \left[\frac{x^7}{7}\right]_0^2 = \frac{128\pi}{7}$

2. **答案：$8\pi$**
   解析：柱壳法：$V = 2\pi \int_0^2 x \cdot x^2 dx = 2\pi \left[\frac{x^4}{4}\right]_0^2 = 8\pi$

3. **答案：$\frac{\pi^2}{2}$**
   解析：$V = \pi \int_0^\pi \sin^2 x\, dx = \pi \int_0^\pi \frac{1 - \cos 2x}{2} dx = \pi \left[\frac{x}{2} - \frac{\sin 2x}{4}\right]_0^\pi = \frac{\pi^2}{2}$

### 解答题
1. **解**：圆盘法：$V = \pi \int_0^2 (x^2)^2 dx = \pi \int_0^2 x^4 dx = \pi \left[\frac{x^5}{5}\right]_0^2 = \frac{32\pi}{5}$

2. **解**：圆盘法：$V = \pi \int_0^1 e^{2x} dx = \pi \left[\frac{e^{2x}}{2}\right]_0^1 = \frac{\pi(e^2 - 1)}{2}$

3. **解**：令 $4 - x^2 = 0$ 得 $x = \pm 2$。$V = \pi \int_{-2}^2 (4 - x^2)^2 dx = \pi \int_{-2}^2 (16 - 8x^2 + x^4) dx = 2\pi \int_0^2 (16 - 8x^2 + x^4) dx = 2\pi \left[16x - \frac{8x^3}{3} + \frac{x^5}{5}\right]_0^2 = 2\pi\left(32 - \frac{64}{3} + \frac{32}{5}\right) = 2\pi \cdot \frac{256}{15} = \frac{512\pi}{15}$

4. **解**：令 $x^2 - 2 = 0$ 得 $x = \pm\sqrt{2}$。$V = \pi \int_{-\sqrt{2}}^{\sqrt{2}} (x^2 - 2)^2 dx = 2\pi \int_0^{\sqrt{2}} (x^4 - 4x^2 + 4) dx = 2\pi \left[\frac{x^5}{5} - \frac{4x^3}{3} + 4x\right]_0^{\sqrt{2}} = 2\pi\left(\frac{4\sqrt{2}}{5} - \frac{8\sqrt{2}}{3} + 4\sqrt{2}\right) = 2\pi\sqrt{2}\left(\frac{4}{5} - \frac{8}{3} + 4\right) = 2\pi\sqrt{2} \cdot \frac{32}{15} = \frac{64\sqrt{2}\pi}{15}$

5. **解**：$y = 2x - x^2 = 0$ 得 $x = 0, 2$。绕 $y$ 轴用柱壳法：
   $$V = 2\pi \int_0^2 x(2x - x^2) dx = 2\pi \int_0^2 (2x^2 - x^3) dx = 2\pi \left[\frac{2x^3}{3} - \frac{x^4}{4}\right]_0^2 = 2\pi\left(\frac{16}{3} - 4\right) = \frac{8\pi}{3}$$

6. **解**：交点（$x \geq 0$）：$x^3 = x$ 得 $x = 0, 1$，在 $[0, 1]$ 上 $x \geq x^3$。垫圈法：
   $$V = \pi \int_0^1 (x^2 - x^6) dx = \pi\left(\frac{1}{3} - \frac{1}{7}\right) = \frac{4\pi}{21}$$

7. **解**：柱壳法：$V = 2\pi \int_0^1 x \cdot x^3 dx = 2\pi \int_0^1 x^4 dx = \frac{2\pi}{5}$。
   垫圈法验证：把曲线写成 $x = y^{1/3}$（$y \in [0, 1]$），在高度 $y$ 处区域的水平截面为 $y^{1/3} \leq x \leq 1$，故
   $$V = \pi \int_0^1 \left[1^2 - (y^{1/3})^2\right] dy = \pi \int_0^1 (1 - y^{2/3}) dy = \pi\left(1 - \frac{3}{5}\right) = \frac{2\pi}{5}$$
   两种方法结果一致。

8. **解**：区域为 $y^2 \leq x \leq 4$，$-2 \leq y \leq 2$。绕 $y$ 轴用垫圈法（对 $y$ 积分）：
   $$V = \pi \int_{-2}^2 (4^2 - (y^2)^2) dy = \pi \int_{-2}^2 (16 - y^4) dy = \pi\left(64 - \frac{64}{5}\right) = \frac{256\pi}{5}$$

## 弧长与旋转曲面面积

### 选择题
1. **答案：C**
   解析：$y' = \sqrt{x}$，$L = \int_0^3 \sqrt{1 + x}\, dx = \left[\frac{2}{3}(1 + x)^{3/2}\right]_0^3 = \frac{2}{3}(8 - 1) = \frac{14}{3}$

2. **答案：B**
   解析：$y' = x$，$L = \int_0^1 \sqrt{1 + x^2}\, dx = \left[\frac{x}{2}\sqrt{1 + x^2} + \frac{1}{2}\ln(x + \sqrt{1 + x^2})\right]_0^1 = \frac{\sqrt{2}}{2} + \frac{1}{2}\ln(1 + \sqrt{2})$

3. **答案：D**
   解析：$y' = 3x^2 - \frac{1}{12x^2}$，$1 + (y')^2 = 9x^4 + \frac{1}{2} + \frac{1}{144x^4} = \left(3x^2 + \frac{1}{12x^2}\right)^2$，所以
   $L = \int_1^2 \left(3x^2 + \frac{1}{12x^2}\right) dx = \left[x^3 - \frac{1}{12x}\right]_1^2 = \left(8 - \frac{1}{24}\right) - \left(1 - \frac{1}{12}\right) = \frac{169}{24}$

### 填空题
1. **答案：$\frac{8}{27}(10\sqrt{10} - 1)$**
   解析：$y' = \frac{3}{2}\sqrt{x}$，$1 + (y')^2 = 1 + \frac{9x}{4}$。令 $u = 1 + \frac{9x}{4}$，$dx = \frac{4}{9}du$，
   $L = \int_0^4 \sqrt{1 + \frac{9x}{4}}\, dx = \frac{4}{9} \int_1^{10} \sqrt{u}\, du = \frac{4}{9} \cdot \frac{2}{3}\left[u^{3/2}\right]_1^{10} = \frac{8}{27}(10\sqrt{10} - 1)$

2. **答案：$12$**
   解析：$y' = x\sqrt{x^2 + 2}$，$1 + (y')^2 = 1 + x^2(x^2 + 2) = x^4 + 2x^2 + 1 = (x^2 + 1)^2$，故
   $L = \int_0^3 (x^2 + 1) dx = \left[\frac{x^3}{3} + x\right]_0^3 = 9 + 3 = 12$

3. **答案：$4\sqrt{2}\pi$**
   解析：$S = 2\pi \int_0^2 x\sqrt{1 + 1^2}\, dx = 2\pi\sqrt{2}\left[\frac{x^2}{2}\right]_0^2 = 4\sqrt{2}\pi$

### 解答题
1. **解**：$y' = \tan x$，$\sqrt{1 + \tan^2 x} = \sec x$（在 $[0, \frac{\pi}{4}]$ 上为正），所以
   $$L = \int_0^{\pi/4} \sec x\, dx = \left[\ln|\sec x + \tan x|\right]_0^{\pi/4} = \ln(\sqrt{2} + 1) - \ln 1 = \ln(1 + \sqrt{2})$$

2. **解**：$y' = \frac{x}{2} - \frac{1}{2x}$，$1 + (y')^2 = \frac{x^2}{4} + \frac{1}{2} + \frac{1}{4x^2} = \left(\frac{x}{2} + \frac{1}{2x}\right)^2$，在 $[1, e]$ 上开方取正：
   $$L = \int_1^e \left(\frac{x}{2} + \frac{1}{2x}\right) dx = \frac{1}{2}\left[\frac{x^2}{2} + \ln x\right]_1^e = \frac{1}{2}\left(\frac{e^2}{2} + 1 - \frac{1}{2}\right) = \frac{e^2 + 1}{4}$$

3. **解**：绕 $y$ 轴，$S = 2\pi \int_0^1 x\sqrt{1 + (2x)^2}\, dx = 2\pi \int_0^1 x\sqrt{1 + 4x^2}\, dx$。
   令 $u = 1 + 4x^2$，$du = 8x\, dx$，则 $\int_0^1 x\sqrt{1 + 4x^2}\, dx = \frac{1}{8}\int_1^5 \sqrt{u}\, du = \frac{1}{12}\left[u^{3/2}\right]_1^5 = \frac{5\sqrt{5} - 1}{12}$。
   所以 $S = \frac{\pi}{6}(5\sqrt{5} - 1)$

4. **解**：$y' = x^2$，$S = 2\pi \int_0^1 \frac{x^3}{3}\sqrt{1 + x^4}\, dx$。
   令 $u = 1 + x^4$，$du = 4x^3 dx$，则 $\int_0^1 x^3\sqrt{1 + x^4}\, dx = \frac{1}{4}\int_1^2 \sqrt{u}\, du = \frac{1}{6}(2\sqrt{2} - 1)$。
   所以 $S = \frac{2\pi}{3} \cdot \frac{2\sqrt{2} - 1}{6} = \frac{\pi}{9}(2\sqrt{2} - 1)$

5. **解**：$y' = 1$，$S = 2\pi \int_0^2 (x + 1)\sqrt{2}\, dx = 2\pi\sqrt{2}\left[\frac{x^2}{2} + x\right]_0^2 = 2\pi\sqrt{2} \cdot 4 = 8\sqrt{2}\pi$。
   验证：旋转体是圆台，两端半径 $r_1 = 1$、$r_2 = 3$，母线长 $l = 2\sqrt{2}$，圆台侧面积 $= \pi(r_1 + r_2)l = \pi \cdot 4 \cdot 2\sqrt{2} = 8\sqrt{2}\pi$，两者一致。

6. **解**：$y' = 2x\sqrt{x^2 - 1}$，$1 + (y')^2 = 1 + 4x^2(x^2 - 1) = 4x^4 - 4x^2 + 1 = (2x^2 - 1)^2$，在 $[1, 2]$ 上 $2x^2 - 1 > 0$：
   $$L = \int_1^2 (2x^2 - 1) dx = \left[\frac{2x^3}{3} - x\right]_1^2 = \left(\frac{16}{3} - 2\right) - \left(\frac{2}{3} - 1\right) = \frac{11}{3}$$

## 综合应用题

1. **解**：交点：$x^2 = 2x$ 得 $x = 0, 2$，在 $[0, 2]$ 上 $2x \geq x^2$。垫圈法：
   $$V = \pi \int_0^2 \left[(2x)^2 - (x^2)^2\right] dx = \pi \int_0^2 (4x^2 - x^4) dx = \pi \left[\frac{4x^3}{3} - \frac{x^5}{5}\right]_0^2 = \pi\left(\frac{32}{3} - \frac{32}{5}\right) = \frac{64\pi}{15}$$

2. **解**：绕 $y$ 轴用柱壳法：
   $$V = 2\pi \int_0^2 x(2x - x^2) dx = 2\pi \int_0^2 (2x^2 - x^3) dx = 2\pi \left[\frac{2x^3}{3} - \frac{x^4}{4}\right]_0^2 = 2\pi\left(\frac{16}{3} - 4\right) = \frac{8\pi}{3}$$

3. **解**：将圆锥看成直线 $y = \frac{r}{h}x$（$0 \leq x \leq h$）绕 $x$ 轴旋转所得：
   $$V = \pi \int_0^h \left(\frac{r}{h}x\right)^2 dx = \frac{\pi r^2}{h^2} \int_0^h x^2 dx = \frac{\pi r^2}{h^2} \cdot \frac{h^3}{3} = \frac{1}{3}\pi r^2 h$$

4. **解**：将球看成上半圆 $y = \sqrt{r^2 - x^2}$（$-r \leq x \leq r$）绕 $x$ 轴旋转所得：
   $$V = \pi \int_{-r}^r (r^2 - x^2) dx = \pi \left[r^2 x - \frac{x^3}{3}\right]_{-r}^r = \pi\left(r^3 - \frac{r^3}{3} + r^3 - \frac{r^3}{3}\right) = \frac{4}{3}\pi r^3$$

5. **解**：在 $x$ 处（$-2 \leq x \leq 2$），截面正方形的边长为圆的竖直弦长 $2\sqrt{4 - x^2}$，截面面积 $A(x) = 4(4 - x^2)$：
   $$V = \int_{-2}^2 4(4 - x^2) dx = 4 \cdot \frac{32}{3} = \frac{128}{3}$$

6. **解**：绕 $y$ 轴用柱壳法（利用 $\int_0^\pi x\sin x\, dx = \pi$，由分部积分可求得）：
   $$V = 2\pi \int_0^\pi x \sin x\, dx = 2\pi \cdot \pi = 2\pi^2$$

7. **解**：面积：交点为 $x = 0$ 与 $x = 1$，在 $[0, 1]$ 上 $x^2 \geq x^3$，
   $$A = \int_0^1 (x^2 - x^3) dx = \frac{1}{3} - \frac{1}{4} = \frac{1}{12}$$
   体积：绕 $x$ 轴用垫圈法，
   $$V = \pi \int_0^1 \left[(x^2)^2 - (x^3)^2\right] dx = \pi \int_0^1 (x^4 - x^6) dx = \pi\left(\frac{1}{5} - \frac{1}{7}\right) = \frac{2\pi}{35}$$

8. **解**：$y' = \frac{e^x - e^{-x}}{2}$，则 $1 + (y')^2 = 1 + \frac{e^{2x} - 2 + e^{-2x}}{4} = \frac{e^{2x} + 2 + e^{-2x}}{4} = \left(\frac{e^x + e^{-x}}{2}\right)^2 = y^2$。
   在 $[0, 1]$ 上 $y > 0$，所以
   $$L = \int_0^1 y\, dx = \int_0^1 \frac{e^x + e^{-x}}{2} dx = \left[\frac{e^x - e^{-x}}{2}\right]_0^1 = \frac{e - e^{-1}}{2}$$
