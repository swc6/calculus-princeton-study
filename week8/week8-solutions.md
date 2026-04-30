# 第8周：练习答案

## 第一类换元法（凑微分法）

### 选择题
1. **答案：B**
   解析：令$u = 3x + 1$，则$du = 3dx$，$\int \frac{1}{3x + 1} dx = \frac{1}{3} \int \frac{1}{u} du = \frac{1}{3} \ln|u| + C = \frac{1}{3} \ln|3x + 1| + C$

2. **答案：B**
   解析：令$u = x^2$，则$du = 2x dx$，$\int x e^{x^2} dx = \frac{1}{2} \int e^u du = \frac{1}{2} e^u + C = \frac{1}{2} e^{x^2} + C$

3. **答案：C**
   解析：令$u = 2x$，则$du = 2dx$，$\int \sin 2x dx = \frac{1}{2} \int \sin u du = -\frac{1}{2} \cos u + C = -\frac{1}{2} \cos 2x + C$

### 填空题
1. **答案：$\frac{1}{2} \ln|1 + x^2| + C$**
   解析：令$u = 1 + x^2$，则$du = 2x dx$，$\int \frac{x}{1 + x^2} dx = \frac{1}{2} \int \frac{1}{u} du = \frac{1}{2} \ln|u| + C$

2. **答案：$-e^{-x} + C$**
   解析：令$u = -x$，则$du = -dx$，$\int e^{-x} dx = -\int e^u du = -e^u + C = -e^{-x} + C$

3. **答案：$-2 \cos \sqrt{x} + C$**
   解析：令$u = \sqrt{x}$，则$du = \frac{1}{2\sqrt{x}} dx$，$\int \frac{\sin \sqrt{x}}{\sqrt{x}} dx = 2 \int \sin u du = -2 \cos u + C$

### 解答题
1. **解**：令$u = 2x + 1$，则$du = 2dx$，$\int (2x + 1)^5 dx = \frac{1}{2} \int u^5 du = \frac{1}{2} \cdot \frac{u^6}{6} + C = \frac{(2x + 1)^6}{12} + C$

2. **解**：令$u = \ln x$，则$du = \frac{1}{x} dx$，$\int \frac{1}{x \ln x} dx = \int \frac{1}{u} du = \ln|u| + C = \ln|\ln x| + C$

3. **解**：令$u = \sin x$，则$du = \cos x dx$，$\int \sin^3 x \cos x dx = \int u^3 du = \frac{u^4}{4} + C = \frac{\sin^4 x}{4} + C$

4. **解**：令$u = \sqrt{x}$，则$du = \frac{1}{2\sqrt{x}} dx$，$\int \frac{e^{\sqrt{x}}}{\sqrt{x}} dx = 2 \int e^u du = 2e^u + C = 2e^{\sqrt{x}} + C$

5. **解**：令$u = 1 - x^2$，则$du = -2x dx$，$\int \frac{x}{\sqrt{1 - x^2}} dx = -\frac{1}{2} \int u^{-1/2} du = -\frac{1}{2} \cdot 2u^{1/2} + C = -\sqrt{1 - x^2} + C$

6. **解**：令$u = \arctan x$，则$du = \frac{1}{1 + x^2} dx$，$\int \frac{\arctan x}{1 + x^2} dx = \int u du = \frac{u^2}{2} + C = \frac{(\arctan x)^2}{2} + C$

7. **解**：令$u = \tan x$，则$du = \sec^2 x dx$，$\int \sec^2 x \tan x dx = \int u du = \frac{u^2}{2} + C = \frac{\tan^2 x}{2} + C$

8. **解**：令$u = \frac{1}{x}$，则$du = -\frac{1}{x^2} dx$，$\int \frac{1}{x^2} e^{1/x} dx = -\int e^u du = -e^u + C = -e^{1/x} + C$

## 第二类换元法

### 选择题
1. **答案：B**
   解析：对于$\int \sqrt{a^2 - x^2} dx$，令$x = a \sin t$，则$\sqrt{a^2 - x^2} = a \cos t$。

2. **答案：A**
   解析：对于$\int \frac{1}{\sqrt{x^2 + a^2}} dx$，令$x = a \tan t$，则$\sqrt{x^2 + a^2} = a \sec t$。

3. **答案：C**
   解析：对于$\int \frac{1}{\sqrt{x^2 - a^2}} dx$，令$x = a \sec t$，则$\sqrt{x^2 - a^2} = a \tan t$。

### 填空题
1. **答案：$\frac{x}{\sqrt{1 + x^2}} + C$**
   解析：令$x = \tan t$，则$dx = \sec^2 t dt$，$\int \frac{1}{(1 + x^2)^{3/2}} dx = \int \frac{\sec^2 t}{\sec^3 t} dt = \int \cos t dt = \sin t + C = \frac{x}{\sqrt{1 + x^2}} + C$

2. **答案：$\sqrt{x^2 - 4} - 2 \arccos \frac{2}{x} + C$**
   解析：令$x = 2 \sec t$，则$dx = 2 \sec t \tan t dt$，$\int \frac{\sqrt{x^2 - 4}}{x} dx = \int \frac{2 \tan t}{2 \sec t} \cdot 2 \sec t \tan t dt = 2 \int \tan^2 t dt = 2 \int (\sec^2 t - 1) dt = 2(\tan t - t) + C = \sqrt{x^2 - 4} - 2 \arccos \frac{2}{x} + C$

3. **答案：$\arccos \frac{1}{|x|} + C$**
   解析：令$x = \sec t$，则$dx = \sec t \tan t dt$，$\int \frac{1}{x \sqrt{x^2 - 1}} dx = \int \frac{\sec t \tan t}{\sec t \tan t} dt = \int dt = t + C = \arccos \frac{1}{|x|} + C$

### 解答题
1. **解**：令$x = 2 \sin t$，则$dx = 2 \cos t dt$，$\int \sqrt{4 - x^2} dx = \int 2 \cos t \cdot 2 \cos t dt = 4 \int \cos^2 t dt = 2 \int (1 + \cos 2t) dt = 2(t + \frac{\sin 2t}{2}) + C = 2 \arcsin \frac{x}{2} + x \sqrt{1 - (\frac{x}{2})^2} + C = 2 \arcsin \frac{x}{2} + \frac{x}{2} \sqrt{4 - x^2} + C$

2. **解**：令$x = 2 \tan t$，则$dx = 2 \sec^2 t dt$，$\int \frac{1}{\sqrt{x^2 + 4}} dx = \int \frac{2 \sec^2 t}{2 \sec t} dt = \int \sec t dt = \ln|\sec t + \tan t| + C = \ln\left(x + \sqrt{x^2 + 4}\right) + C$

3. **解**：令$x = 3 \sec t$，则$dx = 3 \sec t \tan t dt$，$\int \frac{1}{\sqrt{x^2 - 9}} dx = \int \frac{3 \sec t \tan t}{3 \tan t} dt = \int \sec t dt = \ln|\sec t + \tan t| + C = \ln\left|x + \sqrt{x^2 - 9}\right| + C$

4. **解**：令$x = \sin t$，则$dx = \cos t dt$，$\int \frac{x^2}{\sqrt{1 - x^2}} dx = \int \frac{\sin^2 t}{\cos t} \cdot \cos t dt = \int \sin^2 t dt = \int \frac{1 - \cos 2t}{2} dt = \frac{t}{2} - \frac{\sin 2t}{4} + C = \frac{1}{2} \arcsin x - \frac{x}{2} \sqrt{1 - x^2} + C$

5. **解**：令$x = \tan t$，则$dx = \sec^2 t dt$，$\int \frac{1}{x^2 \sqrt{1 + x^2}} dx = \int \frac{\sec^2 t}{\tan^2 t \sec t} dt = \int \frac{\sec t}{\tan^2 t} dt = \int \frac{\cos t}{\sin^2 t} dt$，令$u = \sin t$，则$du = \cos t dt$，原式$= \int \frac{1}{u^2} du = -\frac{1}{u} + C = -\frac{\sqrt{1 + x^2}}{x} + C$

6. **解**：令$t = \sqrt{1 + e^{2x}}$，则$t^2 = 1 + e^{2x}$，$2t dt = 2e^{2x} dx$，$dx = \frac{t}{t^2 - 1} dt$，$\int \frac{1}{\sqrt{1 + e^{2x}}} dx = \int \frac{1}{t} \cdot \frac{t}{t^2 - 1} dt = \int \frac{1}{t^2 - 1} dt = \frac{1}{2} \ln\left|\frac{t - 1}{t + 1}\right| + C = \frac{1}{2} \ln\left(\frac{\sqrt{1 + e^{2x}} - 1}{\sqrt{1 + e^{2x}} + 1}\right) + C$

## 定积分的换元法

### 选择题
1. **答案：A**
   解析：令$u = 4 - x^2$，则$du = -2x dx$，当$x = 0$时，$u = 4$；当$x = 2$时，$u = 0$，$\int_0^2 x \sqrt{4 - x^2} dx = -\frac{1}{2} \int_4^0 \sqrt{u} du = \frac{1}{2} \int_0^4 u^{1/2} du = \frac{1}{2} \cdot \frac{2}{3} [u^{3/2}]_0^4 = \frac{8}{3}$

2. **答案：A**
   解析：令$u = \sin x$，则$du = \cos x dx$，当$x = 0$时，$u = 0$；当$x = \frac{\pi}{2}$时，$u = 1$，$\int_0^{\pi/2} \sin^3 x \cos x dx = \int_0^1 u^3 du = \frac{1}{4}$

3. **答案：A**
   解析：令$u = \ln x$，则$du = \frac{1}{x} dx$，当$x = 1$时，$u = 0$；当$x = e$时，$u = 1$，$\int_1^e \frac{\ln x}{x} dx = \int_0^1 u du = \frac{1}{2}$

### 填空题
1. **答案：$\frac{1}{2} \ln 2$**
   解析：令$u = 1 + x^2$，则$du = 2x dx$，当$x = 0$时，$u = 1$；当$x = 1$时，$u = 2$，$\int_0^1 \frac{x}{1 + x^2} dx = \frac{1}{2} \int_1^2 \frac{1}{u} du = \frac{1}{2} \ln 2$

2. **答案：$\frac{1}{4}$**
   解析：令$u = \cos x$，则$du = -\sin x dx$，当$x = 0$时，$u = 1$；当$x = \frac{\pi}{2}$时，$u = 0$，$\int_0^{\pi/2} \cos^3 x \sin x dx = -\int_1^0 u^3 du = \int_0^1 u^3 du = \frac{1}{4}$

3. **答案：$\ln(2 + \sqrt{8})$**
   解析：令$x = 2 \tan t$，则$dx = 2 \sec^2 t dt$，当$x = 0$时，$t = 0$；当$x = 2$时，$t = \frac{\pi}{4}$，$\int_0^2 \frac{1}{\sqrt{4 + x^2}} dx = \int_0^{\pi/4} \frac{2 \sec^2 t}{2 \sec t} dt = \int_0^{\pi/4} \sec t dt = [\ln|\sec t + \tan t|]_0^{\pi/4} = \ln(1 + \sqrt{2})$

### 解答题
1. **解**：令$u = 2x + 1$，则$du = 2dx$，当$x = 0$时，$u = 1$；当$x = 1$时，$u = 3$，$\int_0^1 (2x + 1)^3 dx = \frac{1}{2} \int_1^3 u^3 du = \frac{1}{2} \cdot \frac{1}{4} [u^4]_1^3 = \frac{1}{8} (81 - 1) = 10$

2. **解**：令$u = 2x$，则$du = 2dx$，当$x = 0$时，$u = 0$；当$x = \frac{\pi}{2}$时，$u = \pi$，$\int_0^{\pi/2} \sin 2x dx = \frac{1}{2} \int_0^\pi \sin u du = \frac{1}{2} [-\cos u]_0^\pi = \frac{1}{2} (1 + 1) = 1$

3. **解**：令$u = \ln x$，则$du = \frac{1}{x} dx$，当$x = 1$时，$u = 0$；当$x = 2$时，$u = \ln 2$，$\int_1^2 \frac{1}{x(\ln x)^2} dx = \int_0^{\ln 2} \frac{1}{u^2} du = \left[-\frac{1}{u}\right]_0^{\ln 2} = \frac{1}{\ln 2}$（注意极限处理）

4. **解**：令$x = a \sin t$，则$dx = a \cos t dt$，当$x = 0$时，$t = 0$；当$x = a$时，$t = \frac{\pi}{2}$，$\int_0^a \sqrt{a^2 - x^2} dx = \int_0^{\pi/2} a \cos t \cdot a \cos t dt = a^2 \int_0^{\pi/2} \cos^2 t dt = a^2 \cdot \frac{\pi}{4} = \frac{\pi a^2}{4}$

5. **解**：令$u = 1 + x^2$，则$du = 2x dx$，当$x = 0$时，$u = 1$；当$x = 1$时，$u = 2$，$\int_0^1 \frac{x}{\sqrt{1 + x^2}} dx = \frac{1}{2} \int_1^2 u^{-1/2} du = \frac{1}{2} \cdot 2 [\sqrt{u}]_1^2 = \sqrt{2} - 1$

6. **解**：令$x = \tan t$，则$dx = \sec^2 t dt$，当$x = 1$时，$t = \frac{\pi}{4}$；当$x = \sqrt{3}$时，$t = \frac{\pi}{3}$，$\int_1^{\sqrt{3}} \frac{1}{x^2 \sqrt{1 + x^2}} dx = \int_{\pi/4}^{\pi/3} \frac{\sec^2 t}{\tan^2 t \sec t} dt = \int_{\pi/4}^{\pi/3} \frac{\cos t}{\sin^2 t} dt = \left[-\frac{1}{\sin t}\right]_{\pi/4}^{\pi/3} = -\frac{2}{\sqrt{3}} + \sqrt{2} = \sqrt{2} - \frac{2\sqrt{3}}{3}$

7. **解**：令$x = 2 \sec t$，则$dx = 2 \sec t \tan t dt$，当$x = 2$时，$t = 0$；当$x = 4$时，$t = \frac{\pi}{3}$，$\int_2^4 \frac{\sqrt{x^2 - 4}}{x} dx = \int_0^{\pi/3} \frac{2 \tan t}{2 \sec t} \cdot 2 \sec t \tan t dt = 2 \int_0^{\pi/3} \tan^2 t dt = 2 \int_0^{\pi/3} (\sec^2 t - 1) dt = 2 [\tan t - t]_0^{\pi/3} = 2(\sqrt{3} - \frac{\pi}{3})$

8. **解**：令$u = \tan x$，则$du = \sec^2 x dx$，当$x = 0$时，$u = 0$；当$x = \frac{\pi}{4}$时，$u = 1$，$\int_0^{\pi/4} \tan^3 x \sec^2 x dx = \int_0^1 u^3 du = \frac{1}{4}$

## 综合应用题

1. **解**：令$t = \sqrt{e^x + 1}$，则$t^2 = e^x + 1$，$2t dt = e^x dx$，$dx = \frac{2t}{t^2 - 1} dt$，$\int \frac{1}{\sqrt{e^x + 1}} dx = \int \frac{1}{t} \cdot \frac{2t}{t^2 - 1} dt = 2 \int \frac{1}{t^2 - 1} dt = \ln\left|\frac{t - 1}{t + 1}\right| + C = \ln\left(\frac{\sqrt{e^x + 1} - 1}{\sqrt{e^x + 1} + 1}\right) + C$

2. **解**：令$t = \sqrt{1 + x^2}$，则$t^2 = 1 + x^2$，$2t dt = 2x dx$，$x^2 = t^2 - 1$，$\int \frac{x^3}{\sqrt{1 + x^2}} dx = \int \frac{x^2 \cdot x}{\sqrt{1 + x^2}} dx = \int \frac{(t^2 - 1) \cdot t}{t} dt = \int (t^2 - 1) dt = \frac{t^3}{3} - t + C = \frac{(1 + x^2)^{3/2}}{3} - \sqrt{1 + x^2} + C$

3. **解**：令$x = a \sec t$，则$dx = a \sec t \tan t dt$，$\int \frac{1}{x \sqrt{x^2 - a^2}} dx = \int \frac{a \sec t \tan t}{a \sec t \cdot a \tan t} dt = \frac{1}{a} \int dt = \frac{t}{a} + C = \frac{1}{a} \arccos \frac{a}{x} + C$

4. **解**：令$x = a \sin t$，则$dx = a \cos t dt$，$\int \frac{\sqrt{a^2 - x^2}}{x^2} dx = \int \frac{a \cos t}{a^2 \sin^2 t} \cdot a \cos t dt = \int \cot^2 t dt = \int (\csc^2 t - 1) dt = -\cot t - t + C = -\frac{\sqrt{a^2 - x^2}}{x} - \arcsin \frac{x}{a} + C$

5. **解**：$\int \frac{x}{\sqrt{x^2 + 2x + 2}} dx = \int \frac{x}{\sqrt{(x + 1)^2 + 1}} dx$，令$u = x + 1$，则$du = dx$，$x = u - 1$，原式$= \int \frac{u - 1}{\sqrt{u^2 + 1}} du = \int \frac{u}{\sqrt{u^2 + 1}} du - \int \frac{1}{\sqrt{u^2 + 1}} du = \sqrt{u^2 + 1} - \ln(u + \sqrt{u^2 + 1}) + C = \sqrt{x^2 + 2x + 2} - \ln(x + 1 + \sqrt{x^2 + 2x + 2}) + C$

6. **解**：$\int_0^{\pi/2} \cos^5 x dx = \int_0^{\pi/2} \cos^4 x \cos x dx = \int_0^{\pi/2} (1 - \sin^2 x)^2 \cos x dx$，令$u = \sin x$，则$du = \cos x dx$，原式$= \int_0^1 (1 - u^2)^2 du = \int_0^1 (1 - 2u^2 + u^4) du = \left[u - \frac{2u^3}{3} + \frac{u^5}{5}\right]_0^1 = 1 - \frac{2}{3} + \frac{1}{5} = \frac{8}{15}$

7. **解**：$\int_{-a}^a \sqrt{a^2 - x^2} dx = 2 \int_0^a \sqrt{a^2 - x^2} dx = 2 \cdot \frac{\pi a^2}{4} = \frac{\pi a^2}{2}$（半圆面积）

8. **证明**：令$x = \frac{\pi}{2} - t$，则$dx = -dt$，当$x = 0$时，$t = \frac{\pi}{2}$；当$x = \frac{\pi}{2}$时，$t = 0$，$\int_0^{\pi/2} \sin^n x dx = \int_{\pi/2}^0 \sin^n(\frac{\pi}{2} - t)(-dt) = \int_0^{\pi/2} \cos^n t dt = \int_0^{\pi/2} \cos^n x dx$

9. **解**：$\int \frac{1}{1 + e^x} dx = \int \frac{e^x}{e^x(1 + e^x)} dx$，令$u = e^x$，则$du = e^x dx$，原式$= \int \frac{1}{u(u + 1)} du = \int (\frac{1}{u} - \frac{1}{u + 1}) du = \ln|u| - \ln|u + 1| + C = x - \ln(1 + e^x) + C$

10. **解**：令$x = a \tan t$，则$dx = a \sec^2 t dt$，$\int \frac{x^2}{(x^2 + a^2)^{3/2}} dx = \int \frac{a^2 \tan^2 t}{(a^2 \sec^2 t)^{3/2}} \cdot a \sec^2 t dt = \int \frac{a^2 \tan^2 t}{a^3 \sec^3 t} \cdot a \sec^2 t dt = \int \sin^2 t dt = \frac{t}{2} - \frac{\sin 2t}{4} + C = \frac{1}{2} \arctan \frac{x}{a} - \frac{x}{2(a^2 + x^2)} + C$