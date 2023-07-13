import { useState } from 'react';

import React from 'react';
const ProductDetails = (props) => {

  const { product } = props;

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
          <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
              <img className="w-full" alt="" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBgVFRUZGRgaGxobGxobGx0dHh0bGx0bHRoeHR0bIC0kGx0pIBsdJjclKS4wNDQ0GyM5PzkxPi0yNDABCwsLEA8QHhISHjUpJCkyMjI4MjIyMjAyMjQwMjIwMjUyMjIyMjIyMjIyMjIyMjUyMjY1NDIyMjIyMjIyMjIyMv/AABEIAQIAwwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQYBB//EADsQAAEDAgQDBwMDAwMDBQAAAAEAAhEDIQQSMUEFUWEicYGRobHwE8HRBjJCUuHxFCNiQ4LSFTNywuL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QALxEAAgIBAwMDAwMDBQAAAAAAAAECEQMEITEFEkETUWEicZGBocGx0eEUIzIzQv/aAAwDAQACEQMRAD8A+YsZMK7G3urMbBE7IzmTppqrCs8c3XuC9YZPgEdrZidh7KZNgL/PnipCJkEdd0Sm245FVpsuJRHNi8b+xQRDvpCx0EX71em6Tbx70pUeXDxQTXypjo2mvtt5ckDFcVY0WIJ0htyO+9lltx7iYibwO9BxOUHKwb3PMqqeSuDZpdL6rblwjaw+OZbtAE6AkArQYARB81z2E4cKlpg+6c/9MrUjmEuaBBEzHgVBZ/c2T6TL/wAv8mo9gHgvQSISmHxVy19nxMcxpI5dyJUxdNrg17g0xzPhorlJNWcqeGUZuDW6G57UdPfZHFOyXoPa67HAmY1GvLyWhTbaN1KyDi1yUotAPXmmaVHSVBRi8SEW9jugQBoM9E7TZfvQ8hHcD9kyxhkeAQB61keBXjWHnf50TDm++qv9IXO8ad6RKhWvSHj1Qm0p8xKcbTlW+nACAoX/ANP3eSibDOnt+VEWFHx5rbSmWCRa0wPv7wqspkiOaPRbcDaUARjbov09HeqK2nlcPXkr1P4pkRc0/ZRzdERt7dUR7QYHkgBXJPgP8JTEUZ6DdbIho02WZxDoosaMxtSHiNAD5xZGwVIntGblKVWkQeZW20ZKDH7EuB6EnTyhZcrpo7fTckU0pe47w4ZXA8iSegAmVqcWxJFN2xtbvS3DMRTg7yIt1ifb1S36nxIEt3AaD1dACzt/VR3pZI92/hNmPieIQTAk5RJ7rIeFeaxc9w/a2AeZOg67pGoxxIbu6CfMwPT5C3eF0g0tbsPdXynUaORhwetneXx/IlQZBgiDsTp4yuh4LUeajmZhAEkF03MRF5ix0torV8GwsuFzwxX0qrsjoJBbmIktBAuI5fZLHLezTrcSeJxVWz6HSJjyR6TBHVcbgOPPpOy1Zda2ngQdwevoug4VxmnUdkBLXcnReOoJvbTVao5YyOBl0OXHbq0vKNVjfI7JhlPc9EJ7IIhN0m7noFMyJF2MkhEfTDSi5YiFRzCdUiQIWVi2fmyM2nzXhZAKQFPp9AoqZSogD5VhWkeiOQPNHp0bSFHs0nf+6kVg6ug+fP7qzxIAGqN9KwB20VQ2CY/wmABm9tL+SsDoo7XvBCEag3QBfEPt3leu4e99B1UaNNhGrR+4juPsUoan1HtYP5ODR/3ECV3YYGNDGiwEAdAqMuTt4GkfOcFhGkODyJMQ0+55GNF5w/G/TJp1ACwHtCM29oBN7kK2PoClVqAWAJPg7tD0KUwgilVqO0PZHzv9lTOmrZOL33+BzE4xtJz/AKQMOjK8SALgwAZLYtvsg0nF+8k7m9+d90rhpLQZPzT0WngMOXOZG5UGkj0eixVvbaavfkUdh3BwcCBAA6CNO5aPDqhae1aNNL+S6XF8Np06ckXi643EPcAQGgjNJNwYgixCjd7G2UY4IOcE2vZfuaHEuKZGwZJPzyWDSElzjyEeIE+pTL6zXEMZTh2VxGbtEuAnTnAMTudFMBSzENOgMk8yp8I5sM71OTZUlwvn5CUXgiHgkRYjUfkJmgLgtcSWwQ5v7hGktmbdFpU8AxxA00/wj0uAtcXEyCOSg5JnTWOS35HMH+onifqMa4D+TTlMb9kg36LrcHUzsY+4zAOgiCARN+q+XUsHmrFlR+QyIe8mwBvB56L6PwKk5lPK97XAQGuaNY3PUrTilJ87nE6hhxJXFU/b3Nhj5VwbTukmY2majqTTL2AE259ed/UIz3kj0+eCuOW4uPKCOfpuvGuOipSEjqm20oEnb3FoQRKQORUTLHiFEEj5Hhn3Ep3EMBDTskiyHARrcd/+UZz9lMpLVKg0XjnmOmqXebz6qzqsiAbR+fwkAKq6ATdJVH6+Cac7VJ1RaUmNFuC1WjEMzAESRfnBynvmF2lfGtY0u1gTE8tfFfOzLXBzdQZHhoqVsRULi7MQNr6k9FmywbdlsIptI0OMNdXqvLC2IFyYm3mTt4JPjZDMmHabMAzHm4/j7q5a4EOA1An7eCFiqDX3FjvG/wDdVKVNXwjqS6b9PdB7rw/P2L0QIgLrP0jRaZc7UEgd8Sue4NQoOLhUrmmQDllusa30PdYrQ4hgq+FaxzjlZU/a5us7AjVro2Sbs6GDVY77G6dUaP6n4s2fpNM7EjY3t3rIfhy3IwC7xJi5A8dTF1WvgywjPFgDlEzfnb7x3p1rmuGd5Id/02t1kb9yil5OhVxab2e23NeTBxWCqUKjajmnKHDtcjYgHlomGsLXlzBLHOEEfxzbHlC6HE4apUaXVA1lpiYkwAM23JZ/DOFMqYlwaAWhmZ83a2ZMA9ABeTMqUpXuzianDLSP1Mb29mTh+LmpGsEi3lPstqpxEU2jMbmDlgzHWNO5cuOITUf9MiJgEjtG0TbX5KIy8yXGIkjmTYd52/sodrb3OhpdTkyQ7mqX7tjXFsVmhrQMxuSf4j8/2VKPFDRcf9O0Mc4AOJJcDG+VxgH8rPr1QHGCSTETtYT6ytTg/DG1LuJk3spOTjwSWNZ98i/Twv8AI3+n+OfSfUdUaXl5DiRGaRMxOuukhdVgeO0qha1udjnEAZ2wO7MLdNVytfhTKbv+p4Ab8pS2MxrW9ljXCN3Ov1BGkKUM0lsGfpmLKu52n7o+ptowJ5XRadxBN9Qs7gGJ+phabs2Y5WyeoHanuNvBPMec0xb+y2J2rPKzh2ScX4dBch5r1ez0UTEfM8TS/bzST3DKTNwfNWxWKmIFwVl13G/n4pspSN3hP0aziHNkiDEkAjfTkfda2JpNawta0ARoBy91xHDcSadRj7kXkcwdfyuqxGMBAIMgiQsmZOxsycfh+znb4j8LFdX2W7XrS2CDBBEjQd65SsS1xDptr/ZTxzdUxx3CVnr2hhyXEn/AV28NqPZnZDmnfQj/AOTTofMdU3Tpupwx4ykib7g79UskvY6XToRlkpl3DQgSIAiDG3qvHULZhaOaYw2Jaxpk6G3Ua+8qmJr5tdT7brNJnqIKPa0/ALC1GhzXlpOV0wCLx4aTFuie/UHHqmJdTpEOa2ncA/1aeJuk8PTlwA25J7EcOq1IBBhpkTqPHVFpcmTN0/1KyR5X4ZY1Q+q97oMHIB0bAA8hCbwTRDqztZIYOTWmB5rBxLizMdXNdDjJg3v6nUwvauKfApjcC3KRMD5zTS2CGeEax39S2r+wTHcTfiHwf2tt07++FajiqlOlUpNsKgAda8SJ8wIVsNRYAALk8tSeQ6ddTyW1guGT2nNE8tY5JNouemU41k38mJwzh5Lw1sAnTc3iY/K6FnDQwZS2Ms9ZeRGYneAbBZ4wlQAQQCHGDJGh35rffiWtbJIsPBRlJlkYduyWxxfGaY+q6N5I8j/4rX4HWuPshOY2pUY+qx5o3a/LYkEGCJ/pMHzQKv8AsPH03hzD+1xMOjq3XykJ2mqMeLV4nmlC/wDJ2hylkugBcxV4W7EVXNoCYu4kwANplHwZq1rxlZOt79xP2XWcHwYptIa2JEnmT99ArcWFvdkNb1KOFdmPdv8ACML9IVqtGs7CVQ7LdwgEgOG8j+BA15gc129I30iOaFhWA2Kc+k2ZuFrjHtVHns+X1Zd1U/P39yZBzXitZRMqPk5Y29jKUr0Ozpckiei0cTTaNN0riXiI318lMpMl9OD6KzHPAMOgXtsr4gTKUxBsdhuoSSrckaHDqpfnbrY5T1EERzWXxcZg07AxESYNwPQqtHEGm6WwQN4SeIrkvJHePsqK9ggrlZpNe5kEEs7jBgbW56QtzhOABoPrYmDnJy5jcDaHba+wXPuqHIHOg7Tz56bbdUR7nvY0AmBdrToCdYG26qe51v8ARpq8Ld0nT5EsXiBJDZLZIE2JA0JHVOscXuJ2Fh0jUrLxDiDdt59lqcPrta8S4QTm6mf4kdTHqnNbWTw6qcG/UfHj7cHS0A3DtytBLz/Lck7DkvMccVWyta0g6hrTe15J6LFdi3F5eXEAOMc+XsrOrVXOBD8vK8G/dp3qlRfJ3IZHLFflrb4sHxNv0uzWaZIP7ZAP9U31uk8K8FxJ3I8iJHp907xisa1BmYkuY8i8ucQ4E99vsET9I08PULqWIztGrXgE5TexA01Pwq3bts4UtTPFn/3KdbXVWPcOgvAHS66StiW06Uja0bzyXG2p4h7KL87QYkwCW2NwfL7LTxFfLTP1HS4/waQXEf8AJw7LNBzKqlzsdiGuxZPP6e4tiMc76mTZnZjm6e0e+Vq8OwLXN+rXcRTGgJgv5ACbD3XO4SuTUNQgPcXF0fxkmdtROy2qWBfWd9SuMwAsHOgCNmt09E/ScnXBztf1RqKxwe+9tePgrxKo/FOLQMtNohrRGUDk6P3O9FG8Pp4en9Rzc5BaAzYnQG4OXlIV8bivpgNpgAC3KPNZeP4lUcMpcMpiQ0DYgi5GsjZaWowj2o52l0mTI1Otr38H0rB4cOpsOaQQCIAAg370/SaQJmdvx4LguAca+lUa57nGkWlpFyG7ggXsYiOq79lZrmyDIIkEaEHSOdlPFNSXyS1ujlp51ynww1MCZO/JHquhJU6mYnYW+WRnv0tqrTCWzqLyOgUQSPl2IeOzz2Sb23Mr17gXdFWse0I11sEFIrU1RqNBrntDpAMplnB67rlmWb9ogHyNwiYbhb5mpIg2APLeR9lCUo1ySMvjNOlTAaOy4GwG4MTP571jtoZ3dk3N52AGpsm+ItY91QiYBkXkmJzwT0Mjo1EwFcvuYAyw0Cwa3kqbpGrR4VlyJMpiaeYtbsBp87lpVMKGMA3371TCxmLjtYeFkZ9TOYCqVnrIYoxbkvP9EY2PYDJ0KTwxGds7EGe6/wCE3i2EuJJgCfHmr8KoNc9xv2WFwbFyW3G/MAqSdLc4mtcfVtrz+RmmxzzJBifk9U8cDEIXDanZ0WvXrDIDvEKtumdzFG4mHXbczrv17+vVBr13UmfTY0NzCcwu53PtbdwV8XiL9FXCOFQEOMDYxoj7mbU4cWWXbtZTAP8Apua+AY1trznvWlxzEsqMY+wEgFszGsBsDS07Jes1kAMk87H7pZzGw4Ok6RAv88U1zbKNV0+MofTs/cL/AKlrGy2DIsN530RsHjHtOXNOtjpLoLo5dpoSmDw8kmIMzHI7Dw/C1HcHeBIE+ClKfsGi6d247lvfJnmS5uY7GdYkk894jyXVYTgjHsggSdFgPwr2ibWO8fdbHBuJOc76b4B1B0kcr6KqUm9zo48SxQ7VwLYzgn0gS156J/8ASPGXAmnUfLSYAMdkkdmP+JgiOcdU5xbFNDC2xJGy5fgvD31KrgKZeyINy0agwXbGLjrCsxN3aM2rjF46nx/Q+rB+UKzefwJDhdMMpNZ27CO2ZdzudJ7uVk99URcRMrcjycqTaQxKiWzqJ0I+VVWwRHehPdBzaHY+oRnvG/SEGsyQenikVndh7Xta4aOAcPG4SeMaCMp0v0N+XIrlMDxqpTbkPbbsCYI7iNu8IQ4q+q45mw0CQATrtOkhZJQlElRl18MadR2Z0ZDa37oO3PkmMFTZUJDCWOIJLCCRYbECw5StmlQbUpOc0dqpmaCdGtmCQOaQaadFtRrHEuiHPgHeDluLAyouTa+SyOSWOXdHkJSeKbS2o0tvF+ffurOe1jSRed9vPfwSB4k5wytLS9os4tkxI1zaFG4U9ji9z5L2gSXXt05BLtZ2MfVpV2ySsvR4bnpPqH9rRmO0hpk+xR+HYYB4riGU27n+fSN2pQ4rO6TZgBGUHXN2WtPO5k9xQsdjzWlryGxZrQZAA7knF8I5uWeTUz7l9vgP9RrXOcz/ANtzjkOwg3E9EZ1WBJKWwNqLqLi2S8PYSYgxDmnkCIMjS/NBqYZ7nFp1BgNM63iRbZFK6s72k1GWMOxxtr9yrmZzO3v17k7w2rTBgi3Xf8JLhdRufJiXZabjBcACWkTGlwJhXxlAUnkNcHttlcBqDcSDcGOabW5HDrYynVU/N8s3cRWpgdho3WDiTBJOm6LQzuByiw3+y1P03wym+oKtck02G+YQ2eTQD2upJUVS5Ldb1HHCPbHd/wBBXghGeTpsDfyXa4fGU8hzEDl5Ll+N4CkPqYjCZjQBAMggBxMEMJ/c0GL6XgaWxqeLc86Zto1t9u9Di27RPBrMM8ad/wCDrOIcap5YpMzEaE6T3Bc03EsDi7O7OdbHXlMwtTD4Z2WMoE6xc+J/CZZwxjYIYAJtc9J33V0MDq2YdT1dRl241aXl/wAGEylWfYhwnkC4/gLs/wBKYY084dTewjJJcIDpBMi1zzhM4PD5Ii0AHc9y06b5F7/NFdDF2u7MOo6lLNBxa5822xqg6Zn4V59M2PKUvRqXMGAT8COat77K45wJ9USor2+QogD5U995RadUZTOkFAbRJGZxidAdx3Dqhu7TsswDpylVuaRN4JqPc4ugT3ZiY5re4Vw4U6eZ4GY3vy+fdZr8I6nFRhkggwQNdfz4pDinEKjwA90T/BsgAdb3JVM592yK/g7HBYljwchBAcRI5wPyub49hfp1PqD9r5BHUgz5i/fKZ/S57LwLw4HzH/5Tv6gpZqD9iIdPcfx7qqqdDOJqvyO7BuDr9k+xj8pq6NMMP/IyCY6SPWFTBcPL3nNZo/ceXMTtzJ2CtjsfneGMMUwQA2AAQ028+vRWXeyJOmDDjkPMuN+4NA9HuTmE4eIkTNu+SluF4epUc4QMurpFgRpHJ3wrqBTpsYILnQLBoAuYlziTc+g5KvJLt2OjoM2KLUZK34M5vCRqjU6jqTmk9oN0B2tFu6dER2LptE9ueRLT6/2WXUxznkjZVq3yej78a2SpiuMwuaXSJLjI1PUmLT0RMFhyGOaHSAQ4tjUcxziycw2FJudEN9GDOim5OqM60cVL1K3OlwNFj8OxtEAVNA1uub+UzIDbyT1XmJpUaAFN7nVXn9waZc939DR/Cm3cjXQTeMrhGPdTcchEublcDYGeZ2h1z0Peui4fwrK4OJl5Il3PnHIdFXTb3PP6/S+lO1w91/KF2cNxWJaGvc2hSsfpjtGRoIFrfAEwzg1LDtu4vef2gwBO5y7wtzG4j6bC1gBfpHLvWVRwZu6o8l7v3E6DkByC1Y1J/Y57fgFgsKTIHp7+q0X4VoMgSOq8w/8At9mdQL93+UZlQuMbaT3/AArUI8oG0z0hXpuk27lV1MC48fNUab+0JgNhp7jMq5sdr8kJj5vqIRMMZcdwkAbKojwOqiCZ8i4q403lsWBIHgkaVQOMHQrV4pR+pc8teg0lYzsO9huDHMXCxLg9DU02nuv4N/h2OgfTqX5E3zDaVk/qNjWljmiC6QY6RHuq4imXupxoZB8BI+6NiOGmqAc5sIANxrfT3SSSlZxtRjWObQb9HPl72j/j/wDZdBxKRRcQYcQQCdibD1Kxf0thvp1IeCHO5HkYEd8yunr4JtZgzzAdOUGL7SRcolTZnk6Zw3EH5GCi02/m7TMeXOJv1XvCuCGucx7NNo7b/sJ39l2FXglGCfptve43Ot+aJi+Gk0/p03ZWNH7LAHvOvulbSpfkTl7HJY7iTWt+nh7MFs2569e9BptBptl4Y9pdmzT2wTIvtH3R8c8U6ZY4DPmAIIEgayDEx1HNY9euXxqDoJHr3pxiqJY24S7oun7jr6D3ENa5hJsAHAk+Ux4oruH1qTc1Sm5rTuRZa36bwj6M4iq2OzDMxi83JnuHM3KeocQdj6v+nL3ZCHOJAAaA0EySb2tZRcvCNeLXzU7luJcPqDKZtOndEIPEDyAASTq5pVC0mcpsdiOY6K9bGfUBgJKO9np46qEoJpitJwLw28kwIXXcHxtRjC0OLtAwu/gRraJnoTaFlfpvgrq1QEjsNMudpMfxHjuF0VfBGnULI6jqD97eitxwjKRxddq12PHs7/YvhaUAkkkm8k36p1rp15IbCMvWPQITHxeVso4QzTAJm1hv9vm6hsSJ0PloqOdA71d1S2lzfxTGWqVAJHwrwftn+07JSq6Xa7f59ldpJHITr4f4QI0KY7IgJugwDT5oszDPcQ1o1m3XbXZPsdBJ6n4UEkNfTJXiF9fuXqQ7PkuCxmax19+7YFaGQO3g9eazuDUIBce4LTc1Y2j12GDcFJ8irKJzENcJGojml8Nicrvpm0vAI94T37CSNSF7geE/Urio4dlwzN5Eix8rJOjndTwrtU/K2/QYq4pv12FkAyG+Ej/HiuvoMAGsA7R+ZWW/CsbIyie63ovMJUqXaXzEQDBgGd9duarOHsalRk2kx0MeyxsfxdlF5Zml5HKcsbnqdgmMQahBGZ3SLHzF/Vc9iuEFsuAJ1J3PU9Smq8kX8FmYim9wFJjnVH6kwDPNzj9rI7q9OkbxWrDbVjD9yPkLGwz2PJAzCNTER0sZBVajCD/tk98AW2AGwTljb87EbfkJj69WqZqEn7eGwSlCs/Du7Lr3/boA4Q4HQmQiV8U9s3B+dLeiRz5wSAVZDGqonEbqYqlW/fLCLAgg+hPrPgnuF4Kk97W5ybE9k2OXLIJ8duRWNTwBdc+i0sJQex7HssWHs/eec3nvUvT8Ik3XDPpXBGNYQAIER0A2Vv1E2CxwsRmHt88UHhHEhU07Nrg2IgSe/vQ+O1w/LGg9yb+yhii+4j4M5lUwfZGZcaIDLROhBXpeQYW0rGnOmx+cvZVc+PA+yWfUNuWsdV49xcAO4fdAwrHSSZuj0wAInr5JJrL21kfhMURtM/dAB2xIiRBnpMSmzUgLNeIsBe893gmab9AZg9EAF/1LufsolT8uFEAfL6OIeDDXEDQDa2pgrX4RjPqOLCYI/aY15gjnv/hYH1CNLE2HQf3Wph6QY0EiST2G7ud/Uf8AiFjlsbI6jLFfTJr9ToqnCyG5i4T1HsrYDFvr/wC2XiKXZaALk6F0NBJJhKBz3Uy19RznC4IgQY0b+T4c0rwyqaT3XcM3K0i8jzhV7tbHR0c55H3Td1tvwdMyk+cuaH7NdHa6ay13Q2PNJHF1KbyXsBmA6AQ4RP8AEnqvXVAbNDYJ1Ak+Z9gBPJXql7ozZjsMwM+E6qK+Tbk0WHLyqfxsOMx2f+Q6OFh42seiy+NcR+nTOUtLzzOnnfuQ6lMwcpI6jULlMbRcx/admvrz/upRhbORqdBLDvyvc0MNmAIDiZLnEgGCeRLt9NkvUqPOpPzuW1icVUIy53RFgDErOYHtOvmAfcKyKbdHKVtin0nPsJ+yfwuHhuXlr3o1EkmZJI5n5yTlNnILRCFE+AQpQR1CdwtEvc2PgXjaKdwbCL729ZU6EEw9LcGCIITr6fZAvb2+FCYMp7wrHEQB36H53p0ILUEsBsIAHuln1Ba07/5Vy65k2NvQ+SpTp3y2591igZHkGLbT8heBxE9eXPb3RjhzTy5mwHtDmnmCqPLdJ2QBXDv3I5e6bpydBAM+QQqYboETKbRzQI8eIjS+vebor3jbz5IT2EkT8Av+VYOzWA52Hy6BnssPP54qKmUKIA+Y4CkJzvExEN/qOzfFPVajgS6zqrtf6WD+nlolvqfTYIMvPpOsdeuySlzruMAa/jvWKm3b4Lmb3CawyhhcHOzmT331Oq1K+CBFvt9lymDqHO137Q0iPwukp8XA/chrc7XTHHsafuXZLRBH4PJamErnLYiZkj9ogWA7MF5PVYGM4tmtsqYbHERN+R38eaXZ3G7JqMcGk3z5/ua2Lr5JLtfuuYxzi90kLQrV3PMu027+qXNLMY8k0muSOScc0aTTXwN8IrSId/G0+0o+IeCS4Rc6bR0CRwDg12U79k+Oh+c1ZrC15aeanCVO2c7J0xSXdB0/bwOUBp5p+mLCyCyg4NkXAF+Y8EXDPstEZJ8HKzYJ4nUlQ3TjTZMsNvD8JVjbnloj5SbAbD8qZQGIPnFuliplvcW05KrLZu8BDqunTmgC9TWL2Vi8S29/kei8zyAd0MyI028j6IANXebE3iANdBb53oEePy6KHSRmMA7yJvIG/og1bd14y3+90AMsOka6j5ysmWVO1zJgN6Tv4XSNBthtEk6zcAQeWi8ZioAmLTf8+aAGnRcdbdYNyPBesYRZAfeMup+yjahaCfX0SAayhRB+sVEDPmBl5JsANSrvDeyADpZp3PM8l6HgEFwsNGjQcpPPqpSZ/I6n0Cybsu+SVJJAGg91HvKYw9OSvMRS7XkpuKUTTpXJvtiKFxT3DmudbW6X+ktzhOHLWXtJnw2KMfJbq4uMbY7RwsAGLRJ7lnYumWGWbXj5otanUix5eiTxbZv5q5xTRz8eWcHcXTMYVJcTodYWuG5ofvusjE0p012R8LxAsGWoLf1D7j8KicGuDu6LqEX9OTb58HTYT9pSWEMWPMjylOYCq1zZaQRzCzwe29v/ACn55JYn9Rf1WKng7l4aNBr5AA1v6I9OpAM/LpVmg7lcsM6WMLUeXGBVEneYVqgKFTC9qPMTyTEWfU7Pqgmv9lSq63TmqZoO1h/e6AGX1yZIG4A7hIhBLtZNufXlqrCMottOnSyTD3GRt37ygBtrtINoE+ilRw0PUxySlIkZhv4eiYpsJMnx5wgB3CPDW6czM89vU+avhquZ8OFoQQ+xaLcvsrUmEXbGY+nJIBzIok/quOyiYHzujTzOn+IuU6wTJ9PZCpvLW5BpMnqfwjtbNhrAWeKvdlzD0W+BSskuO9ym2NtE6+iMygGREypyjZfp80cVvz4K4bDbkdrYbf5WtmzBojQIFYgBpB+QVam4AA31UoxS4KMuWWSVsO/r3JQ33+BXxNS8C8ITnwTHepFYtWo6rPxwhq1nEfhJYtgNlFkky1LNTaHscRpPLS1t9CmcBic7nkjtWNu/+6RwVQmmWToY+4Wnw/hzmgukGe8dyzR+mW538vflwfQrTrY1KBuJ0g+SJm0AOmv5WbVxrmkMy3FrHW6fpMMAmNIj+60epH3OWum6hq1EuypEzuhYg5hChaQvJk21EJqcX5KZ6TNHmL/B4yMrp1QK7pnlF58vujMaQDPwmySY8Ewd1IpcZJ7hjiS0N3kX6Rb7r2k8Fpj+QEHlb1uqC+1hEfjxV3zAboddBF0ES9Kn2jsPxH4Psj0nCSb8pt3+CWwzy06SQfTeOqYz3iN7/cdECLRP3TAeBoo+Mtuc9YUpsMz870wG6bLC48gohZHch5qIA4GLq1ObmPRR7TAgSrUREg7jnGhnxVRcHZyJTRcA0XulG4qbR49FHVNB0TENNfOtwiNcQAJ6pWgZ8kcO0KkQLNMyvKtQGJ5Kv1CEqXIsdDOcSPD2UqsJul3O21lXZVjyugQnTaWVOjvcLpcA/wD21g4lgfEWPNN4LHGmC1zS6f6fwVRkg3ujtdN1kMa7ZuhplKXytlosFjUuItH/AE3eY/KYZxhu9N48vyq3CXsdmPUNPx3I0MqoWA30KC3iTNw4d7fxKt/rqX9YHfI9wl2teCxarBLiS/KDtC9cydQD4ITa7Do9p/7gmGiRISLLhJe4u/Dt5DwVajBrF0wUDEnsmLFWQm4mDV9OxZo3HZ+/9wDKXmmBTBd36fmEKjiGvYBF9+9evJZAB7lqW55ScJQk4y5QVrPA+tv8ptjwXWFh9km7sgOJk6X5ILqzmOyi8ggePsggaNSqJ2Gnsosqv+7y5ch1UQM5zYITNT3qKKstKnUI3JRRNCYcK7dPFRRAHh3VWfn7r1RSEL1dPnNHb+0d5+yiiiDI3RWGvh+VFFIByjq3vV2fub4qKJkQlbTx+ypiRp4/dRRACjh2T82KeosEaDRn2UUSHbPMO85Rc6uTtQ2UUWfKel6Y+RfC/vd4ezk8zRvzdqiiux/8TkdT/wC9/YHi9P8At/CC7Vvf/wCSiimc4E1eqKIA/9k=" />
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
              <div className="border-b border-gray-200 pb-6">
                  <h1
                      className="
            lg:text-2xl
            text-xl
            font-semibold
            lg:leading-6
            leading-7
            text-gray-800
            mt-2
          "
                  >
                      {product.name}
                  </h1>
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                  <p className="text-base leading-4 text-gray-800">Price</p>
                  <div className="flex items-center justify-center">
                      <p className="flex-auto text-lg font-medium text-slate-500">${product.price}.00</p>
                  </div>
              </div>
              <button
                  className="
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
          text-base
          flex
          items-center
          justify-center
          leading-none
          text-white
          bg-gray-800
          w-full
          py-4
          hover:bg-gray-700
        "
              >
                  Add to Cart
              </button>
              <div>
                  <h1 className='mt-7 text-lg font-bold'>Description</h1>
                  <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">{product.description}</p>
              </div>


              <div>
                  <div className="border-t border-b py-4 mt-7 border-gray-200">
                      <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                          <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
                          <button
                              className="
                cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                rounded
              "
                              aria-label="show or hide"
                          >
                              <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </button>
                      </div>
                      <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                          Free shipping will be applied at checkout, valid until July 21st, 2023.
                      </div>
                  </div>
              </div>
              <div>
                  <div className="border-b py-4 border-gray-200">
                      <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                          <p className="text-base leading-4 text-gray-800">Contact us</p>
                          <button
                              className="
                cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                rounded
              "
                              aria-label="show or hide"
                          >
                              <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </button>
                      </div>
                      <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                          If you have any questions on how to return your item to us, contact us at finalproject@gmail.com.
                      </div>
                  </div>
              </div>
          </div>
          
      </div>
  );
};

export default ProductDetails;

ProductDetails.defaultProps ={product: {
  id: 1,
  name: "Roses",
  image: '',
  description: "A delightful bouquet of roses for a significant other on any special occasion.",
  price: 70
}
}