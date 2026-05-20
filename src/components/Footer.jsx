import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="bg-surface-container-high dark:bg-surface-container w-full py-stack-lg px-container-margin grid grid-cols-1 md:grid-cols-3 gap-stack-md text-center md:text-left border-t border-outline-variant mt-12">
      <div>
        <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
          <img 
            alt="Khedut Mart Logo" 
            className="h-8 w-auto" 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACgCAYAAAAisjrVAAAQAElEQVR4AeydCZxbVdn/f8/NTFugZUegohSYSco0AygIFJBNoC278JY2YXUB9C9/RUE2fduCCgiCC6+i4IuyzQxUoSJ2YSmIioCgwEyHzgK0gkhFEOhCl8k97+9kZtpkcm+WmUySm3nu5zy5557znO17kvPknHNv4kAPJaAElIASUAKDIKAGZBDQNIkSUAJKQAkAakD0XaAEykVAy1UCASegBiTgHajVVwJKQAmUi4AakHKR13KVgBJQAgEnEGADEnDyWn0loASUQMAJqAEJeAdq9ZWAElAC5SKgBqRc5LVcJRBgAlp1JWAJqAGxFFSUgBJQAkqgYAJqQApGpgmUgBJQAkrAElADYimUWrQ8JaAElEAVEFADUsZObDhjj7rGeP210VjkycZY5NXGeGR1Uui3YZRvW50yVlGLVgJKQAn4ElAD4otm+CKiM/f4SGMs/GjIrekCnEtFMBmCCQA2Twr9NozyDasTjYUfsmkYp04JKIGhEdDURSSgBqSIMPPJiobjZJFQK0SOzEff6ojI0cI00Zn1x9lrFSWgBJRAJRBQA1LCXpg0M3wuRO6nbFVwsSJbieM8SCPyhYLTagIloASUwDAQUAMyDFC9sozODM8Qwc+84goKE/nJpFh9rKA0RVTWrJSAElAC/QTUgPSTGMYz9y8OgoMm4THUYpiFdXc1xuomDzUvTa8ElIASGAoBNSBDoZdP2ukIiVNzm0CKxtrmZeD8FMw7nyqojhJQAtVAoPLaULRBrfKaVhk1itaEL2RNIpSiOhHZK1obuaComWpmSkAJKIECCKgBKQBWoar7nodaQK5AjsMYs8I15twNruxmxfoZ9u8cySDGfKO3jFyaGq8ElIASKD4BNSDFZ7oxx3Xvh08RwbYbAzw8xuBNN5Q4ZElz58+XtixdtpRi/QJ8Esa85ZFkU5DIDutW1Z+wKUB9WQholBJQAkUmoAakyEDTsnPks2nXHheuuNPa73q5e2BUa3Pn0oRxpwwMz7g28rmMMA1QAkpACZSAgBqQYYK8y/RdNgPMUdmyN8DN7U1dz/vptLd0/42zkFv94m24iByty1iWhIoSUAKlJpC3ASl1xYJe3jY1Y/YXiC9f7nEYRxJX52ynmGtz6NSue3+PT+TQ0WgloASUQNEJ+A5wRS9phGXoInRA9ibLEy/e3f16dh2gtanrFe6T/Dmbnji5ysqWWuOUgBJQAoMjoAZkcNxyphKYA7MruQ9nj0+JFfNQylWGlwYmR1kZSTQgUAS0skqgMgmoARm+ftk9a9YOXsganxrpZuoaGGrwldYDguOisfBLjbHIP6KxyMrGeMSkSSzSEY2F72+M1181KR6e2Xj6xEYmVqcElIASGBIBNSBDwuefWARb+scCrmtezRafGtcjbg/3TBjUZzDo4/5K7ysLon8LEZlIQzJeBGMZke4EYRE5GXD+24E0c2P+xaSBiYWfiMbDc6Iz6w5PT6BXSkAJKIHcBJzcKoHXKEsDDCSrATGhDe9kq1g4Ft6es4bLKd21EnqABoDqgt4zvcVwIp9kjrO5h/JYYyy8JhqPLKR8sRhZax5KQAlUPwE1IMPVx8ZkzgRSynrpruVvplxu9DbMrD+ARuP20SJv0VhcTdljY+RwekQ2E2AK5Sc0Jv+iXDbh5AlbD2eRmrcSUALBJqAGZNj6T1b7ZT2mxl1nFuJRyrNmAZZSXqO8w2vz6xP//tSn696fMSbkGr/0wx4usgOnOteM22zUsiiXuHafvnvh/18y7JXUAgJBQCtZ1QTUgBSxe82T2MwswgE0BOfuutX6dX5ZT9x23WjGHUHZF4IIZRfKNrwG43DVwW+Ofvy0bpl14Jto2G6tDS6P2D+xgszeoqZmeWO8/jxWghMUvqpTAkpACZCAGhBCGKwzBg6Nxf6UWZQ/4T2shMFTzO+Wr+/3r5159nTnNb7tGZ4auHmtwX+F30PLcctx7/HLcPD4VYwu06SEhgRwfhaNRRbTkGS/u4y1VKcElMDIIKAGJEuPmccwljONcylP0XAsocH4OtV3pJTd2VnJrANX4LHp3ZhVhr0SAS5WI1L2t4FWYBgJaNa5CagB8WBkDPc2FmEG1uJpRt9CyfG7VtQok9t8wF5JKWcl1ojY233L1HQtVgkogTITUAOS0gEbDcfC5DJVC2ccDSnRFe8tx6zECL4TjdefUvFwtIJKQAkUnYAakD6kXKbaH4vwV+5vBM5w9DVh46mUsxKBOALnjoZY3SSkHupXAkqg6gmMeANiFuFDNB53sKft7bd781xVrkSzki1CCLWMP2H85lUFTxujBJRAVgJO1tgqjjTzMZrG42K46GIzz6QIpWrdsM9KBNFtx429pGoBasOUQHAIlKymI9KAmEcQhoOnuVx1Pfc5sv7oYcl6ooQFDdesRAwurDu9bsTxLGHXaVFKoKIIjCgDwk1yMQvwNfTgBfZC1S1XsU0FudRZSctxyzDkO7hEthpjnK8WVAlVVgJKILAERowBMY9iVyzCYghuYG+NoahLIdCw3TrMOnDFkJ8rEUgsJdtAerXSSkAJ5EdgRBgQbpJ/HOvxLJHoHycRQjaXOiuxv8F1Sl3BT7tHojPq98xWhsYpASVQHQSq3oBwyerTMPgDZx5Zf3akOrqzuK2weyVzDip8VmIcZ0pxa6K5KQElUIkEim9AKqiVnHl8iYbj1xS9vXQI/TJwVpJrr0TEHDiE4jSpElACASFQlQaEm+X2Z9ZvYh/8D0Uo6opEwM5K+vdKZk9+E5FtM/+vRIzoQ4VF4q3ZKIFKJlCVBgQLMYvQL6CoGyYCdlZyav17mHt87/+V7LfTmudouFfZ4gzMDvasUnICWqASKCmBqjMg3PO4jEtWs0tKcYQXZmcltx3z2r6Pndp1PeCeD8jL0EMJKIGqJ1BVBsQsxFdoPK6p+l6r0AZuP9a98sWzusa1NXccXKFV1GopASVQRAJVY0BoPE4jlx9QBu00YVEIfI+zQH0WpCgoNRMlUNkEqsKAJH+axMD+SyD0qAgCP6cRiVRETbQSSkAJDBuBwBsQMx9bYgMe4NLVZsNGSTMujIBgc/bHvGTfFJZStUcsAW14EAkE2oAYw2HKgf3/Dv22W3nvvolw0JTso8qrm9ZICSiBIhAItAHBIm6aA9OKwEGzGB4Cx6G3j4Yn9xy5hqeHPzwpHjnCS6Iz6vbIkdwzes/47vWTfPLsD2+YWfexgYkb4uH9++NTz3vOqPv4QN2ReL1nFq6Yw68i0KMSCQTWgHDfYzsYXFWJUMtQp8otkn2U7Ksy1HBUrZzIN/hiLxEndF6hVWqI1+8TQu1zXvltDDPm/pBjeJmee8jgNgZm1CUUCv0oXXNkXpHrBV58bNiEZRNGVTqVhum7f7QxHjm90utZ7Pqxf4qdZYny24AbuIA1rkSlaTGDJSAYxz2qGwabvFLS2RmLA+cRAdvjUyku162CJD7V2vTycz4qGlxlBBqmN4yKxsNXhGprX2L/H1llzcvZnEAaELMAh9N4nA09gkFAcLZ5CPsFo7KZtbRLYXCcx2g8tsuM3RiyxnESR6vx2Mij6j2NsbrDnJqedoF8h43dnDLiXOAMCK28rfNPR1xPBb3BCfykr+8C1ZLG+Ee3GV0ji0XkI34VNzBrE66Z+uLd3U/56Wh49RDY84xdd+asowUSelxEBrWXVi007GAcrLY8hBM5+9C7roLVa2CffQK27xCcY8I5E8YYjFnEuof9am2Nh+vi+PaWzj/46Wh4dREIuWM6BDKjulo1uNYEz4AYXDa4pmqqshPw7Luy18q7AoejZuz60b/hQPEJbwWAM6r1fcbjUT8dDa8+ApJlH6z6Wpu9RYEyIGY+7P9MHJC9SRpbwQQO6OvDCq5ismoS3TnSwoHimOSV14tBj4j5NGceajy8+GjYiCAQKAMCBzr7CPrbMgB9GI1FbhbBqb6ojUlw/jG9talzvq+ORiiBABAYahUDY0DMQ6hnY0+kqAs2gRPNI/DdUyh307g5OpvG43zfetB4GEi8tblznq/OECPqptWNjsbqj26M1Z/P+lzB82eiM/c4iNlyUsTXIjj7YGM0FjljUixySTRef7H1N8wMfxLTESpC9huzYL0/MilWd0JjPHxBYyx8WcPM+vikGeG9NyqoJ9AEAmNA4OI4ki7aB4h5qSsPAUEPji1P0dlLjc6MfFYgc/y0DIxrjUdbc8e9fjpDCe99GC38szHbOP8ScR6COD8Ve4uoOLeJU/OnaDyyrDEeudQ+ezCYciaeNXE7GopvM5/lIcjTIrjTEXxX4Fxv/SFHnmisDf+7MR7+xVCekN/3PNRGY+GLKN3i1PzdkdADgNwEkWtCjnO3E5LnGfdWNB6+AoBgkAfrOa8xHjEZEgu/nk+WTHc3JTN9PLIqLT33w1L10uJSLsjws6l61m8NaIpK1XmDY0CAmVVHf+Q2qOL6kh/26XDMrX5dYngw7pw048GAYrlJsfCVodrabkDOE8iW8DgE+CiDr3Vqel6wT8XTn7ezg3Vtj1nOQe4bffn4pJWtATmnJhR6joP8g/aWVRRw7Bnfbdd1K8Mvisj3KL63uDJue4F8pzEefrju9DrP9hZQrKqWiUAgDAiXPHYkn/0p6qqDwP7md9ipUpoyKR45AgZNHNB8Pw8GOK+tqfPO4agzB+qrHZFZzLuWktNx8J0YgvNHzphyPpyZnA3Ewy1sm33YbYucmacosJzjQu7oJ/I1IhNn7B6uMaOeZLqJKdnk8MqnxrjOE2LMDjkUNboCCTgVWKfMKvXg0wwUirrqICBcaT8ZFXA0xMP780PwIAQ1ftVxjfnSkubOn/vFDy3c7MsB9/JB5LGFiPlurnTrVkV+JEN4ZoFp62oSox/OtWw2/oTxm9eEau4nx/G56jQwnu3fGyL6J2QDwQTgmp+dctWygHIN9Bd3C8AVENUpw15Pl1sWfoWIa/Y6IxIJAYuokvVnKBy4S6gzLI4D9JjUjLnP0m4MbqP8kP6/pMZl+EWOjM6o3zMjvC8genr98QJ8oe/S67SaM6+FnF39iCt0L3gpJMNEJnHZ7Oqk3+dl27FjrxdIg090MphlLAXMLTzfwfZ1JQP1JdAEgmFABPrsR6DfZp6Vn+wZWqJAAxlvElgMCNf8keMI/XKX6bsM9x+WreZM5xwuk0Xbmjs+R7mQ/v0TBtMMsNKvghJyvO9MnANHXOcmv3QcyBesX4Wd0aglNgAAEABJREFUW5s7prU1dXylrblzn4SbsD8t3+qZRvBVv6Wsvj2Mz3mmYyAN4fvGTRzBMvZsbeo8n+ez2b5wwsVJjF5DqWz3OFhVHOmiV/wqS8M4v1+n/7z2PfmXn341hFe8ATG/g10rt3sg1cBb27CJwI59fbsppNg+xxG/LAVyJgTj/eLTwgUTtq7Z4pq0sGJeGJNIuO6nljR33s5saS/42ufamzsWGtdc1HfpcTKe+w3Rjkic7ZvgkQAc0Fs4kB/b8UBHmmFqb+n+29srVx5I45JxFxN5OSF3tOftzWNM6DNchhrtVRbD1rjiTm5r6X6c/jTX3tLxAI3WIWD70yIq78Isaep4rF/8qydv9uv0n7sXdK/z1w9+TMUbEISwD/SoTgKB6lvz5b1Or+PgWvyuoMW4rr2l62m/nEO17zX5xdEa2DuzPKKNz56CeXftBvfLHgmSQW/89o01xsXFyYuMFzkPhyNjr0hgjofPQWP1g/a7u9t9omGNloFYw+mnouEVTKDyDYiBGhBU6RGgvhUerhu6Ax4DKIZ4uGKyPlfy4p0rVnN55DWvYoxg24xwLl8Bcig8DsM9n+653W95RG0MWhtyF2y8SPEIsHPD+LBd5koJpdfA+/fCjHlv1Zr111Mjq6MBup7tY9WyqmlkBRKofAMCRCuOm1aoWAQ8l1+KlTncLJvoHoXw2/I9MO4PPKKSQSKobxxfPyt5UbyXNe0burz3HdLL+E/6Ze+VQEK9vk2ve3XV7S+CsZtCUnwGr6RceXq77+5+n8tYnmv3YrBXaqKG6btsC5GtUsP6/QbyxLJ5y97tv/Y7tzZ3LmV9X/WL1/DKJRAEA7J95eLTmg2RgN3fGmIWWZJn2QMZmIrG4862ps7Y+tXOLBjj/w3dOJfvOWOPIn6pMW9iLhID65NxLfBcS+c394wlpYTr+P7dAQfqfexDi7mEg79nnQSS1nZTO2q7jLr2BQjYtj5/rpMxeCOXjsZXHoHKNyCCPO6SgR5BJFAhfctB+Oc0HvYfLk1yY1nMJb44BTU1DpeypnN3zlcp/wgOnGkb2X4pxWCtV5yIZHyGHcE4L93eMJnmiMzKJQLs3Kuf/iqSfuNBjXF8v+C5wD/TU/tfiUi+uv6ZFBjDLw2hApOo+gACGW++AfHlvzRQA4IqPSqgb5PGo7nzXBI2lKRrber6JQeXZ5IXXi8iH5tUE7nIK6rwMFmdTxoD4XicjyYXn4zZLD/NwrVo8MakpmK9xqZep/o5uHjOYlJ1+v0G+Rub/jT+Z6H984/tjxFkGt/+OD3nR4B9nJ9i2bQEakBQpUfZ+9b8uK3XeGQAdmHOp3HhuJYRlQwQ4FuR6ZHdkhdDeeE6z1CSe6Vl3f7tFV6MMBGT9tCl4xjfGRTh+c5OBtZFjPHcRxmol881y81rXOOXhM3yyU91/AnkBdo/eQliKuBbaglaWbIiKqqgMvYtB4/7Wps6L/Dj0d7U9bwIfH9ckXGjamvMHX7pyxtufDfKaRTvdY25arBiIM2pbTOu47tJTkOWtwExIj63I6eWlqdfkNdvisGI7+wpz5JGvJoz4gkogBFJQIx052p4YsOay6njefcTwyEih0TjkS9afyVJosf1vaOJg/rTS5o7Zw9W2po6/je1raPGdb5MY+y5vGaAj6XqZvNzIrZrtnivOMOCvcLZxrRlNi+d3jCzU+9ZXwdLoPINiMD3Gw70CDaBCu/b9rmvv8MdhVlZIRtct9fpdbtk1SlxZPvcV16DQY9XsUaQ9feqvNJkC3vuFmwQyBIvHRrYiY3x+t294lLD7K/40hgMZjkw/X87NmW6xYRzJmQ3InPgCFCw0bJF0G55Gkwu7+UYT23q6pLKb7CBGhBU6RGAvm3d0Hkzl31e8usBEYx1Xec2v/gyhRsjZqFX2QI5JXJiJMtdWgAH/XOiyT+vCs+LxsNzGmPhk+2fXXnllwwz5q/Js8eL6zpxj+C0oNpQ7SzhkRaY14W87ac2bt0oz59x6dePdtUfC5FB7YGQoefNAcZkPqXfX161nivfgFT4t9RqfWOUpF1B6Nu5SLgGnr8B1c+IY9/RHGjP7L+uiLPr3uBTj21qtjBzfOKAw1FjIF+X5LdzOUkgsznQ3h+qrV3eGI+8E41F0h4kBA8OnL/hydM5YuY0xsPHekYyMDpzj4NooHMaGapmOjG+y4sQ45vnXmfuuAVcyfmEfGaBfSHGeM7uGFvQ/61QP/Cu8g1IAL6lBv5dUK4GFNa35aol2ls6/2BgWrJXQL4fjoW3z65Tuti2lu7HWefnvUp0RL7WGIt8FzQWSD+kcXz4+zQanstcxmBpW3PHi+lJgLaJnb8xwPKB4clrkRAMftUYj0xvmL5D2qZ1dGZ4BiS0WHgkdQt8YT3bfZMY5/LGeP05A+NtHdzE1vexyEH/CoKBvDcw3+S1yKH9BrZuWt3oRs7cJpw8oarvIq18AwK8mewcfalGAoHp2w2uXMQO8P3pcQG2GyX4H+UkUxpmdfx0N64/Z0zlvNDV0fs75vskxnuF8Y87EwYf/a7vEa/r1+oU8sWz/zKxfT12N6Qx7+b/UeM71wT88x3U/2tY7G3e8a/2/Nf/iMub/pI1r/zS4Z/y49j9N99Zf/jR+xH/2z4WjGf73xT9P+L8B79L/h+P4n+l9fB3v9aUq8793zVn/N/1yQcHzD/1y/t/Hfv40/t2/t3//H79/2L/jP/+Pf+Pf4d+R18P//7/P2/8Z///27wAAAP//XYQ4zwAAAAZJREFUAwBMuij1P+NfFAAAAABJRU5ErkJggg=="
          />
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
            {t('ખેડૂત માર્ટ', 'Khedut Mart')}
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">
          {t('ગામડાનું તાજું સીધું તમારા ઘર સુધી. ખેડૂત ટૂ ગ્રાહક — કોઈ વચેટિઓ નહીં.', 'Fresh from the village, straight to your home. Farmer to customer — no middleman.')}
        </p>
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#25D366] text-white rounded-full font-label-lg hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto md:mx-0 w-fit"
        >
          💬 WhatsApp Support
        </a>
      </div>
      <div className="space-y-4">
        <h4 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed">
          {t('ઝડપી લિંક', 'Quick Links')}
        </h4>
        <div className="flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
          <Link className="hover:text-secondary transition-colors" to="/">{t('હોમ', 'Home')}</Link>
          <Link className="hover:text-secondary transition-colors" to="/products">{t('શ્રેણીઓ', 'Categories')}</Link>
          <Link className="hover:text-secondary transition-colors" to="/farmers">{t('ગામડાની વાતો', 'Village Stories')}</Link>
          <Link className="hover:text-secondary transition-colors" to="/farmer-dashboard">{t('નોંધણી', 'Farmer Registration')}</Link>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed">
          {t('સંપર્ક', 'Contact')}
        </h4>
        <div className="flex flex-col gap-3 font-body-md text-body-md text-on-surface-variant items-center md:items-start">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed">phone</span>
            +91 98765 43210
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed">mail</span>
            help@khedutmart.in
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed">location_on</span>
            Rajkot, Saurashtra, Gujarat
          </div>
        </div>
      </div>
    </footer>
  );
}
