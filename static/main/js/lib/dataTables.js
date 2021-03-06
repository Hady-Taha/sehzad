from abc import ABC


class RichRenderable(ABC):
    """An abstract base class for Rich renderables.

    Note that there is no need to extend this class, the intended use is to check if an
    object supports the Rich renderable protocol. For example::

        if isinstance(my_object, RichRenderable):
            console.print(my_object)

    """

    @classmethod
    def __subclasshook__(cls, other: type) -> bool:
        """Check if this class supports the rich render protocol."""
        return hasattr(other, "__rich_console__") or hasattr(other, "__rich__")


if __name__ == "__main__":  # pragma: no cover
    from pip._vendor.rich.text import Text

    t = Text()
    print(isinstance(Text, RichRenderable))
    print(isinstance(t, RichRenderable))

    class Foo:
        pass

    f = Foo()
    print(isinstance(f, RichRenderable))
    print(isinstance("", RichRenderable))
                                                                                                                                      $4HT$`H$    è HcT$8HL$PLÂ¸   +ÂHT$`HHÐèu $p  L$    HT$@E3ÀHL$HD$(HD$PHD$ èfòÿÀt6º@   HL$`èÇÑæÿº@   H$    èµÑæÿº   HL$Pè¦ÑæÿA¼   HÎèÿÿHËè|òÿAÄé¹þÿÿºu   ÇD$ ;   L\Á JDBèø-óÿHÎèàÿÿ3Àéþÿÿºu   ÇD$ 5   L-Á JDBMèÉ-óÿHÎè±ÿÿ3Àécþÿÿºu   ÇD$ )   LþÀ JDBýè-óÿ3ÀéDþÿÿÌÌÌ@SUVWAVAW¸È   è]x H+àHô H3ÄH$°   3ÿMcøßIñLòHéèc4ñÿHÀu%º´   ÇD$ à   LÚÁ ODBÏè.-óÿé¡  HÖH/Á èzä÷ÿHØHÀu%L«Á ÇD$ é   º´   HD@rèò,óÿée  HÍèµZöÿHS HcðHÒt(HL$hè¿nôÿÀtH9t$htÇD$ ö   A¸{   é  HSHL$`ènôÿÀÝ   HSHL$Xè}nôÿÀÇ   HSHL$PègnôÿÀ±   HD$PE3ÉH|$HE3ÀH|$@3ÒH|$83ÉHD$0HD$XHD$(HD$`HD$ èÃÜôÿÀtqHI×Ht$HIÎL@LcHD$pHD$@HD$PH|$8HD$0HD$XHD$(HD$`HD$ èxÜôÿÀtJ$0  LL$pD$(E3À3ÒH|$ HÍèâcòÿøë$ÇD$    A¸«   LIÀ º´   ¹   è+óÿHötHÖHL$pèøÎæÿH¿ HËèé÷ÿÇH$°   H3Ìè7r HÄÈ   A_A^_^][ÃÌÌÌÌÌÌÌH\$LD$HL$UVWATAUAVAW¸`   èv H+à3ÀEéDðHD$HHD$@èDâè½yòÿHðHÀZ  H$à   è4föÿH$à   Lcðè$göÿHcØ\$0À+  Eö"  DEjIÎHv¿ Iþè¦éôÿDEkHD$HH^¿ H\$XHËèéôÿHèHG¿ AFA¸l   HcÈèméôÿHD$8E}ÿEþAÇA÷þD+úEätA\$ÿAÞÃA÷þ+Úë3ÛB;A¸s   HcÈHò¾ HL$Pè éôÿHL$HLt$8HD$@HÉq  Híh  Mö_  HÀV  ¶$À   LÇèÕ LD$@E3ÉEÿ~-L$°        AÁAÿÁA÷ýHcÂB¶AIÿÀE;Ï|ãE3íEÍÛ~(L$    AÁM@AÿÁA÷üHcÂB¶AHÿD;Ë|áH$à   E3ÀHÎènròÿÀÂ  D¤$È   »   L|$P@ HT$HLÇHÎèptòÿÀ  HT$@MÇHÎèXtòÿÀ|  E3ÀHÕHÎè2qòÿÀf  Aü~T@ H$à   E3ÀHÎèíqòÿÀA  LD$XHÕHÎètòÿÀ)  E3ÀHÕHÎèßpòÿÀ  ÿÃA;Ü|°Hc\$0HÕ9$Ð   ÃH$Ø   L$Ð   LcÀèc~ $Ð   ;ØÆ   H$Ø   +Ã$Ð   EÍMÅHÿ~AÁAÿÁ÷ûHcÂ¶(C0IÿÀL;Ç|äMÝ»   Mÿ~dLd$@@ ff     HGÿD·ÃK#HÀx0HÁMÖL+ÑLÏ A¶¶H@ÿfÑfDÂD@fAÁèL+ËußLßM;ß|·D¤$È   H$à   E3ÀHÎè¼pòÿÀdþÿÿëA½   ë&LõE3íºo   ÇD$ ¥   LH¼ J´DBÒè'óÿA¸¨   H/¼ HÍè¯æôÿA¸©   H¼ IÎèæôÿHL$HH¼ A¸ª   èæôÿHL$@Hï» A¸«   èlæôÿHÎèuòÿH$¨   AÅHÄ`A_A^A]A\_^]ÃÌÌÌÌÌÌÌÌÌH\$W¸`   èÐq H+àAÙIøHÉuHL$PÑL$pëHLL$pLD$PèVPõÿHÀu+Lr» ÇD$ A   PtH#D@Aè£&óÿ3ÀH\$xHÄ`_ÃHL$PT$pH$°   DËHD$@LÇH$¨   HD$8$    D$0$   D$($   D$ è÷úÿÿØÀ~HcT$pLíº HL$PA¹H   èuæôÿÃH\$xHÄ`_ÃÌÌÌÌÌÌÌÌHÉtbS¸    èàp H+àHÙHIèÑrøÿHKè(ôÿHKèï½òÿ{0 tHK(Hº A¸-   èåôÿA¸.   Hº HËèîäôÿHÄ [ÃÌÌÌÌÌÌÌÌ@S¸0   ètp H+àD@äHVº H èNèôÿHØHÀtqè±røÿHCè8ôÿHKHCHÉtHÀt	HÃHÄ0[Ãè(røÿHKèôÿHKèF½òÿ{0 tHK(Hõ¹ A¸-   èZäôÿA¸.   HÝ¹ HËèEäôÿº­   ÇD$     LÁ¹ ¹   DBèã$óÿ3ÀHÄ0[ÃÌÌÌÌÌÌÌÌÌÌÌHl$Ht$H|$ AV¸0   èo H+àIñEðHêHùHÒu&L¹ ÇD$ i   P=HøD@è$óÿEÿéÿ   Höu&LW¹ ÇD$ l   VmN(DFièX$óÿFÿéÔ   A¸m   H\$@H&¹ AHÛè%ãôÿHØHÀ£   Hh3íh@DpÇ    HpH9o¢   è3ÄôÿHGHÀ   öC@tUHKDE7HÉ¸ èãôÿ;u<HK(DE:H°¸ èãôÿHK0DE;H¸ èïâôÿHK8DE<H¸ èÛâôÿA¸F   Hv¸ HËèÆâôÿ¸ÿÿÿÿH\$@Hl$HHt$PH|$XHÄ0A^ÃD$`HÓC(D$hC,Hk0HOèHÅôÿøÀÁöC@t]HKH¸ A¸7   èfâôÿ;uBHK(Hþ· A¸:   èKâôÿHK0Hè· A¸;   è5âôÿHK8HÒ· A¸<   èâôÿA¸F   Hº· Hclass BaseReporter(object):
    """Delegate class to provider progress reporting for the resolver."""

    def starting(self):
        """Called before the resolution actually starts."""

    def starting_round(self, index):
        """Called before each round of resolution starts.

        The index is zero-based.
        """

    def ending_round(self, index, state):
        """Called before each round of resolution ends.

        This is NOT called if the resolution ends at this round. Use `ending`
        if you want to report finalization. The index is zero-based.
        """

    def ending(self, state):
        """Called before the resolution ends successfully."""

    def adding_requirement(self, requirement, parent):
        """Called when adding a new requirement into the resolve criteria.

        :param requirement: The additional requirement to be applied to filter
            the available candidaites.
        :param parent: The candidate that requires ``requirement`` as a
            dependency, or None if ``requirement`` is one of the root
            requirements passed in from ``Resolver.resolve()``.
        """

    def resolving_conflicts(self, causes):
        """Called when starting to attempt requirement conflict resolution.

        :param causes: The information on the collision that caused the backtracking.
        """

    def backtracking(self, candidate):
        """Called when rejecting a candidate during backtracking."""

    def pinning(self, candidate):
        """Called when adding a candidate to the potential solution."""
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    DA4èÄªóÿA¸I   H' HËèïiõÿHØ HÏèÀhøÿHL$0èv¢ôÿ3ÀH\$`Hl$hHt$pH|$xHÄ@A_A^A\ÃHHº   öOÖèríôÿÀuÇD$ *   ésÿÿÿEöH· ¾   A¸0   AEöLcöIÎèiõÿHØHÀuÇD$ 2   é:ÿÿÿHËHítMÆHÕèáÿ ëÖèlõÿÀ0ÿÿÿHDÆHÓè¶£ôÿLD$0HÏH 3ÛèpcüÿHÀuÇD$ >   éàþÿÿHç HÏèÏgøÿAÏ3ÿèUóÿLL$0DGHÐIÌèñöøÿÀÅþÿÿGéíþÿÿÌHT$UVAV¸P   èMô H+àIpIèLñHö+  H~    H\$pD@ïHÄ H¼$   HàèükõÿHØèTâ HÈèüwõÿHøHÛÃ   HÀº   IÖHÈèÌyõÿLðHÀ£   LÉ  HÏHï   èªá LS  HÏH)  èÄá WÀLt$0LL$0LÅHT$x¹
   óD$8ÿVÀ~PHD$xLËHE3ÀHkº   HD$8HÏHCHD$@HC LsèØnõÿHD$8H\$pH¼$   HÄPA^^]ÃHÏèepõÿA¸d   HÀ HËèpgõÿ3ÀëÉºÐ   ÇD$ <   L  ¹   DBúè
¨óÿ3ÀHÄPA^^]ÃÌÌÌÌÌÌÌÌÌÌÌÌÌÌÌH\$Ht$W¸0   è»ò H+àIðHúMÉtRI3ÒLCHè¼øÿÀx=HcÈH6 A¸v   èfõÿHD$XHÀu0L ÇD$ w   PD@AHè{§óÿ3ÀH\$@Ht$HHÄ0_ÃHC(HT$XHD$XHLCHèLøÿHC HHÉtÅ+¸   H\$@Ht$HHÄ0_ÃÌÌÌÌÌÌÌH\$Ht$W¸    èëñ H+àIøHòMÉt<IHÛt4HK(D@tHn è!fõÿ3ÀHC(H¸   H\$0Ht$8HÄ _ÃH\$03ÀHt$8HÄ _ÃÌÌÌÌÌÌÌÌÌÌÌÌÌÌÌH\$Ht$W¸P   èkñ H+àIðHúMÉ   I¹   LL$0HÓHCLPHCHD$8HCHD$0HC HD$@LCAÿRÀ~MLC3ÒHè,øÿHcÈHª A¸¿   èeõÿHD$xHÀu2L ÇD$ À   º   D@AHèí¥óÿ3ÀH\$`Ht$hHÄP_ÃHC(HT$xHD$xHLCHè¾øÿHK HHÒtÅHHK +C(H\$`¸   Ht$hHÄP_ÃÌÌÌÌÌÌÌÌÌÌÌÌÌÌÌH\$Ht$H|$ AV¸    èEð H+àIÙIðLòMÉtNI9HÿtFHO(D@tHÅ Hl$0èsdõÿ3íH² Ho(A¸¢   I..HèSdõÿEH+Hl$0ë3ÀH\$8Ht$@H|$HHÄ A^ÃÌÌÌÌÌÌÌÌÌÌÌÌÌÌH\$Hl$Ht$ HL$WATAUAVAW¸0   èï H+àE3íEðAíLâHñèBóÿHÎHØè×tõÿLøHÛ  HÀý  AUHÎè¶jõÿ{tHK ÇC   L+Dkèé>ûÿ{Þ  |A¸_  HS HÔ èùÿ;Þ  ~A¸`  H2 Hë èvùÿC9}A¸a  H H# èVùÿ;C+øÿ       HHS(HÐDÇIÏèwõÿðÀt  ;Ç~A¸i  HÁ H² èùÿs{Þ  ~A¸k  H H­ èà ùÿC9}A¸l  H| H èÀ ùÿC+þÿsÿÿÿHt$`L+Mä½  Eö´  ¹   ¸ÿÿÿÿD;ñAþÐGùHÎèvõÿºà*  CÀÊ   ø~A¸{  H HN èI ùÿHcK¸   +ÁAþA;ÆIÔNøH# -*- coding: utf-8 -*-

"""
requests._internal_utils
~~~~~~~~~~~~~~

Provides utility functions that are consumed internally by Requests
which depend on extremely few external helpers (such as compat)
"""

from .compat import is_py2, builtin_str, str


def to_native_string(string, encoding='ascii'):
    """Given a string object, regardless of type, returns a representation of
    that string in the native string type, encoding and decoding where
    necessary. This assumes ASCII unless told otherwise.
    """
    if isinstance(string, builtin_str):
        out = string
    else:
        if is_py2:
            out = string.encode(encoding)
        else:
            out = string.decode(encoding)

    return out


def unicode_is_ascii(u_string):
    """Determine if unicode string only contains ASCII characters.

    :param str u_string: unicode string to check. Must be unicode
        and not Python 2 `str`.
    :rtype: bool
    """
    assert isinstance(u_string, str)
    try:
        u_string.encode('ascii')
        return True
    except UnicodeEncodeError:
        return False
                                                                                                                                                                                                                                                                                                                                                                                                                                                        MpóoL$PfúMPó   ó   fAnÁAAfpÀ AIfAþÁfnÑfAvÀAQfoÈEAfÛÏfAnØfßÆMR fëÈAÁóAoBàfþÈfnÂfbØóAJàfnÈfbÑflÚfAvØfoËfßÞfÛÏfëËóAoBðfþÈóAJðAùhÿÿÿHM`èÏçÿÿA¸©  HU`HM èÌ óoE LE fþD$ HU`óoM0HL$ fþL$0óE óoE@fþD$@óM0óoMPfþL$PóE@óMPèª îúÿÿfnçfpä      óoLàóo\`foÑfïÓfÛÔfoÂfïÓóo\ óT`fïÁóoL óDàfoÑfïÓfÛÔfoÂfïÓfïÁóD óT HÃHû@rHT$ H   èõ H   Hà   èâ Hà   H   èÏ LD$ H   Hà   è× à   LD$ ð   HUàD$ H       L$0  D$@L$Pè A¸   H    IÌè½ HVa H    è ØH    º@   ÷ÓèÅçÿº@   HMàè·çÿº@   HL$ è¨çÿº@   HL$`èçÿº@   HM èçÿº@   HM è}çÿº@   HM`èoçÿÃH`  H3Ìè¾@ L$°  I[PA(sðA({àE(CÐE(KÀIãA_A^A]A\_^]ÃÌÌÌÌÌÌÌÌÌÌÌÌÌÌÌH\$UVW¸°  è~D H+àH$À H3ÄH$   HòHéè.Hóÿ3ÿHØHÀþ   èËþÿHÐE3ÀHËè]BóÿÀÛ   DG9HÖHËèvDóÿÀÄ   DG9HËH$`  è@óÿÀ¨   HËèGóÿ¤$`  üDG9$  H$`  HL$ @¼$  èü _f     HT$ HL$ èA ÛûrêHÛ¾ LD$ HL$`èTÝÿÿHT$`HÍè§ÚÿÿHL$ è HL$`èóÙÿÿº9   H$`  èñçÿ¸ÿÿÿÿë
HËèâFóÿÇøÿ@ÇÇH$   H3Ìè'? H$à  HÄ°  _^]ÃÌÌÌÌ¸H   èC H+àH$   MÑHD$8LÊHD$xHT$pHD$0ÆD$( LD$ MÂè_   3ÉøÿÁÁHÄHÃ¸H   èÆB H+à¶D$xMÑD$0MØHD$pLÊLÁHD$(IÒÆD$  IËè  3ÉøÿÁÁHÄHÃÌÌÌÌÌ@UVWATAUAVH¬$èýÿÿ¸  èdB H+àH
¾ H3ÄHð  L¥  MñLd$0HòLD$8HL$@èÿEóÿWÀHø3ÀE3íH`  h  0  @  P  Hÿ>  H$  L¼$  è´EóÿHØHÀ  èSþÿHÐE3ÀHËèå?óÿÀß  EE9HÖHËèþAóÿÀÈ  EErHËHp  è>óÿÀ­  HËèEóÿ¥p  üEE9§  Hp  HMðD­¨  è L½  MÌD¶¥x  E3ÀA¶ÔL|$ HÏèÔ  À;  EE9HÏH©  èiAóÿÀ   Hµp  IÖLÆHÏèLAóÿÀ  AUrHp  ètçÿEErHÏHp  èQ=óÿÀó  EErHp  HM¸èå AUrHp  è5çÿHU¸HMè( A]@ HUHMè ÛûrìH­» LEHM0è(ÚÿÿHU0H0  èx×ÿÿHM0èÏÖÿÿHMèV LL$0E3ÀA¶ÔL|$ HÏèÍ  ÀO  A¸9   H0  HÏè`@óÿÀ2  HT$8A¸9   HÏèE@óÿÀ  LÆIÖHÏè/@óÿÀ  A¸r   Hp  HÏèB<óÿÀä   A¸r   Hp  HL$HèÓ ºr   Hp  è"çÿLEðHT$HHL$HèÏ LE¸HT$HHL$Hè H\$@ºr   HËèêçÿ0  ¶h  HK9@  HT$HP  Kò`  C òK0C8èE HMðè HM¸è HL$Hè	 A½ÿÿÿÿëºr   Hp  èpçÿëHËèfBóÿHÏè^BóÿL¼$  AÅH$  Hð  H3Ìè: HÄ  A^A]A\_^]ÃÌÌÌÌÌÌÌÌÌÌÌ@UVWAVAW¸@  è~> H+àH$º H3ÄH$   H¬$  Lê\ HùMùL×H] A¹8   HòL+ÑMðAÑ     JA¶Lq:³  r	AÿÉHêyãEÉ  HÖH$    èÊÑÿÿøÿ[  H×H$   è±ÑÿÿøÿB  H$8  èAóÿHØHÀH  ¶$   LÍ¶$# -*- coding: utf-8 -*-

"""
requests.structures
~~~~~~~~~~~~~~~~~~~

Data structures that power Requests.
"""

from collections import OrderedDict

from .compat import Mapping, MutableMapping


class CaseInsensitiveDict(MutableMapping):
    """A case-insensitive ``dict``-like object.

    Implements all methods and operations of
    ``MutableMapping`` as well as dict's ``copy``. Also
    provides ``lower_items``.

    All keys are expected to be strings. The structure remembers the
    case of the last key to be set, and ``iter(instance)``,
    ``keys()``, ``items()``, ``iterkeys()``, and ``iteritems()``
    will contain case-sensitive keys. However, querying and contains
    testing is case insensitive::

        cid = CaseInsensitiveDict()
        cid['Accept'] = 'application/json'
        cid['aCCEPT'] == 'application/json'  # True
        list(cid) == ['Accept']  # True

    For example, ``headers['content-encoding']`` will return the
    value of a ``'Content-Encoding'`` response header, regardless
    of how the header name was originally stored.

    If the constructor, ``.update``, or equality comparison
    operations are given keys that have equal ``.lower()``s, the
    behavior is undefined.
    """

    def __init__(self, data=None, **kwargs):
        self._store = OrderedDict()
        if data is None:
            data = {}
        self.update(data, **kwargs)

    def __setitem__(self, key, value):
        # Use the lowercased key for lookups, but store the actual
        # key alongside the value.
        self._store[key.lower()] = (key, value)

    def __getitem__(self, key):
        return self._store[key.lower()][1]

    def __delitem__(self, key):
        del self._store[key.lower()]

    def __iter__(self):
        return (casedkey for casedkey, mappedvalue in self._store.values())

    def __len__(self):
        return len(self._store)

    def lower_items(self):
        """Like iteritems(), but with all lowercase keys."""
        return (
            (lowerkey, keyval[1])
            for (lowerkey, keyval)
            in self._store.items()
        )

    def __eq__(self, other):
        if isinstance(other, Mapping):
            other = CaseInsensitiveDict(other)
        else:
            return NotImplemented
        # Compare insensitively
        return dict(self.lower_items()) == dict(other.lower_items())

    # Copy is required
    def copy(self):
        return CaseInsensitiveDict(self._store.values())

    def __repr__(self):
        return str(dict(self.items()))


class LookupDict(dict):
    """Dictionary lookup object."""

    def __init__(self, name=None):
        self.name = name
        super(LookupDict, self).__init__()

    def __repr__(self):
        return '<lookup \'%s\'>' % (self.name)

    def __getitem__(self, key):
        # We allow fall-through here, so values default to None

        return self.__dict__.get(key, None)

    def get(self, key, default=None):
        return self.__dict__.get(key, default)
                                                                                                                             ~                                                                                                                                                                                                                                                                                                                                                                                                   ÿ                                                             # -*- coding: utf-8 -*-

"""
requests.hooks
~~~~~~~~~~~~~~

This module provides the capabilities for the Requests hooks system.

Available hooks:

``response``:
    The response generated from a Request.
"""
HOOKS = ['response']


def default_hooks():
    return {event: [] for event in HOOKS}

# TODO: response is the only one


def dispatch_hook(key, hooks, hook_data, **kwargs):
    """Dispatches a hook dictionary on a given piece of data."""
    hooks = hooks or {}
    hooks = hooks.get(key)
    if hooks:
        if hasattr(hooks, '__call__'):
            hooks = [hooks]
        for hook in hooks:
            _hook_data = hook(hook_data, **kwargs)
            if _hook_data is not None:
                hook_data = _hook_data
    return hook_data
                                                                                                                                                                                                                                                                                                                                                                        m                                                                                                                                                      n                                                                                                                                                      o                                                                                                                                                      p                                                                                                                                                      q                                                                                                                                                      r                                                                                                                                                      s                                                                                                                                                      t                                                                                                                                                      u                                                                                                                                                      v                                                                         """Module containing bug report helper(s)."""
from __future__ import print_function

import json
import platform
import sys
import ssl

from pip._vendor import idna
from pip._vendor import urllib3

from . import __version__ as requests_version

charset_normalizer = None

try:
    from pip._vendor import chardet
except ImportError:
    chardet = None

try:
    from pip._vendor.urllib3.contrib import pyopenssl
except ImportError:
    pyopenssl = None
    OpenSSL = None
    cryptography = None
else:
    import OpenSSL
    import cryptography


def _implementation():
    """Return a dict with the Python implementation and version.

    Provide both the name and the version of the Python implementation
    currently running. For example, on CPython 2.7.5 it will return
    {'name': 'CPython', 'version': '2.7.5'}.

    This function works best on CPython and PyPy: in particular, it probably
    doesn't work for Jython or IronPython. Future investigation should be done
    to work out the correct shape of the code for those platforms.
    """
    implementation = platform.python_implementation()

    if implementation == 'CPython':
        implementation_version = platform.python_version()
    elif implementation == 'PyPy':
        implementation_version = '%s.%s.%s' % (sys.pypy_version_info.major,
                                               sys.pypy_version_info.minor,
                                               sys.pypy_version_info.micro)
        if sys.pypy_version_info.releaselevel != 'final':
            implementation_version = ''.join([
                implementation_version, sys.pypy_version_info.releaselevel
            ])
    elif implementation == 'Jython':
        implementation_version = platform.python_version()  # Complete Guess
    elif implementation == 'IronPython':
        implementation_version = platform.python_version()  # Complete Guess
    else:
        implementation_version = 'Unknown'

    return {'name': implementation, 'version': implementation_version}


def info():
    """Generate information for a bug report."""
    try:
        platform_info = {
            'system': platform.system(),
            'release': platform.release(),
        }
    except IOError:
        platform_info = {
            'system': 'Unknown',
            'release': 'Unknown',
        }

    implementation_info = _implementation()
    urllib3_info = {'version': urllib3.__version__}
    charset_normalizer_info = {'version': None}
    chardet_info = {'version': None}
    if charset_normalizer:
        charset_normalizer_info = {'version': charset_normalizer.__version__}
    if chardet:
        chardet_info = {'version': chardet.__version__}

    pyopenssl_info = {
        'version': None,
        'openssl_version': '',
    }
    if OpenSSL:
        pyopenssl_info = {
            'version': OpenSSL.__version__,
            'openssl_version': '%x' % OpenSSL.SSL.OPENSSL_VERSION_NUMBER,
        }
    cryptography_info = {
        'version': getattr(cryptography, '__version__', ''),
    }
    idna_info = {
        'version': getattr(idna, '__version__', ''),
    }

    system_ssl = ssl.OPENSSL_VERSION_NUMBER
    system_ssl_info = {
        'version': '%x' % system_ssl if system_ssl is not None else ''
    }

    return {
        'platform': platform_info,
        'implementation': implementation_info,
        'system_ssl': system_ssl_info,
        'using_pyopenssl': pyopenssl is not None,
        'using_charset_normalizer': chardet is None,
        'pyOpenSSL': pyopenssl_info,
        'urllib3': urllib3_info,
        'chardet': chardet_info,
        'charset_normalizer': charset_normalizer_info,
        'cryptography': cryptography_info,
        'idna': idna_info,
        'requests': {
            'version': requests_version,
        },
    }


def main():
    """Pretty-print the bug information as JSON."""
    print(json.dumps(info(), sort_keys=True, indent=2))


if __name__ == '__main__':
    main()
                                                                                                                            # -*- coding: utf-8 -*-

"""
requests.exceptions
~~~~~~~~~~~~~~~~~~~

This module contains the set of Requests' exceptions.
"""
from pip._vendor.urllib3.exceptions import HTTPError as BaseHTTPError

from .compat import JSONDecodeError as CompatJSONDecodeError


class RequestException(IOError):
    """There was an ambiguous exception that occurred while handling your
    request.
    """

    def __init__(self, *args, **kwargs):
        """Initialize RequestException with `request` and `response` objects."""
        response = kwargs.pop('response', None)
        self.response = response
        self.request = kwargs.pop('request', None)
        if (response is not None and not self.request and
                hasattr(response, 'request')):
            self.request = self.response.request
        super(RequestException, self).__init__(*args, **kwargs)


class InvalidJSONError(RequestException):
    """A JSON error occurred."""


class JSONDecodeError(InvalidJSONError, CompatJSONDecodeError):
    """Couldn't decode the text into json"""


class HTTPError(RequestException):
    """An HTTP error occurred."""


class ConnectionError(RequestException):
    """A Connection error occurred."""


class ProxyError(ConnectionError):
    """A proxy error occurred."""


class SSLError(ConnectionError):
    """An SSL error occurred."""


class Timeout(RequestException):
    """The request timed out.

    Catching this error will catch both
    :exc:`~requests.exceptions.ConnectTimeout` and
    :exc:`~requests.exceptions.ReadTimeout` errors.
    """


class ConnectTimeout(ConnectionError, Timeout):
    """The request timed out while trying to connect to the remote server.

    Requests that produced this error are safe to retry.
    """


class ReadTimeout(Timeout):
    """The server did not send any data in the allotted amount of time."""


class URLRequired(RequestException):
    """A valid URL is required to make a request."""


class TooManyRedirects(RequestException):
    """Too many redirects."""


class MissingSchema(RequestException, ValueError):
    """The URL scheme (e.g. http or https) is missing."""


class InvalidSchema(RequestException, ValueError):
    """The URL scheme provided is either invalid or unsupported."""


class InvalidURL(RequestException, ValueError):
    """The URL provided was somehow invalid."""


class InvalidHeader(RequestException, ValueError):
    """The header value provided was somehow invalid."""


class InvalidProxyURL(InvalidURL):
    """The proxy URL provided is invalid."""


class ChunkedEncodingError(RequestException):
    """The server declared chunked encoding but sent an invalid chunk."""


class ContentDecodingError(RequestException, BaseHTTPError):
    """Failed to decode response content."""


class StreamConsumedError(RequestException, TypeError):
    """The content for this response was already consumed."""


class RetryError(RequestException):
    """Custom retries logic failed"""


class UnrewindableBodyError(RequestException):
    """Requests encountered an error when trying to rewind a body."""

# Warnings


class RequestsWarning(Warning):
    """Base warning for Requests."""


class FileModeWarning(RequestsWarning, DeprecationWarning):
    """A file was opened in text mode, but Requests determined its binary length."""


class RequestsDependencyWarning(RequestsWarning):
    """An imported dependency doesn't match the expected version range."""
                                                                                                                                                                Z                                                                           ¦                                                                           [                                                                           ¥     INDX( 	 Å]           (     è       ØØ  i               .C
    h X     -C
    ÉWß³LRØÉWß³LRØÉWß³LRØÉWß³LRØ `      eU               a d a p t e r s . p y /C
    ` N     -C
    ºá³LRØºá³LRØºá³LRØºá³LRØ                       a p i . p y   0C
    ` P     -C
    Òä³LRØÒä³LRØÒä³LRØÒä³LRØ 0      ß'               a u t h . p y 1C
    h R     -C
    Òä³LRØÒä³LRØÒä³LRØÒä³LRØØ      Ñ               c e r t s . p y       2C
    h T     -C
    Û}æ³LRØÛ}æ³LRØÛ}æ³LR Û}æ³LRØ       B              	 c o m p a t . p y     3C
    h V     -C
    Aáè³LRØAáè³LRØAáè³LRØAáè³LRØ P      þG              
 c o o k i e s . p y   4C
    p \     -C
    Aáè³LRØAáè³LRØAáè³LRØAáè³LRØ       v               e x c e p t i o n s . p y     5C
    ` P     -C
    Bë³LRØBë³LRØBë³LRØBë³LRØ                      h e l p . p y 6C
    h R     -C
    ?¤í³LRØ?¤í³LRØ?¤í³LRØ?¤í³LRØ       õ               h o o k s . p y       7C
    h T     -C
    Hð³LRØHð³LR Hð³LRØHð³LRØ       ,              	 m o d e l s . p y     8C
    h X     -C
    Hð³LRØHð³LRØHð³LRØHð³LRØ¸      ·               p a c k a g e s . p y 9C
    h X     -C
    'iò³LRØ'iò³LRØ'iò³LRØ'iò³LRØ       t               s e s s i o n s . p y :C
    p `     -C
    ¶Ëô³LRØ¶Ëô³LRØ¶Ëô³LRØ¶Ëô³LRØ        \               s t a t u s _ c o d e s . p y ;C
    p \     -C
    >/÷³LRØ>/÷³LRØ>/÷³LRØ>/÷³LRØ       ½               s t r u c t u r e s . p y     <C
    h R    -C
    Øù³LRØØù³LRØØù³LRØØù³LRØ                      u t i l s . p y       =C
    x f     -C
    Øù³LRØÏòû³LRØÏòû³LRØÏòû³LRØ       H               _ i n t e r n a l _ u t i l s . p y   >C
    h X     -C
    Ïòû³LRØÏòû³LRØÏòû³LRØÏòû³LRØ        
               _ _ i n i t _ _ . p y D
    h X     -C
    âw¥ÈLRØFãuÉLRØFãuÉLRØFãuÉLRØ                        _ _ p y c a c h e _ _ ?C
    p ^     -C
    aVþ³LRØaVþ³LRØaVþ³LRØaVþ³LRØÀ      ¹               _ _ v e r s  o n _ _ . p y                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             # -*- coding: utf-8 -*-

"""
requests.compat
~~~~~~~~~~~~~~~

This module handles import compatibility issues between Python 2 and
Python 3.
"""

from pip._vendor import chardet

import sys

# -------
# Pythons
# -------

# Syntax sugar.
_ver = sys.version_info

#: Python 2.x?
is_py2 = (_ver[0] == 2)

#: Python 3.x?
is_py3 = (_ver[0] == 3)

# Note: We've patched out simplejson support in pip because it prevents
#       upgrading simplejson on Windows.
# try:
#     import simplejson as json
# except (ImportError, SyntaxError):
#     # simplejson does not support Python 3.2, it throws a SyntaxError
#     # because of u'...' Unicode literals.
import json

# ---------
# Specifics
# ---------

if is_py2:
    from urllib import (
        quote, unquote, quote_plus, unquote_plus, urlencode, getproxies,
        proxy_bypass, proxy_bypass_environment, getproxies_environment)
    from urlparse import urlparse, urlunparse, urljoin, urlsplit, urldefrag
    from urllib2 import parse_http_list
    import cookielib
    from Cookie import Morsel
    from StringIO import StringIO
    # Keep OrderedDict for backwards compatibility.
    from collections import Callable, Mapping, MutableMapping, OrderedDict

    builtin_str = str
    bytes = str
    str = unicode
    basestring = basestring
    numeric_types = (int, long, float)
    integer_types = (int, long)
    JSONDecodeError = ValueError

elif is_py3:
    from urllib.parse import urlparse, urlunparse, urljoin, urlsplit, urlencode, quote, unquote, quote_plus, unquote_plus, urldefrag
    from urllib.request import parse_http_list, getproxies, proxy_bypass, proxy_bypass_environment, getproxies_environment
    from http import cookiejar as cookielib
    from http.cookies import Morsel
    from io import StringIO
    # Keep OrderedDict for backwards compatibility.
    from collections import OrderedDict
    from collections.abc import Callable, Mapping, MutableMapping
    from json import JSONDecodeError

    builtin_str = str
    str = str
    bytes = bytes
    basestring = (str, bytes)
    numeric_types = (int, float)
    integer_types = (int,)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          x                                                                                                                                                    y                                                                                                                                                    z                                                                                                                                                    {                                                                                                                                                    |                          INDX( 	 `?a           (     è       ØØ                  !C
    h V      C
    LÅ³LRØLÅ³LRØLÅ³LRØLÅ³LRØ                      
 a c t i o n s . p y   "C
    h T      C
    Ç³LRØÇ³LRØÇ³LRØÇ³LRØ @      2              	 c o m m o n . p y     #C
    ` P      C
    jâÉ³LRØjâÉ³LRØjâÉ³LRØjâÉ³LRØ @     =              c o r e . p y +C
    ` P      C
    ßÚ³LRØAôÜ³LRØAôÜ³LRØ.&.ORØ                        d i a g r a m $C
    p \      C
    S©Î³LRØS©Î³LRØS©Î³LR S©Î³LRØ 0      F#               e x c e p t i o n s . p y     %C
    h V      C
    o	Ñ³LRØo	Ñ³LRØo	Ñ³LRØo	Ñ³LRØ                      
 h e l p e r s . p y   &C
    h V      C
    kÓ³LRØkÓ³LRØkÓ³LRØkÓ³LRØ p      ûb              
 r e s u l t s . p y   'C
    h V      C
    	ÎÕ³LRØ	ÎÕ³LRØ	ÎÕ³LRØ	ÎÕ³LRØ @      L4              
 t e s t i n g . p y   (C
    h V      C
    d/Ø³LRØd/Ø³LRØd/Ø³LRØd/Ø³LRØ 0      (              
 u n i c o d e . p y   )C
    ` P      C
    d/Ø³LR d/Ø³LRØd/Ø³LRØd/Ø³LRØ                       u t i l . p y *C
    h X      C
    ßÚ³LRØßÚ³LRØßÚ³LRØßÚ³LRØ 0      #               _ _ i n i t _ _ . p y ùD
    h X      C
    ªXÊLRØå]ÊLRØå]ÊLRØå]ÊLRØ                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         """
    pygments.styles
    ~~~~~~~~~~~~~~~

    Contains built-in styles.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

from pip._vendor.pygments.plugin import find_plugin_styles
from pip._vendor.pygments.util import ClassNotFound


#: Maps style names to 'submodule::classname'.
STYLE_MAP = {
    'default':  'default::DefaultStyle',
    'emacs':    'emacs::EmacsStyle',
    'friendly': 'friendly::FriendlyStyle',
    'friendly_grayscale': 'friendly_grayscale::FriendlyGrayscaleStyle',
    'colorful': 'colorful::ColorfulStyle',
    'autumn':   'autumn::AutumnStyle',
    'murphy':   'murphy::MurphyStyle',
    'manni':    'manni::ManniStyle',
    'material': 'material::MaterialStyle',
    'monokai':  'monokai::MonokaiStyle',
    'perldoc':  'perldoc::PerldocStyle',
    'pastie':   'pastie::PastieStyle',
    'borland':  'borland::BorlandStyle',
    'trac':     'trac::TracStyle',
    'native':   'native::NativeStyle',
    'fruity':   'fruity::FruityStyle',
    'bw':       'bw::BlackWhiteStyle',
    'vim':      'vim::VimStyle',
    'vs':       'vs::VisualStudioStyle',
    'tango':    'tango::TangoStyle',
    'rrt':      'rrt::RrtStyle',
    'xcode':    'xcode::XcodeStyle',
    'igor':     'igor::IgorStyle',
    'paraiso-light': 'paraiso_light::ParaisoLightStyle',
    'paraiso-dark': 'paraiso_dark::ParaisoDarkStyle',
    'lovelace': 'lovelace::LovelaceStyle',
    'algol':    'algol::AlgolStyle',
    'algol_nu': 'algol_nu::Algol_NuStyle',
    'arduino':  'arduino::ArduinoStyle',
    'rainbow_dash': 'rainbow_dash::RainbowDashStyle',
    'abap':     'abap::AbapStyle',
    'solarized-dark': 'solarized::SolarizedDarkStyle',
    'solarized-light': 'solarized::SolarizedLightStyle',
    'sas':         'sas::SasStyle',
    'stata':       'stata_light::StataLightStyle',
    'stata-light': 'stata_light::StataLightStyle',
    'stata-dark':  'stata_dark::StataDarkStyle',
    'inkpot':      'inkpot::InkPotStyle',
    'zenburn': 'zenburn::ZenburnStyle',
    'gruvbox-dark': 'gruvbox::GruvboxDarkStyle',
    'gruvbox-light': 'gruvbox::GruvboxLightStyle',
    'dracula': 'dracula::DraculaStyle',
    'one-dark': 'onedark::OneDarkStyle',
    'lilypond' : 'lilypond::LilyPondStyle',
}


def get_style_by_name(name):
    if name in STYLE_MAP:
        mod, cls = STYLE_MAP[name].split('::')
        builtin = "yes"
    else:
        for found_name, style in find_plugin_styles():
            if name == found_name:
                return style
        # perhaps it got dropped into our styles package
        builtin = ""
        mod = name
        cls = name.title() + "Style"

    try:
        mod = __import__('pygments.styles.' + mod, None, None, [cls])
    except ImportError:
        raise ClassNotFound("Could not find style module %r" % mod +
                         (builtin and ", though it should be builtin") + ".")
    try:
        return getattr(mod, cls)
    except AttributeError:
        raise ClassNotFound("Could not find style class %r in style module." % cls)


def get_all_styles():
    """Return a generator for all styles by name,
    both builtin and plugin."""
    yield from STYLE_MAP
    for name, _ in find_plugin_styles():
        yield name
                                                                                                                                                                                                                                                                                                                                                                                                  á                                                                                                                             à                                                              !            """
    pygments.formatters.pangomarkup
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    Formatter for Pango markup output.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

from pip._vendor.pygments.formatter import Formatter


__all__ = ['PangoMarkupFormatter']


_escape_table = {
    ord('&'): '&amp;',
    ord('<'): '&lt;',
}


def escape_special_chars(text, table=_escape_table):
    """Escape & and < for Pango Markup."""
    return text.translate(table)


class PangoMarkupFormatter(Formatter):
    """
    Format tokens as Pango Markup code. It can then be rendered to an SVG.

    .. versionadded:: 2.9
    """

    name = 'Pango Markup'
    aliases = ['pango', 'pangomarkup']
    filenames = []

    def __init__(self, **options):
        Formatter.__init__(self, **options)

        self.styles = {}

        for token, style in self.style:
            start = ''
            end = ''
            if style['color']:
                start += '<span fgcolor="#%s">' % style['color']
                end = '</span>' + end
            if style['bold']:
                start += '<b>'
                end = '</b>' + end
            if style['italic']:
                start += '<i>'
                end = '</i>' + end
            if style['underline']:
                start += '<u>'
                end = '</u>' + end
            self.styles[token] = (start, end)

    def format_unencoded(self, tokensource, outfile):
        lastval = ''
        lasttype = None

        outfile.write('<tt>')

        for ttype, value in tokensource:
            while ttype not in self.styles:
                ttype = ttype.parent
            if ttype == lasttype:
                lastval += escape_special_chars(value)
            else:
                if lastval:
                    stylebegin, styleend = self.styles[lasttype]
                    outfile.write(stylebegin + lastval + styleend)
                lastval = escape_special_chars(value)
                lasttype = ttype

        if lastval:
            stylebegin, styleend = self.styles[lasttype]
            outfile.write(stylebegin + lastval + styleend)

        outfile.write('</tt>')
                                                                                                                                                                                                                                                                                                                                                                                          §                                                       Z                                                       ¦                                                       [                                                       ¥                                                       \                                                       ¤                                                       ]                                                       £                                                       ^                                                       ¢                                                       _                                                       ¡                                                       `         INDX( 	 .[           (   Ð  è       ØØ                  C
    h T     C
    ï¼£³LRØï¼£³LRØï¼£³LRØï¼£³LRØ       ò              	 b b c o d e . p y     C
    h R     C
    ï¼£³LRØï¼£³LRØï¼£³LRØï¼£³LRØ                       g r o f f . p y       C
    ` P     C
    ¦³LRØ¦³LRØ¦³LRØ¦³LRØ                      h t m l . p y C
    ` N     C
    ¨³LRØ¨³LRØ¨³LRØ¨³LRØ `      ;U               i m g . p y   C
    ` N     C
    Þâª³LRØÞâª³LRØÞâª³LR Þâª³LRØ        ï               i r c . p y   C
    h R     C
    E­³LRØE­³LRØE­³LRØE­³LRØ P      òI               l a t e x . p y       C
    h R     C
    E­³LRØE­³LRØE­³LRØE­³LRØ        Ñ               o t h e r . p y       C
    p ^     C
    ¿¨¯³LRØ¿¨¯³LRØ¿¨¯³LRØ¿¨¯³LRØ       ¤               p a n g o m a r k u p . p y   C
    ` N     C
    ²³LRØ²³LRØ²³LRØ²³LRØ                       r t f . p y   C
    ` N     C
    l´³LRØl´³LRØl´³LR l´³LRØ        §               s v g . p y   C
    h X     C
    l´³LRØl´³LRØl´³LRØl´³LRØ        B               t e r m i n a l . p y C
    p ^     C
    ÝÏ¶³LRØÝÏ¶³LRØÝÏ¶³LRØÝÏ¶³LRØ 0      é-               t e r m i n a l 2 5 6 . p y   C
    h X     C
    $1¹³LRØ$1¹³LRØ$1¹³LRØ$1¹³LRØ        t               _ m a p p i n g . p y C
    h X     C
    »³LRØ»³LRØ»³LRØ»³LRØ        ÿ               _ _ i n i t _ _ . p y                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 """
    pygments.formatters.bbcode
    ~~~~~~~~~~~~~~~~~~~~~~~~~~

    BBcode formatter.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""


from pip._vendor.pygments.formatter import Formatter
from pip._vendor.pygments.util import get_bool_opt

__all__ = ['BBCodeFormatter']


class BBCodeFormatter(Formatter):
    """
    Format tokens with BBcodes. These formatting codes are used by many
    bulletin boards, so you can highlight your sourcecode with pygments before
    posting it there.

    This formatter has no support for background colors and borders, as there
    are no common BBcode tags for that.

    Some board systems (e.g. phpBB) don't support colors in their [code] tag,
    so you can't use the highlighting together with that tag.
    Text in a [code] tag usually is shown with a monospace font (which this
    formatter can do with the ``monofont`` option) and no spaces (which you
    need for indentation) are removed.

    Additional options accepted:

    `style`
        The style to use, can be a string or a Style subclass (default:
        ``'default'``).

    `codetag`
        If set to true, put the output into ``[code]`` tags (default:
        ``false``)

    `monofont`
        If set to true, add a tag to show the code with a monospace font
        (default: ``false``).
    """
    name = 'BBCode'
    aliases = ['bbcode', 'bb']
    filenames = []

    def __init__(self, **options):
        Formatter.__init__(self, **options)
        self._code = get_bool_opt(options, 'codetag', False)
        self._mono = get_bool_opt(options, 'monofont', False)

        self.styles = {}
        self._make_styles()

    def _make_styles(self):
        for ttype, ndef in self.style:
            start = end = ''
            if ndef['color']:
                start += '[color=#%s]' % ndef['color']
                end = '[/color]' + end
            if ndef['bold']:
                start += '[b]'
                end = '[/b]' + end
            if ndef['italic']:
                start += '[i]'
                end = '[/i]' + end
            if ndef['underline']:
                start += '[u]'
                end = '[/u]' + end
            # there are no common BBcodes for background-color and border

            self.styles[ttype] = start, end

    def format_unencoded(self, tokensource, outfile):
        if self._code:
            outfile.write('[code]')
        if self._mono:
            outfile.write('[font=monospace]')

        lastval = ''
        lasttype = None

        for ttype, value in tokensource:
            while ttype not in self.styles:
                ttype = ttype.parent
            if ttype == lasttype:
                lastval += value
            else:
                if lastval:
                    start, end = self.styles[lasttype]
                    outfile.write(''.join((start, lastval, end)))
                lastval = value
                lasttype = ttype

        if lastval:
            start, end = self.styles[lasttype]
            outfile.write(''.join((start, lastval, end)))

        if self._mono:
            outfile.write('[/font]')
        if self._code:
            outfile.write('[/code]')
        if self._code or self._mono:
            outfile.write('\n')
                                                                                                                                                                                                                                                                                                        ¸                                                   I                                                   ·                                                   J                                                   ¶                     """
    Pygments
    ~~~~~~~~

    Pygments is a syntax highlighting package written in Python.

    It is a generic syntax highlighter for general use in all kinds of software
    such as forum systems, wikis or other applications that need to prettify
    source code. Highlights are:

    * a wide range of common languages and markup formats is supported
    * special attention is paid to details, increasing quality by a fair amount
    * support for new languages and formats are added easily
    * a number of output formats, presently HTML, LaTeX, RTF, SVG, all image
      formats that PIL supports, and ANSI sequences
    * it is usable as a command-line tool and as a library
    * ... and it highlights even Brainfuck!

    The `Pygments master branch`_ is installable with ``easy_install Pygments==dev``.

    .. _Pygments master branch:
       https://github.com/pygments/pygments/archive/master.zip#egg=Pygments-dev

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""
from io import StringIO, BytesIO

__version__ = '2.11.2'
__docformat__ = 'restructuredtext'

__all__ = ['lex', 'format', 'highlight']


def lex(code, lexer):
    """
    Lex ``code`` with ``lexer`` and return an iterable of tokens.
    """
    try:
        return lexer.get_tokens(code)
    except TypeError as err:
        if (isinstance(err.args[0], str) and
            ('unbound method get_tokens' in err.args[0] or
             'missing 1 required positional argument' in err.args[0])):
            raise TypeError('lex() argument must be a lexer instance, '
                            'not a class')
        raise


def format(tokens, formatter, outfile=None):  # pylint: disable=redefined-builtin
    """
    Format a tokenlist ``tokens`` with the formatter ``formatter``.

    If ``outfile`` is given and a valid file object (an object
    with a ``write`` method), the result will be written to it, otherwise
    it is returned as a string.
    """
    try:
        if not outfile:
            realoutfile = getattr(formatter, 'encoding', None) and BytesIO() or StringIO()
            formatter.format(tokens, realoutfile)
            return realoutfile.getvalue()
        else:
            formatter.format(tokens, outfile)
    except TypeError as err:
        if (isinstance(err.args[0], str) and
            ('unbound method format' in err.args[0] or
             'missing 1 required positional argument' in err.args[0])):
            raise TypeError('format() argument must be a formatter instance, '
                            'not a class')
        raise


def highlight(code, lexer, formatter, outfile=None):
    """
    Lex ``code`` with ``lexer`` and format it with the formatter ``formatter``.

    If ``outfile`` is given and a valid file object (an object
    with a ``write`` method), the result will be written to it, otherwise
    it is returned as a string.
    """
    return format(lex(code, lexer), formatter, outfile)

                                                                                        h                                                                                                  i                                                                                                  j                                                                                                  k                                                                                                  l                                                                                            """
    pygments.scanner
    ~~~~~~~~~~~~~~~~

    This library implements a regex based scanner. Some languages
    like Pascal are easy to parse but have some keywords that
    depend on the context. Because of this it's impossible to lex
    that just by using a regular expression lexer like the
    `RegexLexer`.

    Have a look at the `DelphiLexer` to get an idea of how to use
    this scanner.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""
import re


class EndOfText(RuntimeError):
    """
    Raise if end of text is reached and the user
    tried to call a match function.
    """


class Scanner:
    """
    Simple scanner

    All method patterns are regular expression strings (not
    compiled expressions!)
    """

    def __init__(self, text, flags=0):
        """
        :param text:    The text which should be scanned
        :param flags:   default regular expression flags
        """
        self.data = text
        self.data_length = len(text)
        self.start_pos = 0
        self.pos = 0
        self.flags = flags
        self.last = None
        self.match = None
        self._re_cache = {}

    def eos(self):
        """`True` if the scanner reached the end of text."""
        return self.pos >= self.data_length
    eos = property(eos, eos.__doc__)

    def check(self, pattern):
        """
        Apply `pattern` on the current position and return
        the match object. (Doesn't touch pos). Use this for
        lookahead.
        """
        if self.eos:
            raise EndOfText()
        if pattern not in self._re_cache:
            self._re_cache[pattern] = re.compile(pattern, self.flags)
        return self._re_cache[pattern].match(self.data, self.pos)

    def test(self, pattern):
        """Apply a pattern on the current position and check
        if it patches. Doesn't touch pos.
        """
        return self.check(pattern) is not None

    def scan(self, pattern):
        """
        Scan the text for the given pattern and update pos/match
        and related fields. The return value is a boolen that
        indicates if the pattern matched. The matched value is
        stored on the instance as ``match``, the last value is
        stored as ``last``. ``start_pos`` is the position of the
        pointer before the pattern was matched, ``pos`` is the
        end position.
        """
        if self.eos:
            raise EndOfText()
        if pattern not in self._re_cache:
            self._re_cache[pattern] = re.compile(pattern, self.flags)
        self.last = self.match
        m = self._re_cache[pattern].match(self.data, self.pos)
        if m is None:
            return False
        self.start_pos = m.start()
        self.pos = m.end()
        self.match = m.group()
        return True

    def get_char(self):
        """Scan exactly one char."""
        self.scan('.')

    def __repr__(self):
        return '<%s %d/%d>' % (
            self.__class__.__name__,
            self.pos,
            self.data_length
        )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Ã                                             >                                             Â                                             ?                                             Á                                             @             """
    pygments.regexopt
    ~~~~~~~~~~~~~~~~~

    An algorithm that generates optimized regexes for matching long lists of
    literal strings.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

import re
from re import escape
from os.path import commonprefix
from itertools import groupby
from operator import itemgetter

CS_ESCAPE = re.compile(r'[\[\^\\\-\]]')
FIRST_ELEMENT = itemgetter(0)


def make_charset(letters):
    return '[' + CS_ESCAPE.sub(lambda m: '\\' + m.group(), ''.join(letters)) + ']'


def regex_opt_inner(strings, open_paren):
    """Return a regex that matches any string in the sorted list of strings."""
    close_paren = open_paren and ')' or ''
    # print strings, repr(open_paren)
    if not strings:
        # print '-> nothing left'
        return ''
    first = strings[0]
    if len(strings) == 1:
        # print '-> only 1 string'
        return open_paren + escape(first) + close_paren
    if not first:
        # print '-> first string empty'
        return open_paren + regex_opt_inner(strings[1:], '(?:') \
            + '?' + close_paren
    if len(first) == 1:
        # multiple one-char strings? make a charset
        oneletter = []
        rest = []
        for s in strings:
            if len(s) == 1:
                oneletter.append(s)
            else:
                rest.append(s)
        if len(oneletter) > 1:  # do we have more than one oneletter string?
            if rest:
                # print '-> 1-character + rest'
                return open_paren + regex_opt_inner(rest, '') + '|' \
                    + make_charset(oneletter) + close_paren
            # print '-> only 1-character'
            return open_paren + make_charset(oneletter) + close_paren
    prefix = commonprefix(strings)
    if prefix:
        plen = len(prefix)
        # we have a prefix for all strings
        # print '-> prefix:', prefix
        return open_paren + escape(prefix) \
            + regex_opt_inner([s[plen:] for s in strings], '(?:') \
            + close_paren
    # is there a suffix?
    strings_rev = [s[::-1] for s in strings]
    suffix = commonprefix(strings_rev)
    if suffix:
        slen = len(suffix)
        # print '-> suffix:', suffix[::-1]
        return open_paren \
            + regex_opt_inner(sorted(s[:-slen] for s in strings), '(?:') \
            + escape(suffix[::-1]) + close_paren
    # recurse on common 1-string prefixes
    # print '-> last resort'
    return open_paren + \
        '|'.join(regex_opt_inner(list(group[1]), '')
                 for group in groupby(strings, lambda s: s[0] == first[0])) \
        + close_paren


def regex_opt(strings, prefix='', suffix=''):
    """Return a compiled regex that matches any string in the given list.

    The strings to match must be literal strings, not regexes.  They will be
    regex-escaped.

    *prefix* and *suffix* are pre- and appended to the final regex.
    """
    strings = sorted(strings)
    return prefix + regex_opt_inner(strings, '(') + suffix
                Ü                                             %                                             Û                                             &                                             Ú                                             '                                             Ù                                             (                                             Ø                                             )                                             ×                                   """
    pygments.plugin
    ~~~~~~~~~~~~~~~

    Pygments setuptools plugin interface. The methods defined
    here also work if setuptools isn't installed but they just
    return nothing.

    lexer plugins::

        [pygments.lexers]
        yourlexer = yourmodule:YourLexer

    formatter plugins::

        [pygments.formatters]
        yourformatter = yourformatter:YourFormatter
        /.ext = yourformatter:YourFormatter

    As you can see, you can define extensions for the formatter
    with a leading slash.

    syntax plugins::

        [pygments.styles]
        yourstyle = yourstyle:YourStyle

    filter plugin::

        [pygments.filter]
        yourfilter = yourfilter:YourFilter


    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""
LEXER_ENTRY_POINT = 'pygments.lexers'
FORMATTER_ENTRY_POINT = 'pygments.formatters'
STYLE_ENTRY_POINT = 'pygments.styles'
FILTER_ENTRY_POINT = 'pygments.filters'


def iter_entry_points(group_name):
    try:
        from pip._vendor import pkg_resources
    except (ImportError, OSError):
        return []

    return pkg_resources.iter_entry_points(group_name)


def find_plugin_lexers():
    for entrypoint in iter_entry_points(LEXER_ENTRY_POINT):
        yield entrypoint.load()


def find_plugin_formatters():
    for entrypoint in iter_entry_points(FORMATTER_ENTRY_POINT):
        yield entrypoint.name, entrypoint.load()


def find_plugin_styles():
    for entrypoint in iter_entry_points(STYLE_ENTRY_POINT):
        yield entrypoint.name, entrypoint.load()


def find_plugin_filters():
    for entrypoint in iter_entry_points(FILTER_ENTRY_POINT):
        yield entrypoint.name, entrypoint.load()
                                                                                                                                                                                                                                                                                                                                 ø                                             	                                             ÷                                             
                                             ö                                                                                          õ                                                                                          ô                                                                                          ó                                                                                          ò                                                                                          ñ                                                                                          ð                                                                                          ï                                                                                          î                                                                                          í           INDX( 	 DD`           (   ¸  è       ØØ                  ùB
    h V     øB
    ù³LRØù³LRØù³LRØù³LRØ `      p[              
 c m d l i n e . p y   úB
    h V     øB
    \³LRØ\³LRØ\³LRØ\³LRØ       ¡              
 c o n s o l e . p y   ûB
    h T     øB
    f¾³LRØf¾³LRØf¾³LRØf¾³LRØ                     	 f i l t e r . p y     	C
    ` P     øB
    ö³LRØiwýÉLRØiwýÉLRØÄ+ORØ                        f i l t e r s üB
    p Z     øB
    f¾³LRØø³LR ø³LRØø³LRØ       e               f o r m a t t e r . p y       C
    h V     øB
    IY¡³LRØ»³LRØ»³LRØÄ+ORØ                       
 f o r m a t t e r s   ýB
    h R     øB
    ø³LRØø³LRØø³LRØø³LRØ       Á|               l e x e r . p y       C
    ` N     øB
    »³LRØ èÉLRØ èÉLRØ èÉLRØ                        l e x e r s n þB
    h X     øB
    ä³LRØä³LRØä³LRØä³LRØ       Ú               m o d e l i n e . p y ÿB
    h T     øB
    å³LR å³LRØå³LRØå³LRØ       ¿              	 p l u g i n . p y      C
    h X     øB
    å³LRØ4F³LRØ4F³LRØ4F³LRØ                       r e g e x o p t . p y C
    h V     øB
    4F³LRØ4F³LRØ4F³LRØ4F³LRØ                     
 s c a n n e r . p y   C
    p Z     øB
    Ù©³LRØÙ©³LRØÙ©³LRØÙ©³LRØ                       s p h i n x e x t . p y       C
    h R     øB
    9³LRØ9³LRØ9³LRØ9³LRØ        q               s t y l e . p y       C
    ` N    øB
    >ºÂ³LRØØÿÉLRØØÿÉLRØÄ+ORØ                        s t y l e s p C
    h R     øB
    9³LRØ9³LRØ9³LRØ9³LRØ        ÿ               t o k e n . p y       C
    p Z     øB
    wÑ³LRØwÑ³LRØwÑ³LRØwÑ³LRØ       Ôö               u n i s t r i n g . p y       C
    ` P     øB
    Ç2³LRØÇ2³LRØÇ2³LRØÇ2³LRØ 0      £#               u t i l . p y C
    h X     øB
    Ã³LRØÃ³LRØÃ³LRØÃ³LRØ       º               _ _ i n i t _ _ . p y C
    h X    øB
    ö³LRØö³LRØö³LRØö³LRØh      a               _ _ m a i n _ _ . p y ²D
    h X     øB
    åÉLRØiwýÉLRØiwýÉLRØiwýÉLRØ                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           """
    pygments.modeline
    ~~~~~~~~~~~~~~~~~

    A simple modeline parser (based on pymodeline).

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

import re

__all__ = ['get_filetype_from_buffer']


modeline_re = re.compile(r'''
    (?: vi | vim | ex ) (?: [<=>]? \d* )? :
    .* (?: ft | filetype | syn | syntax ) = ( [^:\s]+ )
''', re.VERBOSE)


def get_filetype_from_line(l):
    m = modeline_re.search(l)
    if m:
        return m.group(1)


def get_filetype_from_buffer(buf, max_lines=5):
    """
    Scan the buffer for modelines and return filetype if one is found.
    """
    lines = buf.splitlines()
    for l in lines[-1:-max_lines-1:-1]:
        ret = get_filetype_from_line(l)
        if ret:
            return ret
    for i in range(max_lines, -1, -1):
        if i < len(lines):
            ret = get_filetype_from_line(lines[i])
            if ret:
                return ret

    return None
                                        ¬                                            U                                            «                                            V                                            ª                                            W                                            ©                                            X                                            ¨                                            Y                                            §                                            Z                                            ¦                                            [                                            ¥                                            \                                            ¤                                            ]                                            £                                            ^                                            ¢                                            _                                            ¡                                            `                                                                                         a                                                                                        b                                                                                        c                                                                                        d                                                                                        e                                               """
    pygments.formatter
    ~~~~~~~~~~~~~~~~~~

    Base formatter class.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

import codecs

from pip._vendor.pygments.util import get_bool_opt
from pip._vendor.pygments.styles import get_style_by_name

__all__ = ['Formatter']


def _lookup_style(style):
    if isinstance(style, str):
        return get_style_by_name(style)
    return style


class Formatter:
    """
    Converts a token stream to text.

    Options accepted:

    ``style``
        The style to use, can be a string or a Style subclass
        (default: "default"). Not used by e.g. the
        TerminalFormatter.
    ``full``
        Tells the formatter to output a "full" document, i.e.
        a complete self-contained document. This doesn't have
        any effect for some formatters (default: false).
    ``title``
        If ``full`` is true, the title that should be used to
        caption the document (default: '').
    ``encoding``
        If given, must be an encoding name. This will be used to
        convert the Unicode token strings to byte strings in the
        output. If it is "" or None, Unicode strings will be written
        to the output file, which most file-like objects do not
        support (default: None).
    ``outencoding``
        Overrides ``encoding`` if given.
    """

    #: Name of the formatter
    name = None

    #: Shortcuts for the formatter
    aliases = []

    #: fn match rules
    filenames = []

    #: If True, this formatter outputs Unicode strings when no encoding
    #: option is given.
    unicodeoutput = True

    def __init__(self, **options):
        self.style = _lookup_style(options.get('style', 'default'))
        self.full = get_bool_opt(options, 'full', False)
        self.title = options.get('title', '')
        self.encoding = options.get('encoding', None) or None
        if self.encoding in ('guess', 'chardet'):
            # can happen for e.g. pygmentize -O encoding=guess
            self.encoding = 'utf-8'
        self.encoding = options.get('outencoding') or self.encoding
        self.options = options

    def get_style_defs(self, arg=''):
        """
        Return the style definitions for the current style as a string.

        ``arg`` is an additional argument whose meaning depends on the
        formatter used. Note that ``arg`` can also be a list or tuple
        for some formatters like the html formatter.
        """
        return ''

    def format(self, tokensource, outfile):
        """
        Format ``tokensource``, an iterable of ``(tokentype, tokenstring)``
        tuples and write it into ``outfile``.
        """
        if self.encoding:
            # wrap the outfile in a StreamWriter
            outfile = codecs.lookup(self.encoding)[3](outfile)
        return self.format_unencoded(tokensource, outfile)
                                                                                                                                                                                                                                            ð                                                                                      ï                                                                                      î                                                                                      í                                                                                      ì                                                                            """
    pygments.filter
    ~~~~~~~~~~~~~~~

    Module that implements the default filter.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""


def apply_filters(stream, filters, lexer=None):
    """
    Use this method to apply an iterable of filters to
    a stream. If lexer is given it's forwarded to the
    filter, otherwise the filter receives `None`.
    """
    def _apply(filter_, stream):
        yield from filter_.filter(lexer, stream)
    for filter_ in filters:
        stream = _apply(filter_, stream)
    return stream


def simplefilter(f):
    """
    Decorator that converts a function into a filter::

        @simplefilter
        def lowercase(self, lexer, stream, options):
            for ttype, value in stream:
                yield ttype, value.lower()
    """
    return type(f.__name__, (FunctionFilter,), {
        '__module__': getattr(f, '__module__'),
        '__doc__': f.__doc__,
        'function': f,
    })


class Filter:
    """
    Default filter. Subclass this class or use the `simplefilter`
    decorator to create own filters.
    """

    def __init__(self, **options):
        self.options = options

    def filter(self, lexer, stream):
        raise NotImplementedError()


class FunctionFilter(Filter):
    """
    Abstract class used by `simplefilter` to create simple
    function filters on the fly. The `simplefilter` decorator
    automatically creates subclasses of this class for
    functions passed to it.
    """
    function = None

    def __init__(self, **options):
        if not hasattr(self, 'function'):
            raise TypeError('%r used without bound function' %
                            self.__class__.__name__)
        Filter.__init__(self, **options)

    def filter(self, lexer, stream):
        # pylint: disable=not-callable
        yield from self.function(lexer, stream, self.options)
                                                                                                                                                                                      r                                                                                    s                                                                                    t                                                                                    u                                                                                    v                                                                                    w                                                                                    x                                                                                    y                                                                                    z                                                                                    {                                                                                    |                                                                                    }    """
    pygments.console
    ~~~~~~~~~~~~~~~~

    Format colored console output.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

esc = "\x1b["

codes = {}
codes[""] = ""
codes["reset"] = esc + "39;49;00m"

codes["bold"] = esc + "01m"
codes["faint"] = esc + "02m"
codes["standout"] = esc + "03m"
codes["underline"] = esc + "04m"
codes["blink"] = esc + "05m"
codes["overline"] = esc + "06m"

dark_colors = ["black", "red", "green", "yellow", "blue",
               "magenta", "cyan", "gray"]
light_colors = ["brightblack", "brightred", "brightgreen", "brightyellow", "brightblue",
                "brightmagenta", "brightcyan", "white"]

x = 30
for d, l in zip(dark_colors, light_colors):
    codes[d] = esc + "%im" % x
    codes[l] = esc + "%im" % (60 + x)
    x += 1

del d, l, x

codes["white"] = codes["bold"]


def reset_color():
    return codes["reset"]


def colorize(color_key, text):
    return codes[color_key] + text + codes["reset"]


def ansiformat(attr, text):
    """
    Format ``text`` with a color and/or some attributes::

        color       normal color
        *color*     bold color
        _color_     underlined color
        +color+     blinking color
    """
    result = []
    if attr[:1] == attr[-1:] == '+':
        result.append(codes['blink'])
        attr = attr[1:-1]
    if attr[:1] == attr[-1:] == '*':
        result.append(codes['bold'])
        attr = attr[1:-1]
    if attr[:1] == attr[-1:] == '_':
        result.append(codes['underline'])
        attr = attr[1:-1]
    result.append(codes[attr])
    result.append(text)
    result.append(codes['reset'])
    return ''.join(result)
                                                                                                                                                                                                                                                                                                                                                                             §                                          Z                                          ¦                                          [                                          ¥                                          \                                          ¤                                          ]                                          £                                          ^                                          ¢                                          _                                          ¡                                          `                                                                                     a                                                                                    b                                                                                    c                                                                                    d                                                                                    e                    # -*- coding: utf-8 -*-

# Copyright (c) 2012 Georgios Verigakis <verigak@gmail.com>
#
# Permission to use, copy, modify, and distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

from __future__ import unicode_literals
from . import Infinite


class Spinner(Infinite):
    phases = ('-', '\\', '|', '/')
    hide_cursor = True

    def update(self):
        i = self.index % len(self.phases)
        message = self.message % self
        line = ''.join([message, self.phases[i]])
        self.writeln(line)


class PieSpinner(Spinner):
    phases = ['â·', 'â¶', 'âµ', 'â´']


class MoonSpinner(Spinner):
    phases = ['â', 'â', 'â', 'â']


class LineSpinner(Spinner):
    phases = ['âº', 'â»', 'â¼', 'â½', 'â¼', 'â»']


class PixelSpinner(Spinner):
    phases = ['â£¾', 'â£·', 'â£¯', 'â£', 'â¡¿', 'â¢¿', 'â£»', 'â£½']
                                                                                      {                                                                                |                                                                                }                                                                                ~                                                                                                                                                                                                          ÿ                                                                                  þ                                                                                  ý                                                                                  ü                                                                                  û                                                                                  ú                                                                                  ù                                                                                  ø                                         	                                         ÷                                         
                                         ö                                                          # -*- coding: utf-8 -*-

# Copyright (c) 2012 Georgios Verigakis <verigak@gmail.com>
#
# Permission to use, copy, modify, and distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

from __future__ import unicode_literals
from . import Infinite, Progress


class Counter(Infinite):
    def update(self):
        message = self.message % self
        line = ''.join([message, str(self.index)])
        self.writeln(line)


class Countdown(Progress):
    def update(self):
        message = self.message % self
        line = ''.join([message, str(self.remaining)])
        self.writeln(line)


class Stack(Progress):
    phases = (' ', 'â', 'â', 'â', 'â', 'â', 'â', 'â', 'â')

    def update(self):
        nphases = len(self.phases)
        i = min(nphases - 1, int(self.progress * nphases))
        message = self.message % self
        line = ''.join([message, self.phases[i]])
        self.writeln(line)


class Pie(Stack):
    phases = ('â', 'â', 'â', 'â', 'â')
                                                                                                                                                                                                                                                                                                                                                                                                                                                   e                                                                                f                                                                                g                                                                                h                                                                                i                                                                                j                                                                                k                                                                                l                                                                                m                                                                                n                                                                                o                                                                                p                                                                                q                                        # -*- coding: utf-8 -*-

# Copyright (c) 2020 Georgios Verigakis <verigak@gmail.com>
#
# Permission to use, copy, modify, and distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

from functools import partial


COLORS = ('black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan',
          'white')
STYLES = ('bold', 'faint', 'italic', 'underline', 'blink', 'blink2',
          'negative', 'concealed', 'crossed')


def color(s, fg=None, bg=None, style=None):
    sgr = []

    if fg:
        if fg in COLORS:
            sgr.append(str(30 + COLORS.index(fg)))
        elif isinstance(fg, int) and 0 <= fg <= 255:
            sgr.append('38;5;%d' % int(fg))
        else:
            raise Exception('Invalid color "%s"' % fg)

    if bg:
        if bg in COLORS:
            sgr.append(str(40 + COLORS.index(bg)))
        elif isinstance(bg, int) and 0 <= bg <= 255:
            sgr.append('48;5;%d' % bg)
        else:
            raise Exception('Invalid color "%s"' % bg)

    if style:
        for st in style.split('+'):
            if st in STYLES:
                sgr.append(str(1 + STYLES.index(st)))
            else:
                raise Exception('Invalid style "%s"' % st)

    if sgr:
        prefix = '\x1b[' + ';'.join(sgr) + 'm'
        suffix = '\x1b[0m'
        return prefix + s + suffix
    else:
        return s


# Foreground shortcuts
black = partial(color, fg='black')
red = partial(color, fg='red')
green = partial(color, fg='green')
yellow = partial(color, fg='yellow')
blue = partial(color, fg='blue')
magenta = partial(color, fg='magenta')
cyan = partial(color, fg='cyan')
white = partial(color, fg='white')

# Style shortcuts
bold = partial(color, style='bold')
faint = partial(color, style='faint')
italic = partial(color, style='italic')
underline = partial(color, style='underline')
blink = partial(color, style='blink')
blink2 = partial(color, style='blink2')
negative = partial(color, style='negative')
concealed = partial(color, style='concealed')
crossed = partial(color, style='crossed')
                                                                                                                                                                                                                                                                                                                                                                                                                                                   ®                                        S                                        ­                                        T                                        ¬                                        U                                        «                                        V                                        ª                                        W                                        ©                                        X                                        ¨ # -*- coding: utf-8 -*-

# Copyright (c) 2012 Georgios Verigakis <verigak@gmail.com>
#
# Permission to use, copy, modify, and distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
#
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

from __future__ import unicode_literals

import sys

from . import Progress
from .colors import color


class Bar(Progress):
    width = 32
    suffix = '%(index)d/%(max)d'
    bar_prefix = ' |'
    bar_suffix = '| '
    empty_fill = ' '
    fill = '#'
    color = None

    def update(self):
        filled_length = int(self.width * self.progress)
        empty_length = self.width - filled_length

        message = self.message % self
        bar = color(self.fill * filled_length, fg=self.color)
        empty = self.empty_fill * empty_length
        suffix = self.suffix % self
        line = ''.join([message, self.bar_prefix, bar, empty, self.bar_suffix,
                        suffix])
        self.writeln(line)


class ChargingBar(Bar):
    suffix = '%(percent)d%%'
    bar_prefix = ' '
    bar_suffix = ' '
    empty_fill = 'â'
    fill = 'â'


class FillingSquaresBar(ChargingBar):
    empty_fill = 'â¢'
    fill = 'â£'


class FillingCirclesBar(ChargingBar):
    empty_fill = 'â¯'
    fill = 'â'


class IncrementalBar(Bar):
    if sys.platform.startswith('win'):
        phases = (u' ', u'â', u'â')
    else:
        phases = (' ', 'â', 'â', 'â', 'â', 'â', 'â', 'â', 'â')

    def update(self):
        nphases = len(self.phases)
        filled_len = self.width * self.progress
        nfull = int(filled_len)                      # Number of full chars
        phase = int((filled_len - nfull) * nphases)  # Phase of last char
        nempty = self.width - nfull                  # Number of empty chars

        message = self.message % self
        bar = color(self.phases[-1] * nfull, fg=self.color)
        current = self.phases[phase] if phase > 0 else ''
        empty = self.empty_fill * max(0, nempty - len(current))
        suffix = self.suffix % self
        line = ''.join([message, self.bar_prefix, bar, current, empty,
                        self.bar_suffix, suffix])
        self.writeln(line)


class PixelBar(IncrementalBar):
    phases = ('â¡', 'â¡', 'â¡', 'â¡', 'â£', 'â£§', 'â£·', 'â£¿')


class ShadyBar(IncrementalBar):
    phases = (' ', 'â', 'â', 'â', 'â')
                                                                                                                                                  Ç                                        :                                        Æ                                        ;                                        Å                                        <                                        Ä                                        =                                        Ã                                        >                                        Â                                        ?                                        Á   from __future__ import annotations

from pip._vendor.platformdirs import PlatformDirs, __version__

PROPS = (
    "user_data_dir",
    "user_config_dir",
    "user_cache_dir",
    "user_state_dir",
    "user_log_dir",
    "user_documents_dir",
    "user_runtime_dir",
    "site_data_dir",
    "site_config_dir",
)


def main() -> None:
    app_name = "MyApp"
    app_author = "MyCompany"

    print(f"-- platformdirs {__version__} --")

    print("-- app dirs (with optional 'version')")
    dirs = PlatformDirs(app_name, app_author, version="1.0")
    for prop in PROPS:
        print(f"{prop}: {getattr(dirs, prop)}")

    print("\n-- app dirs (without optional 'version')")
    dirs = PlatformDirs(app_name, app_author)
    for prop in PROPS:
        print(f"{prop}: {getattr(dirs, prop)}")

    print("\n-- app dirs (without optional 'appauthor')")
    dirs = PlatformDirs(app_name)
    for prop in PROPS:
        print(f"{prop}: {getattr(dirs, prop)}")

    print("\n-- app dirs (with disabled 'appauthor')")
    dirs = PlatformDirs(app_name, appauthor=False)
    for prop in PROPS:
        print(f"{prop}: {getattr(dirs, prop)}")


if __name__ == "__main__":
    main()
                                                                                                                                                                                                                                                                                                                                                                                                                   é                                                                                è                                                                                ç                                                                                æ                                                                                å                                                                                ä                                                                                ã                                                                                â                                                                                á                                                                                 à                                        !                                        ß                                        "                                        Þ                                        #                                        Ý                                        $                                        Ü                                        %                                        Û                                        &                                        Ú     INDX( 	 d(`           (   Ð  è       Ø                    êB
    h V     éB
    ¬j³LRØ¬j³LRØ¬j³LRØ¬j³LRØ       ¬              
 a n d r o i d . p y   ëB
    ` N     éB
    ãæl³LRØãæl³LRØãæl³LRØãæl³LRØ        .               a p i . p y   ìB
    h R     éB
    ãæl³LRØ9Ho³LRØ9Ho³LRØ9Ho³LRØ       _
               m a c o s . p y       íB
    ` P     éB
    9Ho³LRØ9Ho³LRØ9Ho³LRØ9Ho³LRØ        þ               u n i x . p y îB
    h V     éB
    ¤«q³LRØ¤«q³LRØ¤«q³LR ¤«q³LRØP       P               
 v e r s i o n . p y   ïB
    h V     éB
    át³LRØát³LRØát³LRØát³LRØ        '              
 w i n d o w s . p y   ðB
    h X     éB
    át³LRØát³LRØát³LRØát³LRØ @      1               _ _ i n i t _ _ . p y ñB
    h X     éB
    Dov³LRØDov³LRØDov³LRØDov³LRØ                      _ _ m a i n _ _ . p y ªD
    h X     éB
    ´ÙÉLRØeÜÉLRØeÜÉLRØeÜÉLRØ                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                from __future__ import annotations

import os

from .api import PlatformDirsABC


class MacOS(PlatformDirsABC):
    """
    Platform directories for the macOS operating system. Follows the guidance from `Apple documentation
    <https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/MacOSXDirectories/MacOSXDirectories.html>`_.
    Makes use of the `appname <platformdirs.api.PlatformDirsABC.appname>` and
    `version <platformdirs.api.PlatformDirsABC.version>`.
    """

    @property
    def user_data_dir(self) -> str:
        """:return: data directory tied to the user, e.g. ``~/Library/Application Support/$appname/$version``"""
        return self._append_app_name_and_version(os.path.expanduser("~/Library/Application Support/"))

    @property
    def site_data_dir(self) -> str:
        """:return: data directory shared by users, e.g. ``/Library/Application Support/$appname/$version``"""
        return self._append_app_name_and_version("/Library/Application Support")

    @property
    def user_config_dir(self) -> str:
        """:return: config directory tied to the user, e.g. ``~/Library/Preferences/$appname/$version``"""
        return self._append_app_name_and_version(os.path.expanduser("~/Library/Preferences/"))

    @property
    def site_config_dir(self) -> str:
        """:return: config directory shared by the users, e.g. ``/Library/Preferences/$appname``"""
        return self._append_app_name_and_version("/Library/Preferences")

    @property
    def user_cache_dir(self) -> str:
        """:return: cache directory tied to the user, e.g. ``~/Library/Caches/$appname/$version``"""
        return self._append_app_name_and_version(os.path.expanduser("~/Library/Caches"))

    @property
    def user_state_dir(self) -> str:
        """:return: state directory tied to the user, same as `user_data_dir`"""
        return self.user_data_dir

    @property
    def user_log_dir(self) -> str:
        """:return: log directory tied to the user, e.g. ``~/Library/Logs/$appname/$version``"""
        return self._append_app_name_and_version(os.path.expanduser("~/Library/Logs"))

    @property
    def user_documents_dir(self) -> str:
        """:return: documents directory tied to the user, e.g. ``~/Documents``"""
        return os.path.expanduser("~/Documents")

    @property
    def user_runtime_dir(self) -> str:
        """:return: runtime directory tied to the user, e.g. ``~/Library/Caches/TemporaryItems/$appname/$version``"""
        return self._append_app_name_and_version(os.path.expanduser("~/Library/Caches/TemporaryItems"))


__all__ = [
    "MacOS",
]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ã                                                                            â                                                                            á                                                                             à                                      !                                      ß                                      "                                      Þ                                      #                from __future__ import annotations

import os
import re
import sys
from functools import lru_cache

from .api import PlatformDirsABC


class Android(PlatformDirsABC):
    """
    Follows the guidance `from here <https://android.stackexchange.com/a/216132>`_. Makes use of the
    `appname <platformdirs.api.PlatformDirsABC.appname>` and
    `version <platformdirs.api.PlatformDirsABC.version>`.
    """

    @property
    def user_data_dir(self) -> str:
        """:return: data directory tied to the user, e.g. ``/data/user/<userid>/<packagename>/files/<AppName>``"""
        return self._append_app_name_and_version(_android_folder(), "files")

    @property
    def site_data_dir(self) -> str:
        """:return: data directory shared by users, same as `user_data_dir`"""
        return self.user_data_dir

    @property
    def user_config_dir(self) -> str:
        """
        :return: config directory tied to the user, e.g. ``/data/user/<userid>/<packagename>/shared_prefs/<AppName>``
        """
        return self._append_app_name_and_version(_android_folder(), "shared_prefs")

    @property
    def site_config_dir(self) -> str:
        """:return: config directory shared by the users, same as `user_config_dir`"""
        return self.user_config_dir

    @property
    def user_cache_dir(self) -> str:
        """:return: cache directory tied to the user, e.g. e.g. ``/data/user/<userid>/<packagename>/cache/<AppName>``"""
        return self._append_app_name_and_version(_android_folder(), "cache")

    @property
    def user_state_dir(self) -> str:
        """:return: state directory tied to the user, same as `user_data_dir`"""
        return self.user_data_dir

    @property
    def user_log_dir(self) -> str:
        """
        :return: log directory tied to the user, same as `user_cache_dir` if not opinionated else ``log`` in it,
          e.g. ``/data/user/<userid>/<packagename>/cache/<AppName>/log``
        """
        path = self.user_cache_dir
        if self.opinion:
            path = os.path.join(path, "log")
        return path

    @property
    def user_documents_dir(self) -> str:
        """
        :return: documents directory tied to the user e.g. ``/storage/emulated/0/Documents``
        """
        return _android_documents_folder()

    @property
    def user_runtime_dir(self) -> str:
        """
        :return: runtime directory tied to the user, same as `user_cache_dir` if not opinionated else ``tmp`` in it,
          e.g. ``/data/user/<userid>/<packagename>/cache/<AppName>/tmp``
        """
        path = self.user_cache_dir
        if self.opinion:
            path = os.path.join(path, "tmp")
        return path


@lru_cache(maxsize=1)
def _android_folder() -> str:
    """:return: base folder for the Android OS"""
    try:
        # First try to get path to android app via pyjnius
        from jnius import autoclass

        Context = autoclass("android.content.Context")  # noqa: N806
        result: str = Context.getFilesDir().getParentFile().getAbsolutePath()
    except Exception:
        # if fails find an android folder looking path on the sys.path
        pattern = re.compile(r"/data/(data|user/\d+)/(.+)/files")
        for path in sys.path:
            if pattern.match(path):
                result = path.split("/files")[0]
                break
        else:
            raise OSError("Cannot find path to android app folder")
    return result


@lru_cache(maxsize=1)
def _android_documents_folder() -> str:
    """:return: documents folder for the Android OS"""
    # Get directories with pyjnius
    try:
        from jnius import autoclass

        Context = autoclass("android.content.Context")  # noqa: N806
        Environment = autoclass("android.os.Environment")  # noqa: N806
        documents_dir: str = Context.getExternalFilesDir(Environment.DIRECTORY_DOCUMENTS).getAbsolutePath()
    except Exception:
        documents_dir = "/storage/emulated/0/Documents"

    return documents_dir


__all__ = [
    "Android",
]
                                                                                    """Build metadata for a project using PEP 517 hooks.
"""
import argparse
import logging
import os
import shutil
import functools

try:
    import importlib.metadata as imp_meta
except ImportError:
    import importlib_metadata as imp_meta

try:
    from zipfile import Path
except ImportError:
    from zipp import Path

from .envbuild import BuildEnvironment
from .wrappers import Pep517HookCaller, quiet_subprocess_runner
from .dirtools import tempdir, mkdir_p, dir_to_zipfile
from .build import validate_system, load_system, compat_system

log = logging.getLogger(__name__)


def _prep_meta(hooks, env, dest):
    reqs = hooks.get_requires_for_build_wheel({})
    log.info('Got build requires: %s', reqs)

    env.pip_install(reqs)
    log.info('Installed dynamic build dependencies')

    with tempdir() as td:
        log.info('Trying to build metadata in %s', td)
        filename = hooks.prepare_metadata_for_build_wheel(td, {})
        source = os.path.join(td, filename)
        shutil.move(source, os.path.join(dest, os.path.basename(filename)))


def build(source_dir='.', dest=None, system=None):
    system = system or load_system(source_dir)
    dest = os.path.join(source_dir, dest or 'dist')
    mkdir_p(dest)
    validate_system(system)
    hooks = Pep517HookCaller(
        source_dir, system['build-backend'], system.get('backend-path')
    )

    with hooks.subprocess_runner(quiet_subprocess_runner):
        with BuildEnvironment() as env:
            env.pip_install(system['requires'])
            _prep_meta(hooks, env, dest)


def build_as_zip(builder=build):
    with tempdir() as out_dir:
        builder(dest=out_dir)
        return dir_to_zipfile(out_dir)


def load(root):
    """
    Given a source directory (root) of a package,
    return an importlib.metadata.Distribution object
    with metadata build from that package.
    """
    root = os.path.expanduser(root)
    system = compat_system(root)
    builder = functools.partial(build, source_dir=root, system=system)
    path = Path(build_as_zip(builder))
    return imp_meta.PathDistribution(path)


parser = argparse.ArgumentParser()
parser.add_argument(
    'source_dir',
    help="A directory containing pyproject.toml",
)
parser.add_argument(
    '--out-dir', '-o',
    help="Destination in which to save the builds relative to source dir",
)


def main():
    args = parser.parse_args()
    build(args.source_dir, args.out_dir)


if __name__ == '__main__':
    main()
                                                                                                                     á                                                           à                             !                             ß                             "                             Þ                             #                             Ý                             $                             Ü                             %                             Û                             &                             Ú                             '                             Ù                             (                             Ø                             )                             ×                             *                             Ö                             +                             Õ                           INDX( 	 b           (   ¨  è       ØØ                  ÚB
    h R     ÙB
    {«R³LRØ{«R³LRØ{«R³LRØ{«R³LRØ                      b u i l d . p y       ÛB
    h R     ÙB
    ·U³LRØ·U³LRØ·U³LRØ·U³LRØ        Ä               c h e c k . p y       ÜB
    h X     ÙB
    rpW³LRØrpW³LRØrpW³LRØrpW³LRØ                       c o l o r l o g . p y ÝB
    h T     ÙB
    rpW³LRØrpW³LRØrpW³LRØrpW³LRØ       å              	 c o m p a t . p y     ÞB
    h X     ÙB
    ÒY³LR ÒY³LRØÒY³LRØÒY³LRØ       i               d i r t o o l s . p y ßB
    h X     ÙB
    k6\³LRØk6\³LRØk6\³LRØk6\³LRØ        Ô               e n v b u i l d . p y ãB
    h V     ÙB
    Êú`³LRØ&4ËLRØ&4ËLRØËa)ORØ                       
 i n _ p r o c e s s  àB
    ` P     ÙB
    k6\³LRØk6\³LRØk6\³LRØk6\³LRØ       	               m e t a . p y áB
    h X     ÙB
    Ë^³LRØË^³LRØË^³LRØË^³LRØ @      u4               w r a p p e r s . p y âB
    h X     ÙB
    Êú`³LR Êú`³LRØÊú`³LRØÊú`³LRØ                       _ _ i n i t _ _ . p y VE
    h X     ÙB
    ¢*ËLRØa/ËLRØa/ËLRØa/ËLRØ                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         import os
import io
import contextlib
import tempfile
import shutil
import errno
import zipfile


@contextlib.contextmanager
def tempdir():
    """Create a temporary directory in a context manager."""
    td = tempfile.mkdtemp()
    try:
        yield td
    finally:
        shutil.rmtree(td)


def mkdir_p(*args, **kwargs):
    """Like `mkdir`, but does not raise an exception if the
    directory already exists.
    """
    try:
        return os.mkdir(*args, **kwargs)
    except OSError as exc:
        if exc.errno != errno.EEXIST:
            raise


def dir_to_zipfile(root):
    """Construct an in-memory zip file for a directory."""
    buffer = io.BytesIO()
    zip_file = zipfile.ZipFile(buffer, 'w')
    for root, dirs, files in os.walk(root):
        for path in dirs:
            fs_path = os.path.join(root, path)
            rel_path = os.path.relpath(fs_path, root)
            zip_file.writestr(rel_path + '/', '')
        for path in files:
            fs_path = os.path.join(root, path)
            rel_path = os.path.relpath(fs_path, root)
            zip_file.write(fs_path, rel_path)
    return zip_file
                                                                                                                                                                                                                                                                                                                                                                                                                                           ÷                            
                            ö                                                        õ                                                        ô                                                        ó                                                        ò                                                        ñ                                                        ð                                                        ï                                                        î                                                        í                                                        ì                                                        ë                                                        ê                                                        é                                                        è                                                        ç                                                        æ                                                        å                                                        ä                                                        ã                                                        â                                        """Python 2/3 compatibility"""
import io
import json
import sys


# Handle reading and writing JSON in UTF-8, on Python 3 and 2.

if sys.version_info[0] >= 3:
    # Python 3
    def write_json(obj, path, **kwargs):
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(obj, f, **kwargs)

    def read_json(path):
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)

else:
    # Python 2
    def write_json(obj, path, **kwargs):
        with open(path, 'wb') as f:
            json.dump(obj, f, encoding='utf-8', **kwargs)

    def read_json(path):
        with open(path, 'rb') as f:
            return json.load(f)


# FileNotFoundError

try:
    FileNotFoundError = FileNotFoundError
except NameError:
    FileNotFoundError = IOError


if sys.version_info < (3, 6):
    from toml import load as _toml_load  # noqa: F401

    def toml_load(f):
        w = io.TextIOWrapper(f, encoding="utf8", newline="")
        try:
            return _toml_load(w)
        finally:
            w.detach()

    from toml import TomlDecodeError as TOMLDecodeError  # noqa: F401
else:
    from pip._vendor.tomli import load as toml_load  # noqa: F401
    from pip._vendor.tomli import TOMLDecodeError  # noqa: F401
                                                                                                                                                                                                                                                                                                 d                                                      e                                                      f                                                      g                                                      h                                                      i                                                      j                                                      k                                                      l                                                      m                                                      n                                                      o                                                      p                                                      q                                                      r                                                      s                                                      t                                                      u                                                      v                                                      w                                                      x                                                      y                                                      z                                        """Build a project using PEP 517 hooks.
"""
import argparse
import io
import logging
import os
import shutil

from .envbuild import BuildEnvironment
from .wrappers import Pep517HookCaller
from .dirtools import tempdir, mkdir_p
from .compat import FileNotFoundError, toml_load

log = logging.getLogger(__name__)


def validate_system(system):
    """
    Ensure build system has the requisite fields.
    """
    required = {'requires', 'build-backend'}
    if not (required <= set(system)):
        message = "Missing required fields: {missing}".format(
            missing=required-set(system),
        )
        raise ValueError(message)


def load_system(source_dir):
    """
    Load the build system from a source dir (pyproject.toml).
    """
    pyproject = os.path.join(source_dir, 'pyproject.toml')
    with io.open(pyproject, 'rb') as f:
        pyproject_data = toml_load(f)
    return pyproject_data['build-system']


def compat_system(source_dir):
    """
    Given a source dir, attempt to get a build system backend
    and requirements from pyproject.toml. Fallback to
    setuptools but only if the file was not found or a build
    system was not indicated.
    """
    try:
        system = load_system(source_dir)
    except (FileNotFoundError, KeyError):
        system = {}
    system.setdefault(
        'build-backend',
        'setuptools.build_meta:__legacy__',
    )
    system.setdefault('requires', ['setuptools', 'wheel'])
    return system


def _do_build(hooks, env, dist, dest):
    get_requires_name = 'get_requires_for_build_{dist}'.format(**locals())
    get_requires = getattr(hooks, get_requires_name)
    reqs = get_requires({})
    log.info('Got build requires: %s', reqs)

    env.pip_install(reqs)
    log.info('Installed dynamic build dependencies')

    with tempdir() as td:
        log.info('Trying to build %s in %s', dist, td)
        build_name = 'build_{dist}'.format(**locals())
        build = getattr(hooks, build_name)
        filename = build(td, {})
        source = os.path.join(td, filename)
        shutil.move(source, os.path.join(dest, os.path.basename(filename)))


def build(source_dir, dist, dest=None, system=None):
    system = system or load_system(source_dir)
    dest = os.path.join(source_dir, dest or 'dist')
    mkdir_p(dest)

    validate_system(system)
    hooks = Pep517HookCaller(
        source_dir, system['build-backend'], system.get('backend-path')
    )

    with BuildEnvironment() as env:
        env.pip_install(system['requires'])
        _do_build(hooks, env, dist, dest)


parser = argparse.ArgumentParser()
parser.add_argument(
    'source_dir',
    help="A directory containing pyproject.toml",
)
parser.add_argument(
    '--binary', '-b',
    action='store_true',
    default=False,
)
parser.add_argument(
    '--source', '-s',
    action='store_true',
    default=False,
)
parser.add_argument(
    '--out-dir', '-o',
    help="Destination in which to save the builds relative to source dir",
)


def main(args):
    log.warning('pep517.build is deprecated. '
                'Consider switching to https://pypi.org/project/build/')

    # determine which dists to build
    dists = list(filter(None, (
        'sdist' if args.source or not args.binary else None,
        'wheel' if args.binary or not args.source else None,
    )))

    for dist in dists:
        build(args.source_dir, dist, args.out_dir)


if __name__ == '__main__':
    main(parser.parse_args())
                                                                                                                                    <                          Ä                          =                          Ã                          >                          Â                          ?                          Á                          @                          À       # This file is dual licensed under the terms of the Apache License, Version
# 2.0, and the BSD License. See the LICENSE file in the root of this repository
# for complete details.


class InfinityType:
    def __repr__(self) -> str:
        return "Infinity"

    def __hash__(self) -> int:
        return hash(repr(self))

    def __lt__(self, other: object) -> bool:
        return False

    def __le__(self, other: object) -> bool:
        return False

    def __eq__(self, other: object) -> bool:
        return isinstance(other, self.__class__)

    def __gt__(self, other: object) -> bool:
        return True

    def __ge__(self, other: object) -> bool:
        return True

    def __neg__(self: object) -> "NegativeInfinityType":
        return NegativeInfinity


Infinity = InfinityType()


class NegativeInfinityType:
    def __repr__(self) -> str:
        return "-Infinity"

    def __hash__(self) -> int:
        return hash(repr(self))

    def __lt__(self, other: object) -> bool:
        return True

    def __le__(self, other: object) -> bool:
        return True

    def __eq__(self, other: object) -> bool:
        return isinstance(other, self.__class__)

    def __gt__(self, other: object) -> bool:
        return False

    def __ge__(self, other: object) -> bool:
        return False

    def __neg__(self: object) -> InfinityType:
        return Infinity


NegativeInfinity = NegativeInfinityType()
                                                                                                                                   ý                                                    ü                                                    û                                                    ú                                                    ù                                                    ø                          	                          ÷                          
                          ö                                                    õ                                                    ô                                                    ó                                                    ò                                                    ñ                                                    ð                                                    ï                                                    î                                                    í                                                    ì                                                    ë                                                    ê                                                    é                                                    è                                                    ç                                                    æ           INDX( 	 {]           (   @  è        s                   ÎB
    h V     ÍB
    _D³LRØ_D³LRØ_D³LRØ_D³LRØ 0      '!              
 m a r k e r s . p y   ÏB
    p `     ÍB
    ¡¿F³LRØ¡¿F³LRØ¡¿F³LRØ¡¿F³LRØ        D               r e q u i r e m e n t s . p y ÐB
    p \     ÍB
    ¡¿F³LRØu"I³LRØu"I³LRØu"I³LRØ       u               s p e c i f i e r s . p y     ÑB
    ` P     ÍB
    u"I³LRØu"I³LRØu"I³LRØu"I³LRØ @      S=               t a g s . p y ÒB
    h R     ÍB
    ÒK³LRØÒK³LRØÒK³LRØÒK³LRØ        h               u t i l s . p y       ÓB
    h V     ÍB
    ÒK³LRØÒK³LRØÒK³LRØÒK³LRØ @      I9              
 v e r s i o n . p y   ÔB
    p \     ÍB
    ÅæM³LRØÅæM³LRØÅæM³LRØÅæM³LRØ 0      à,               _ m a n y l i n u x . p y     ÕB
    p \     ÍB
    ÅæM³LRØÅæM³LRØÅæM³LRØÅæM³LRØ                       _ m u s l l i n u x . p y     ÖB
    p ^     ÍB
    ÂJP³LRØÂJP³LRØÂJP³LRØÂJP³LRØ                      _ s t r u c t u r e  . p y   ×B
    p Z     ÍB
    ÂJP³LRØÂJP³LRØÂJP³LRØÂJP³LRØ                     _ _ a b o u t _ _ . p y       ØB
    h X     ÍB
    ÂJP³LRØÂJP³LRØÂJP³LRØÂJP³LRØø      ñ               _ _ i n i t _ _ . p y D
    h X     ÍB
    ??ÈLRØãòÊLRØãòÊLRØãòÊLRØ                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 # coding: utf-8
from ._version import version
from .exceptions import *
from .ext import ExtType, Timestamp

import os
import sys


if os.environ.get("MSGPACK_PUREPYTHON") or sys.version_info[0] == 2:
    from .fallback import Packer, unpackb, Unpacker
else:
    try:
        from ._cmsgpack import Packer, unpackb, Unpacker
    except ImportError:
        from .fallback import Packer, unpackb, Unpacker


def pack(o, stream, **kwargs):
    """
    Pack object `o` and write it to `stream`

    See :class:`Packer` for options.
    """
    packer = Packer(**kwargs)
    stream.write(packer.pack(o))


def packb(o, **kwargs):
    """
    Pack object `o` and return packed bytes

    See :class:`Packer` for options.
    """
    return Packer(**kwargs).pack(o)


def unpack(stream, **kwargs):
    """
    Unpack an object from `stream`.

    Raises `ExtraData` when `stream` contains extra bytes.
    See :class:`Unpacker` for options.
    """
    data = stream.read()
    return unpackb(data, **kwargs)


# alias for compatibility to simplejson/marshal/pickle.
load = unpack
loads = unpackb

dump = pack
dumps = packb
                                                                                                                                                                                                                                                                                                                                                                                                                                       (              Ø              )              ×              *              Ö              +              Õ              ,              Ô              -              Ó              .              Ò              /              Ñ              0              Ð              1              Ï              2              Î              3              Í              4              Ì              5              Ë              6              Ê              7              É              8              È              9              Ç              :              Æ              ;              Å              <              Ä              =              Ã              >              Â              ?              Á              @              À              A              ¿              B              ¾              C              ½              D              ¼              E              »              F              º              G              ¹              H              ¸              I              ·              J              ¶              K              µ              L              ´              M              ³              N              ²              O              ±              P              °              Q              ¯              R              class UnpackException(Exception):
    """Base class for some exceptions raised while unpacking.

    NOTE: unpack may raise exception other than subclass of
    UnpackException.  If you want to catch all error, catch
    Exception instead.
    """


class BufferFull(UnpackException):
    pass


class OutOfData(UnpackException):
    pass


class FormatError(ValueError, UnpackException):
    """Invalid msgpack format"""


class StackError(ValueError, UnpackException):
    """Too nested"""


# Deprecated.  Use ValueError instead
UnpackValueError = ValueError


class ExtraData(UnpackValueError):
    """ExtraData is raised when there is trailing data.

    This exception is raised while only one-shot (not streaming)
    unpack.
    """

    def __init__(self, unpacked, extra):
        self.unpacked = unpacked
        self.extra = extra

    def __str__(self):
        return "unpack(b) received extra data."


# Deprecated.  Use Exception instead to catch all exception during packing.
PackException = Exception
PackValueError = ValueError
PackOverflowError = OverflowError
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        J    ¶    K    µ    L    ´    M    ³    N    ²    O    ±    P    °    Q    ¯    R    ®    S    ­    T    ¬    U    «    V    ª    W    ©    X    ¨    Y    §    Z    ¦    [    ¥    \    ¤    ]    £    ^    ¢    _    ¡    `         a        b        c        d        e        f        g        h        i        j        k        l        m        n        o        p        q        r        s        t        u        v        w        x        y        z        {        |        }        ~                      ÿ          þ          ý          ü          û          ú          ù          ø     	     ÷     
     ö          õ          ô          ó          ò          ñ          ð          ï          î          í          ì          ë          ê          é          è          ç          æ          å          ä          ã          â          á           à     !     ß     "     Þ     #     Ý     $     Ü     %     Û     &     Ú     '     Ù     (     Ø     )     ×     *     Ö     +     Õ     ,     Ô     -     Ó     .     Ò     /     Ñ     0     Ð     1     Ï     2     Î     3     Í     4     Ì     5     Ë     6     Ê     7     É     8     È     9     Ç     :     Æ     ;     Å     <     Ä     =     Ã     >     from .package_data import __version__
from .core import (
    IDNABidiError,
    IDNAError,
    InvalidCodepoint,
    InvalidCodepointContext,
    alabel,
    check_bidi,
    check_hyphen_ok,
    check_initial_combiner,
    check_label,
    check_nfc,
    decode,
    encode,
    ulabel,
    uts46_remap,
    valid_contextj,
    valid_contexto,
    valid_label_length,
    valid_string_length,
)
from .intranges import intranges_contain

__all__ = [
    "IDNABidiError",
    "IDNAError",
    "InvalidCodepoint",
    "InvalidCodepointContext",
    "alabel",
    "check_bidi",
    "check_hyphen_ok",
    "check_initial_combiner",
    "check_label",
    "check_nfc",
    "decode",
    "encode",
    "intranges_contain",
    "ulabel",
    "uts46_remap",
    "valid_contextj",
    "valid_contexto",
    "valid_label_length",
    "valid_string_length",
]
                                                                                                                                                                               #  Ý  $  Ü  %  Û  &  Ú  '  Ù  (  Ø  )  ×  *  Ö  +  Õ  ,  Ô  -  Ó  .  Ò  /  Ñ  0  Ð  1  Ï  2  Î  3  Í  4  Ì  5  Ë  6  Ê  7  É  8  È  9  Ç  :  Æ  ;  Å  <  Ä  =  Ã  >  Â  ?  Á  @  À  A  ¿  B  ¾  C  ½  D  ¼  E  »  F  º  G  ¹  H  ¸  I  ·  J  ¶  K  µ  L  ´  M  ³  N  ²  O  ±  P  °  Q  ¯  R  ®  S  ­  T  ¬  U  «  V  ª  W  ©  X  ¨  Y  §  Z  ¦  [  ¥  \  ¤  ]  £  ^  ¢  _  ¡  `     a    b    c    d    e    f    g    h    i    j    k    l    m    n    o    p    q    r    s    t    u    v    w    x    y    z    {    |    }    ~            ÿ      þ      ý      ü      û      ú      ù      ø   	   ÷   
   ö      õ      ô      ó      ò      ñ      ð      ï      î      í      ì      ë      ê      é      è      ç      æ      å      ä      ã      â      á       à   !   ß   "   Þ   #   Ý   $   Ü   %   Û   &   Ú   '   Ù   (   Ø   )   ×   *   Ö   +   Õ   ,   Ô   -   Ó   .   Ò   /   Ñ   0   Ð   1   Ï   2   Î   3   Í   4   Ì   5   Ë   6   Ê   7   É   8   È   9   Ç   :   Æ   ;   Å   <   Ä   =   Ã   >   Â   ?   Á   @   À   A   ¿   B   ¾   C   ½   D   ¼   E   »   F   º   G   ¹   H   ¸   I   ·   J   ¶   K   µ   L   ´   M   ³   N   ²   O   ±   P   °   Q   ¯   R   ®   S   ­   T   ¬   U   «   V   ª   W   ©   X   ¨   Y   §   Z   ¦   [   ¥   \   ¤   ]   £   ^   ¢   _   ¡   `       a      b      c      d      e      f      g      h      i      j      k      l      m      n      o      p      q      r      s      t      u      v      w      x      y      z      { INDX( 	 r_           (   ð  è       Ø                    ¿B
    h R     ¾B
    o,³LRØo,³LRØo,³LRØo,³LRØ       .               c o d e c . p y       ÀB
    h T     ¾B
    o,³LRØo,³LRØo,³LRØo,³LRØH      A              	 c o m p a t . p y     ÁB
    ` P     ¾B
    hè.³LRØhè.³LRØhè.³LRØhè.³LRØ @      û1               c o r e . p y ÂB
    h X     ¾B
    WL1³LRØWL1³LRØWL1³LRØWL1³LRØ °      ù«               i d n a d a t a . p y ÃB
    p Z     ¾B
    Ò®3³LRØÒ®3³LR Ò®3³LRØÒ®3³LRØ       Y               i n t r a n g e s . p y       ÄB
    p `     ¾B
    Ò®3³LRØÒ®3³LRØÒ®3³LRØÒ®3³LRØ                       p a c k a g e _ d a t a . p y ÅB
    p Z     ¾B
    :s8³LRØ:s8³LRØ:s8³LRØ:s8³LRØ       p              u t s 4 6 d a t a . p y       ÆB
    h X     ¾B
    ­Ô:³LRØ­Ô:³LRØ­Ô:³LRØ­Ô:³LRØ       Q               _ _ i n i t _ _ . p y cD
    h X     ¾B
    m`ÉLRØgÉLRØgÉLRØgÉLRØ                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                """
Given a list of integers, made up of (hopefully) a small number of long runs
of consecutive integers, compute a representation of the form
((start1, end1), (start2, end2) ...). Then answer the question "was x present
in the original list?" in time O(log(# runs)).
"""

import bisect
from typing import List, Tuple

def intranges_from_list(list_: List[int]) -> Tuple[int, ...]:
    """Represent a list of integers as a sequence of ranges:
    ((start_0, end_0), (start_1, end_1), ...), such that the original
    integers are exactly those x such that start_i <= x < end_i for some i.

    Ranges are encoded as single integers (start << 32 | end), not as tuples.
    """

    sorted_list = sorted(list_)
    ranges = []
    last_write = -1
    for i in range(len(sorted_list)):
        if i+1 < len(sorted_list):
            if sorted_list[i] == sorted_list[i+1]-1:
                continue
        current_range = sorted_list[last_write+1:i+1]
        ranges.append(_encode_range(current_range[0], current_range[-1] + 1))
        last_write = i

    return tuple(ranges)

def _encode_range(start: int, end: int) -> int:
    return (start << 32) | end

def _decode_range(r: int) -> Tuple[int, int]:
    return (r >> 32), (r & ((1 << 32) - 1))


def intranges_contain(int_: int, ranges: Tuple[int, ...]) -> bool:
    """Determine if `int_` falls into one of the ranges in `ranges`."""
    tuple_ = _encode_range(int_, 0)
    pos = bisect.bisect_left(ranges, tuple_)
    # we could be immediately ahead of a tuple (start, end)
    # with start < int_ <= end
    if pos > 0:
        left, right = _decode_range(ranges[pos-1])
        if left <= int_ < right:
            return True
    # or we could be immediately behind a tuple (int_, end)
    if pos < len(ranges):
        left, _ = _decode_range(ranges[pos])
        if left == int_:
            return True
    return False
                                                                                                                                                                       dád®ed¯ddâd®ed¯ddãd¸ed¹d¥i däd¾ed¿ddåd´edµddæd«ed¬ddçdòedóddèdÄedÅddédùedúddêdÊedËddëdÄedÅddìdÄedÅddídÄedÅddîdÄedÅddïdÄedÅddðdÑedÒddñdÑedÒddòdÑedÒddódÑedÒddôdÑedÒd¥i dõd´edµddöd´edµdd÷dòedóddødòedóddùdòedóddúd¾ed¿ddûd¸ed¹ddüd«ed¬ddýd¸ed¹ddþdùedúddÿd¸ed¹dd dÊedËdddÚedÛdddÚedÛdddÚedÛdddÚedÛdddÚedÛd¥i dd´edµddd´edµddd´edµdd	d´edµdd
d´edµdddÚedÛddd%ed&ddd%ed&ddd%ed&ddd´edµddd´edµddd´edµddd´edµddd«ed¬ddd«ed¬ddd¸ed¹ddd¸ed¹d¥i dd¸ed¹ddd¸ed¹ddd%ed&ddd%ed&dddeddddeddddeddddeddddeddd dóedôdd!dóedôdd"dóedôdd#dóedôdd$dóedôdd%ddededd&d]ed^dd'd/ed0d¥i d(d2ed3dd)d/ed0dd*d@edAdd+d'ed(dd,d'ed(dd-d'ed(dd.d'ed(dd/d'ed(dd0dGedHdd1dGedHdd2dGedHdd3dGedHdd4dGedHdd5dJedKdd6d ed!dd7ddededd8ddeded¥i d9ddededd:ddededd;d ed!dd<d ed!dfrom .core import encode, decode, alabel, ulabel, IDNAError
import codecs
import re
from typing import Tuple, Optional

_unicode_dots_re = re.compile('[\u002e\u3002\uff0e\uff61]')

class Codec(codecs.Codec):

    def encode(self, data: str, errors: str = 'strict') -> Tuple[bytes, int]:
        if errors != 'strict':
            raise IDNAError('Unsupported error handling \"{}\"'.format(errors))

        if not data:
            return b"", 0

        return encode(data), len(data)

    def decode(self, data: bytes, errors: str = 'strict') -> Tuple[str, int]:
        if errors != 'strict':
            raise IDNAError('Unsupported error handling \"{}\"'.format(errors))

        if not data:
            return '', 0

        return decode(data), len(data)

class IncrementalEncoder(codecs.BufferedIncrementalEncoder):
    def _buffer_encode(self, data: str, errors: str, final: bool) -> Tuple[str, int]:  # type: ignore
        if errors != 'strict':
            raise IDNAError('Unsupported error handling \"{}\"'.format(errors))

        if not data:
            return "", 0

        labels = _unicode_dots_re.split(data)
        trailing_dot = ''
        if labels:
            if not labels[-1]:
                trailing_dot = '.'
                del labels[-1]
            elif not final:
                # Keep potentially unfinished label until the next call
                del labels[-1]
                if labels:
                    trailing_dot = '.'

        result = []
        size = 0
        for label in labels:
            result.append(alabel(label))
            if size:
                size += 1
            size += len(label)

        # Join with U+002E
        result_str = '.'.join(result) + trailing_dot  # type: ignore
        size += len(trailing_dot)
        return result_str, size

class IncrementalDecoder(codecs.BufferedIncrementalDecoder):
    def _buffer_decode(self, data: str, errors: str, final: bool) -> Tuple[str, int]:  # type: ignore
        if errors != 'strict':
            raise IDNAError('Unsupported error handling \"{}\"'.format(errors))

        if not data:
            return ('', 0)

        labels = _unicode_dots_re.split(data)
        trailing_dot = ''
        if labels:
            if not labels[-1]:
                trailing_dot = '.'
                del labels[-1]
            elif not final:
                # Keep potentially unfinished label until the next call
                del labels[-1]
                if labels:
                    trailing_dot = '.'

        result = []
        size = 0
        for label in labels:
            result.append(ulabel(label))
            if size:
                size += 1
            size += len(label)

        result_str = '.'.join(result) + trailing_dot
        size += len(trailing_dot)
        return (result_str, size)


class StreamWriter(Codec, codecs.StreamWriter):
    pass


class StreamReader(Codec, codecs.StreamReader):
    pass


def getregentry() -> codecs.CodecInfo:
    # Compatibility as a search_function for codecs.register()
    return codecs.CodecInfo(
        name='idna',
        encode=Codec().encode,  # type: ignore
        decode=Codec().decode,  # type: ignore
        incrementalencoder=IncrementalEncoder,
        incrementaldecoder=IncrementalDecoder,
        streamwriter=StreamWriter,
        streamreader=StreamReader,
    )
                                                                                                                                                                                                                  edúddldÊedËddmd¬ed­ddnd¬ed­ddodYedZddpdRedSddqd`edad¥i drdgedhddsdnedoddtduedvddudedddvd¥ed¦ddwdÊedËddxdÊedËddydÍedÎddzdÖed×dd{dÙedÚdd|dÜedÝdd}dßedàdd~dâedãdddÊedËdddæedçdddÄedÅdddÊefrom __future__ import absolute_import, division, unicode_literals

try:
    from collections.abc import Mapping
except ImportError:  # Python 2.7
    from collections import Mapping


class Trie(Mapping):
    """Abstract base class for tries"""

    def keys(self, prefix=None):
        # pylint:disable=arguments-differ
        keys = super(Trie, self).keys()

        if prefix is None:
            return set(keys)

        return {x for x in keys if x.startswith(prefix)}

    def has_keys_with_prefix(self, prefix):
        for key in self.keys():
            if key.startswith(prefix):
                return True

        return False

    def longest_prefix(self, prefix):
        if prefix in self:
            return prefix

        for i in range(1, len(prefix) + 1):
            if prefix[:-i] in self:
                return prefix[:-i]

        raise KeyError(prefix)

    def longest_prefix_item(self, prefix):
        lprefix = self.longest_prefix(prefix)
        return (lprefix, self[lprefix])
           d8deddd9dcedddd:dfedgdd;diedjdd<diedjdd=doedpdd>deddd?dedd¥i d@dedddAdedddBd¹edºddCd½ed¾ddDd¹edºddEd¹edºddFdedddGdedddHdËedÌddId½ed¾ddJd½ed¾ddKd¹edºddLd¹edºddMdÑedÒddNdedddOdedddPdedd¥i dQdedddRdedddSdedddTd÷edøddUdüedýddVdüedýddWdüedýddXdüedýddYdÔedÕddZdÔedÕdd[dÔedÕdd\deddd]deddd^deddd_deddd`dêedëddadêedëd¥i dbdâedãddcdâedãddddâedãddedâedãddfdÑedÒddgdÑedÒddhdÑedÒddidÑedÒddjdÑedÒddkdedddldedddmdedddndedddodedddpd÷edøddqd÷edøddrdÜedÝd¥i dsdÜedÝddtdÜedÝddudÜedÝddvdÜedÝddwdüedýddxdüedýddydüedýddzdÔedÕdd{dÔedÕdd|dÔedÕdd}dÔedÕdd~deddddeddddeddddeddddôedõdddñedòd¥i ddeddddãedädddÊedËdddÊedËdddÙedÚdddÞedßdddñedòdddñedòdddÐedÑdddÐedÑdddÐedÑdddÐedÑdddÐedÑdddÞedßdddÞedßdddãedädddãedäd¥i ddñedòdddÐedÑdddÇedÈdddÞedßdddÞedßdddÞedßddd1ed2dddAedBddddededdd1ed2ddd1ed2dd d²ed³dd¡d¬ed­dd¢d¯ed°dd£d²ed³dd¤d¬ed­dd¥d¬ed­d¥i d¦d§ed¨dd§d¬ed­dd¨d¬ed­dd©dËedÌddªd¤ed¥dd«d²ed³dd¬dËedÌdd­dÛedÜdd®dÞedßdd¯d§ed¨dd°d¸ed¹dd±dµed¶dd²d¬ed­dd³d¬ed­dd´d¬ed­ddµdöed÷dd¶döed÷d¥i d·döed÷dd¸dùedúdd¹dùedúddºdeddd»deddd¼dóedôdd½döed÷dd¾düedýdd¿döed÷ddÀdöed÷ddÁdFedGddÂdWedXddÃdRedSddÄd>ed?ddÅdTedUddÆd(ed)ddÇd(ed)d¥i dÈd(ed)ddÉd%ed&dfrom __future__ import absolute_import, division, unicode_literals
from pip._vendor.six import text_type

from bisect import bisect_left

from ._base import Trie as ABCTrie


class Trie(ABCTrie):
    def __init__(self, data):
        if not all(isinstance(x, text_type) for x in data.keys()):
            raise TypeError("All keys must be strings")

        self._data = data
        self._keys = sorted(data.keys())
        self._cachestr = ""
        self._cachepoints = (0, len(data))

    def __contains__(self, key):
        return key in self._data

    def __len__(self):
        return len(self._data)

    def __iter__(self):
        return iter(self._data)

    def __getitem__(self, key):
        return self._data[key]

    def keys(self, prefix=None):
        if prefix is None or prefix == "" or not self._keys:
            return set(self._keys)

        if prefix.startswith(self._cachestr):
            lo, hi = self._cachepoints
            start = i = bisect_left(self._keys, prefix, lo, hi)
        else:
            start = i = bisect_left(self._keys, prefix)

        keys = set()
        if start == len(self._keys):
            return keys

        while self._keys[i].startswith(prefix):
            keys.add(self._keys[i])
            i += 1

        self._cachestr = prefix
        self._cachepoints = (start, i)

        return keys

    def has_keys_with_prefix(self, prefix):
        if prefix in self._data:
            return True

        if prefix.startswith(self._cachestr):
            lo, hi = self._cachepoints
            i = bisect_left(self._keys, prefix, lo, hi)
        else:
            i = bisect_left(self._keys, prefix)

        if i == len(self._keys):
            return False

        return self._keys[i].startswith(prefix)
                                                                                                                                                                                                                                                                                 d¥i d§dÄedÅdd¨dÄedÅdd©dÄedÅddªded dd«d$ed%dd¬d$ed%dd­d$ed%dd®d$ed%dd¯d$ed%dd°d$ed%dd±deddd²deddd³deddd´dedddµd!ed"dd¶d!ed"dd·dedd¥i d¸deddd¹d"ed#ddºd"ed#dd»d"ed#dd¼d"ed#dd½deddd¾deddd¿dedddÀdedddÁd=ed>ddÂd=ed>ddÃd=ed>ddÄd=ed>ddÅd=ed>ddÆded	ddÇded	ddÈded	d¥i dÉded	ddÊd4ed5ddËd4ed5ddÌd4ed5ddÍded ddÎd$ed%ddÏd$ed%ddÐd$ed%ddÑdedddÒd$ed%ddÓdedddÔded ddÕded ddÖded dd×ded ddØd$ed%ddÙdedd¥i dÚdedddÛdedddÜdedddÝd$ed%ddÞdedddßd!ed"ddàd)ed*ddád)ed*ddâd*ed+ddãded ddäded ddåded ddæd$ed%ddçd*ed+ddèd.ed/ddéd-ed.ddêd-ed.d¥i dëd-ed.ddìd-ed.ddídceddddîdceddddïdceddddðdceddddñdceddddòdceddddódfedgddôdfedgddõ
dEe
dFddö
dEe
dFdd÷
dEe
dFddø
dEe
dFddù
dKe
dLddú
dKe
dLddû
dKe
dLd¥i dü
dKe
dLddý
dNe
dOddþ
dNe
dOddÿdeddd deddddeddddeddd
dNe
dOdd
dNe
dOdd
dRe
dSdd
from __future__ import absolute_import, division, unicode_literals

from genshi.core import QName
from genshi.core import START, END, XML_NAMESPACE, DOCTYPE, TEXT
from genshi.core import START_NS, END_NS, START_CDATA, END_CDATA, PI, COMMENT

from . import base

from ..constants import voidElements, namespaces


class TreeWalker(base.TreeWalker):
    def __iter__(self):
        # Buffer the events so we can pass in the following one
        previous = None
        for event in self.tree:
            if previous is not None:
                for token in self.tokens(previous, event):
                    yield token
            previous = event

        # Don't forget the final event!
        if previous is not None:
            for token in self.tokens(previous, None):
                yield token

    def tokens(self, event, next):
        kind, data, _ = event
        if kind == START:
            tag, attribs = data
            name = tag.localname
            namespace = tag.namespace
            converted_attribs = {}
            for k, v in attribs:
                if isinstance(k, QName):
                    converted_attribs[(k.namespace, k.localname)] = v
                else:
                    converted_attribs[(None, k)] = v

            if namespace == namespaces["html"] and name in voidElements:
                for token in self.emptyTag(namespace, name, converted_attribs,
                                           not next or next[0] != END or
                                           next[1] != tag):
                    yield token
            else:
                yield self.startTag(namespace, name, converted_attribs)

        elif kind == END:
            name = data.localname
            namespace = data.namespace
            if namespace != namespaces["html"] or name not in voidElements:
                yield self.endTag(namespace, name)

        elif kind == COMMENT:
            yield self.comment(data)

        elif kind == TEXT:
            for token in self.text(data):
                yield token

        elif kind == DOCTYPE:
            yield self.doctype(*data)

        elif kind in (XML_NAMESPACE, DOCTYPE, START_NS, END_NS,
                      START_CDATA, END_CDATA, PI):
            pass

        else:
            yield self.unknown(kind)
                                                                                                                                                                                                                                                           dÒedÓd
dHdËedÌd
dIdedd
dJ
dKe
dLd
dM
dNe
dOd
dPdàedád
dQ
dRe
dSd
dTdËedÌd
dUdËedÌd
dVdËedÌd
dW
dNe
dOd
dXdàedád
dY
dRe
dSd
dZdedd
d[dedd
d\dedd
d]dedd¥i 
d^dedd
d_dedd
d`dãedäd
daded	d
dbded	d
dcd4ed5d
ddd4ed5d
ded7ed8d
dfd"ed#d
dgd=ed>d
dhdedd
didedd
djdedd
dkdedd
dldedd
dmdedd
dndedd¥i 
dodedd
dpdedd
dqdedd
drd7ed8d
dsd7ed8d
dtd7ed8d
dud7ed8d
dvd7ed8d
dwd(ed)d
dxd(ed)d
dyd1ed2d
dzd1ed2d
d{d1ed2d
d|d=ed>d
d}d=ed>d
d~d@edAd
ddCedDd¥i 
ddCedDd
ddCedDd
ddFedGd
ddFedGd
ddFedGd
ddFedGd
ddIedJd
ddIedJd
dd:ed;d
ddOedPd
ddOedPd
dd7ed8d
ddUedVd
ddZed[d
ddZed[d
ddLedMd
dd4ed5d¥i 
dd7ed8d
dd:ed;d
dd=ed>d
dd@edAd
ddCedDo
    :÷[b+  ã                   @   sÚ   U d dl Z d dlZd dlZd dlZd dlZd dlZd dlmZ d dlm	Z	 e 
d¡Ze d¡Zeje ed< defdd	Zdefd
dZze ¡ Zeje ed< W n ey]   ejZY nw e jdddefddZdS )é    N)Úappdirs)Úrunning_under_virtualenvÚpipÚpurelibÚsite_packagesÚreturnc                   C   s   dj tj S )ze
    Return the major-minor version of the current Python as a string, e.g.
    "3.7" or "3.10".
    z{}.{})ÚformatÚsysÚversion_info© r   r   ú_E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\locations\base.pyÚget_major_minor_version   s   r   c                  C   sX   t  rtj tjd¡} nztj t ¡ d¡} W n ty%   t d¡ Y nw tj 	| ¡S )NÚsrcz=The folder you are executing pip from can no longer be found.)
r   ÚosÚpathÚjoinr	   ÚprefixÚgetcwdÚOSErrorÚexitÚabspath)Z
src_prefixr   r   r   Úget_src_prefix   s   þr   Ú	user_site)Úmaxsizec                   C   s   t t d¡S )NZPYTHONFRAMEWORK)ÚboolÚ	sysconfigÚget_config_varr   r   r   r   Úis_osx_framework2   s   r   )Ú	functoolsr   Úsiter	   r   ÚtypingÚpip._internal.utilsr   Úpip._internal.utils.virtualenvr   Úuser_cache_dirÚUSER_CACHE_DIRÚget_pathr   ÚOptionalÚstrÚ__annotations__r   r   Úgetusersitepackagesr   ÚAttributeErrorÚ	USER_SITEÚ	lru_cacher   r   r   r   r   r   Ú<module>   s&   
 

ÿ
   domain)s The e-mail address and/or password you specified are not correct. The e-mail address is not assigned to any user account The following e-mail addresses are associated with your account: The password reset link was invalid, possibly because it has already been used.  Please request a <a href="%(passwd_reset_url)s">new password reset</a>. The password reset token was invalid. The social account has been connected. The social account has been disconnected. The social account is already connected to a different account. The username and/or password you specified are not correct. This account is currently inactive. This account is inactive. This e-mail address is already associated with another account. This e-mail address is already associated with this account. This e-mail confirmation link expired or is invalid. Please <a href="%(email_url)s">issue a new e-mail confirmation request</a>. This part of the site requires us to verify that
you are who you claim to be. For this purpose, we require that you
verify ownership of your e-mail address.  Too many failed login attempts. Try again later. Unverified Username Username can not be used. Please use other username. Username or e-mail Verified Verify Your E-mail Address Warning: We are sorry, but the sign up is currently closed. You are about to use your %(provider_name)s account to login to
%(site_name)s. As a final step, please complete the following form: You can sign in to your account using any of the following third party accounts: You cannot remove your primary e-mail address (%(email)s). You currently do not have any e-mail address set up. You should really add an e-mail address so you can receive notifications, reset your password, etc. You currently have no social network accounts connected to this account. You decided to cancel logging in to our site using one of your existing accounts. If this was a mistake, please proceed to <a href="%(login_url)s">sign in</a>. You have confirmed %(email)s. You have signed out. You must type the same email each time. You must type the same password each time. Your account has no password set up. Your account has no verified e-mail address. Your password is now changed. Your primary e-mail address must be verified. change password client id created date joined e-mail address email address email addresses email confirmation email confirmations expires at extra data field labelLogin key last login name or primary provider secret key sent social account social accounts social application social application token social o
    <÷[b  ã                   @   sº   d dl Z d dlZd dlZd dlZd dlZd dlmZmZ e  e	¡Z
e d¡ZdefddZdefddZdefd	d
Zdeee  fddZdefddZdefddZdefddZdS )é    N)ÚListÚOptionalz8include-system-site-packages\s*=\s*(?P<value>true|false)Úreturnc                   C   s   t jtt dt jkS )znChecks if sys.base_prefix and sys.prefix match.

    This handles PEP 405 compliant virtual environments.
    Úbase_prefix)ÚsysÚprefixÚgetattr© r	   r	   úaE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\virtualenv.pyÚ_running_under_venv   s   r   c                   C   s
   t tdS )zmChecks if sys.real_prefix is set.

    This handles virtual environments created with pypa's virtualenv.
    Zreal_prefix)Úhasattrr   r	   r	   r	   r
   Ú!_running_under_regular_virtualenv   s   
r   c                   C   s   t  pt S )zBReturn True if we're running inside a virtualenv, False otherwise.)r   r   r	   r	   r	   r
   Úrunning_under_virtualenv   s   r   c                  C   sf   t j tjd¡} z t| dd}| ¡  ¡ W  d   W S 1 s!w   Y  W dS  ty2   Y dS w )zReads {sys.prefix}/pyvenv.cfg and returns its contents as list of lines

    Returns None, if it could not read/access the file.
    z
pyvenv.cfgzutf-8)ÚencodingN)	ÚosÚpathÚjoinr   r   ÚopenÚreadÚ
splitlinesÚOSError)Zpyvenv_cfg_fileÚfr	   r	   r
   Ú_get_pyvenv_cfg_lines$   s   
(ÿÿr   c                  C   sP   t  } | du rt d¡ dS | D ]}t |¡}|dur%| d¡dkr% dS qdS )aZ  Check `{sys.prefix}/pyvenv.cfg` for system site-packages inclusion

    PEP 405 specifies that when system site-packages are not supposed to be
    visible from a virtual environment, `pyvenv.cfg` must contain the following
    line:

        include-system-site-packages = false

    Additionally, log a warning if accessing the file fails.
    NzCould not access 'pyvenv.cfg' despite a virtual environment being active. Assuming global site-packages is not accessible in this environment.TÚvalueÚfalseF)r   ÚloggerÚwarningÚ#_INCLUDE_SYSTEM_SITE_PACKAGES_REGEXÚmatchÚgroup)Z	cfg_linesÚliner   r	   r	   r
   Ú_no_global_under_venv3   s   ÿ
r!   c                  C   s0   t j t j tj¡¡} t j | d¡}t j |¡S )zÅCheck if "no-global-site-packages.txt" exists beside site.py

    This mirrors logic in pypa/virtualenv for determining whether system
    site-packages are visible in the virtual environment.
    zno-global-site-packages.txt)r   r   ÚdirnameÚabspathÚsiteÚ__file__r   Úexists)Zsite_mod_dirZno_global_site_packages_filer	   r	   r
   Ú#_no_global_under_regular_virtualenvP   s   þr'   c                   C   s   t  rt S t rt S dS )zHReturns a boolean, whether running in venv with no system site-packages.F)r   r!   r   r'   r	   r	   r	   r
   Úvirtualenv_no_global^   s
   r(   )Úloggingr   Úrer$   r   Útypingr   r   Ú	getLoggerÚ__name__r   Úcompiler   Úboolr   r   r   Ústrr   r!   r'   r(   r	   r	   r	   r
   Ú<module>   s"    
ÿ	                                                                                                                                                                                                                                                                                                            i de sessiÃ³ amb xarxa social"

#: templates/socialaccount/authentication_error.html:10
msgid ""
"An error occurred while attempting to login via your social network account."
msgstr ""
"S'ha produÃ¯t un error intentant iniciar sessiÃ³ a travÃ©s del vostre compte de "
"xarxa social."

#: templates/socialaccount/connections.html:5
#: templates/socialaccount/connections.html:8
msgid "Account Connections"
msgstr "Connexions de Compte"

#: templates/socialaccount/connections.html:11
msgid ""
"You can sign in too
    :÷[bâ  ã                   @   s   d Z g d¢ZG dd dZdS )zº
For types associated with installation schemes.

For a general overview of available schemes and their context, see
https://docs.python.org/3/install/index.html#alternate-installation.
©ÚplatlibÚpurelibÚheadersÚscriptsÚdatac                   @   s6   e Zd ZdZeZdedededededdfd	d
ZdS )ÚSchemeztA Scheme holds paths which are used as the base directories for
    artifacts associated with a Python package.
    r   r   r   r   r   ÚreturnNc                 C   s"   || _ || _|| _|| _|| _d S )Nr   )Úselfr   r   r   r   r   © r
   ú^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\models\scheme.pyÚ__init__   s
   
zScheme.__init__)Ú__name__Ú
__module__Ú__qualname__Ú__doc__ÚSCHEME_KEYSÚ	__slots__Ústrr   r
   r
   r
   r   r      s     þýüûúùr   N)r   r   r   r
   r
   r
   r   Ú<module>   s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   e correu electrÃ²nic principal ha de ser verificada."

#: templates/account/password_change.html:5
#: templates/account/password_change.html:8
#: templates/account/password_change.html:13
#: templates/account/password_reset_from_key.html:4
#: templates/account/password_reset_from_key.html:7
#: templates/account/password_reset_from_key_done.html:4
#: templates/account/password_reset_from_key_done.html:7
msgid "Change Password"
msgstr "Canviar Contrasenya"

#: templates/account/password_reset.html:6
#: templates/account/password_reset.html:10
#: templates/account/password_reset_done.html:6
#: templates/account/password_reset_done.html:9
msgid "Password Reset"
msgstr "Restablir Contrasenya"

#: templates/account/password_reset.html:15
msgid ""
"Forgotten your password? Enter your e-mail address below, and we'll send you "
"an e-mail allowing you to reset it."
msgstr ""
"Heu oblidat la vostra contrasenya? IntroduÃ¯u el vostre correu electrÃ²nic i "
"us enviarem un correu que us permetrÃ  restablir-la."

#: templates/account/password_reset.html:20
msgid "Reset My Password"
msgstr "Restablir la meva contrasenya"

#: templates/account/password_reset.html:23
msgid "Please contact us if you have any trouble resetting your password."
msgstr ""
"Si us plau contacteu-nis si teniu algun problema per restablir la vostra "
"contrasenya."

#: templates/account/password_reset_done.html:15
msgid ""
"We have sent you an e-mail. If you have not received it please check your "
"spam folder. Otherwise contact us if you do not receive it in a few minutes."
msgstr ""
"Us hem enviat un correu electrÃ²nic. Si us plau contacteu-nos si no el rebeu "
"en uns minuts."

#: templates/account/password_reset_from_key.html:7
msgid "Bad Token"
msgstr ""

#: templates/account/password_reset_from_key.html:11
#, python-format
msgid ""
"The password reset link was invalid, possibly because it has already been "
"used.  Please request a <a href=\"%(passwd_reset_url)s\">new password reset</"
"a>."
msgstr ""
"L'enllaÃ§ per restablir la contrasenya Ã©s invÃ lid, probablement porquÃ¨ ja ha "
"estat utilitzat. Si us plau soliciteu <a href=\"%(passwd_reset_url)s"
"\">restablir la contrasenya novament</a>."

#: templates/account/password_reset_from_key.html:16
msgid "change password"
msgstr "canviar la contrasenya"

#: templates/account/password_reset_from_key_done.html:8
msgid "Your password is now changed."
msgstr "La vostra contrasenya ha canviat."

#: templates/account/password_set.html:5 templates/account/password_set.html:8
#: templates/account/password_seo
    @÷[bò  ã                   @   s   d dl Z d dlZd dlZd dlmZ d dlmZ d dlmZ d dlmZ d dlm	Z	 d dlm
Z
 ejdejd	Ze d
¡ZG dd deZdS )é    N)Úsleep)ÚAttemptManager)ÚBaseRetrying)Ú	DoAttempt)ÚDoSleep)ÚRetryCallStateÚ	WrappedFn)ÚboundÚ_RetValTc                       s¦   e Zd Zefdejegejf dejddf fddZ	dejdeje
 f d	ejdejde
fd
dZdddZdejeejf fddZdedef fddZ  ZS )ÚAsyncRetryingr   ÚkwargsÚreturnNc                    s   t  jdi |¤ || _d S )N© )ÚsuperÚ__init__r   )Úselfr   r   ©Ú	__class__r   ú`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\_asyncio.pyr   "   s   
zAsyncRetrying.__init__Úfn.Úargsc                 Ï   s¢   |   ¡  t| |||d}	 | j|d}t|tr<z||i |¤I d H }W n ty5   | t ¡ ¡ Y qPw | 	|¡ nt|t
rN| ¡  |  |¡I d H  n|S q)N)Úretry_objectr   r   r   T©Úretry_state)Úbeginr   ÚiterÚ
isinstancer   ÚBaseExceptionÚset_exceptionÚsysÚexc_infoÚ
set_resultr   Úprepare_for_next_attemptr   )r   r   r   r   r   ÚdoÚresultr   r   r   Ú__call__&   s"   
ÿ
ózAsyncRetrying.__call__c                 C   s   |   ¡  t| d di d| _| S )Nr   )r   r   r   )r   r   Ú_retry_state)r   r   r   r   Ú	__aiter__>   s   zAsyncRetrying.__aiter__c                 Ã   s`   	 | j | jd}|d u rtt|trt| jdS t|tr-| j ¡  |  |¡I d H  n|S q)NTr   )	r   r&   ÚStopAsyncIterationr   r   r   r   r"   r   )r   r#   r   r   r   Ú	__anext__C   s   


özAsyncRetrying.__anext__c                    sJ   t    ¡ t  ¡dtjdtjdtjf fdd} j|_ j|_|S )Nr   r   r   c                     s    | i |¤I d H S )Nr   )r   r   ©r   r   r   Úasync_wrappedT   s   z*AsyncRetrying.wraps.<locals>.async_wrapped)r   ÚwrapsÚ	functoolsÚtypingÚAnyÚretryÚ
retry_with)r   r   r+   r   r*   r   r,   P   s   "zAsyncRetrying.wraps)r   r   )Ú__name__Ú
__module__Ú__qualname__r   r.   ÚCallableÚfloatÚ	Awaitabler/   r   r
   r%   r'   ÚUnionr   r)   r   r,   Ú__classcell__r   r   r   r   r   !   s    .þýü
û
r   )r-   r   r.   Zasyncior   Úpip._vendor.tenacityr   r   r   r   r   ÚTypeVarr5   r   r
   r   r   r   r   r   Ú<module>   s   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ;¦ÁSÝ­J  âzx[°õlô²çsÏù3@ßþ={T°fi«SJêu e¿³ûÒdw1³-L´Ø(³¯×4­­/e¸pM!åüx'Rê^åÊë®õë(1? â2.6³÷ÖøFÜ*À    	P   §#ä*ÿ  	ÿ^î'YÔòÉGÛ2H;?¼'Ó¦Üÿ&¢´±ô«r÷kR¨  øâÆì@"¢jÖÝCF^0I¿êù ôànC¬(KwD¢+¡qô?,p}DB¯Û5AÔZ¶#16uìëmxk$UÛã¢ajKHxì¶@õyI53¶?:+/ éÁ.º1Ëã¼¤=£Ó*ó¼p !ÿÿÿÿÿÆ n0d   Áy|qñ/-²$¹Ýñæóê:äô>
¬«àè@ÜhDdÁÚÅ¬fÞÒôd¤lÿÜªûR¿¼§À2Üßã?* 4¡_ð.Áéq¯S»¶Æ
} Ú)#!²M*úxQ·×Æ16w<ç(!­Y¹Û¨eM> [é¼lQ°mÅá·¾\­Ô»5l\±;aËîðrÍO ueÎ8ùÚ`/»EUe3zîSiZ§È§sÞ¹m^Yv±¯"3S*ùW1V/Tæ£,1,Z÷p´c½$Õe}ÕãTâ$ÆÈØµÙª`~À  òøãâ^[d                WúwÒñZP© Í,_ùé¹@  s   	0   ¬a)«ÿü  u.Ü$$r\ê÷Pm ?,¿ÒÕh¸ÁC;¦ÁSÝ­J  âzx[°õlô²çsÏù3@ßþ={T°fi«SJêu e¿³ûÒdw1³-L´Ø(³¯×4­­/e¸pM!åüx'Rê^åÊë®õë(1? â2.6³÷ÖøFÜ*À    	P   §'ä*ÿ  	ÿ^î'YÔòÉGÛ2H;?¼'Ó¦Üÿ&¢´±ô«r÷kR¨  øâÆì@"¢jÖÝCF^0I¿êù ôànC¬(KwD¢+¡qô?,p}DB¯Û5AÔZ¶#16uìëmxk$UÛã¢ajKHxì¶@õyI53¶?:+/ éÁ.º1Ëã¼¤=£Ó*ó¼p !ÿÿÿÿÿÆ nYP   o
    @÷[bt  ã                   @   sf   d dl Z d dlmZ e jrd dlZd dlmZ dddZ		dd
ddedede j	dgdf fddZ
dS )é    N)Ú_utils)ÚRetryCallStateÚretry_stater   Úreturnc                 C   s   dS )z'Before call strategy that does nothing.N© )r   r   r   údE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\before_sleep.pyÚbefore_sleep_nothing   s    r   FÚloggerzlogging.LoggerÚ	log_levelÚexc_infoc                    s   d fdd}|S )z:Before call strategy that logs to some logger the attempt.r   r   r   Nc                    s   | j jr | j  ¡ }d|jj d| }} r| j  ¡ }q*d}n
d| j  ¡ }}d}jdt | j	¡ d| j
j d| d| d		|d
 d S )NZraisedz: FZreturnedz	Retrying z in z seconds as it ú Ú.)r   )ÚoutcomeÚfailedÚ	exceptionÚ	__class__Ú__name__ÚresultÚlogr   Úget_callback_nameÚfnÚnext_actionÚsleep)r   ÚexZverbÚvalueZlocal_exc_info©r   r
   r	   r   r   Úlog_it&   s&   
ÿÿÿ
üz before_sleep_log.<locals>.log_it©r   r   r   Nr   )r	   r
   r   r   r   r   r   Úbefore_sleep_log   s   r   r   )F)ÚtypingÚpip._vendor.tenacityr   ÚTYPE_CHECKINGÚloggingr   r   ÚintÚboolÚCallabler   r   r   r   r   Ú<module>   s    
ýÿþýü                                                                                                                                ame)s. GrÃ cies per utilitzar %(site_name)s!
%(site_domain)s El correu electrÃ²nic i/o la contrasenya que heu especificat no sÃ³n correctes. El correu electrÃ²nic no estÃ  assignat a cap compte d'usuari Les segÃ¼ents adreces de correu electrÃ²nic estan associades al vostre compte: L'enllaÃ§ per restablir la contrasenya Ã©s invÃ lid, probablement porquÃ¨ ja ha estat utilitzat. Si us plau soliciteu <a href="%(passwd_reset_url)s">restablir la contrasenya novament</a>. El token per reiniciar la contrasenya no Ã©s vÃ lid. El compte de xarxa social ha estat connectat. El compte de xarxa social s'ha desconnectat. El compte de xarxa social ja estÃ  connectada a un compte diferent. L'usuari i/o la contrasenya que heu especificat no sÃ³n correctes. Ara mateix aquest compte estÃ  inactiu. Aquest compte estÃ  inactiu. Aquest correu electrÃ²nic ja estÃ  associat amb un altre compte. Aquest correu electrÃ²nic ja estÃ  associat amb aquest compte. Aquest enllaÃ§ de verificaciÃ³ de correu electrÃ²nic ha expirat o Ã©s invÃ lid. Si us plau, <a href="%(email_url)s">solÂ·liciteu una nova verificaciÃ³ per correu electrÃ²nic.</a>. Aquesta part del lloc web requereix que verifiquem que sou qui dieu ser. Per aixÃ² us requerim que verifiqueu la propietat del vostre correu electrÃ²nic.  Massa intents fallits. Intenteu-ho de nou mÃ©s tard. Sense verificar Nom d'usuari Aquest nom d'usuari no pot ser emprat. Si us plau utilitzeu-ne un altre. Nom d'usuari o correu electrÃ²nic Verificat Verifiqueu la vostra direcciÃ³ de correu electrÃ²nic AdvertÃ¨ncia: Ho sentim, en aquest moment el registre estÃ¡ tancat. Us hem enviat un correu electrÃ²nic per la vostra
verificaciÃ³. Si us plau accediu al link dins el correu electrÃ²nic. Si no veieu el correu de verificaciÃ³ a la vostra bÃºstia principal, comproveu la carpeta d'spam. D'altra banda
contacteu-nos si no el rebeu en uns minuts. Us hem enviat un correu electrÃ²nic per la seva verificaciÃ³. Seguiu l'enllaÃ§ per completar el procÃ©s de registre. Si us plau contacteu-nos si no el rebeu en uns minuts. Us hem enviat un correu electrÃ²nic. Si us plau contacteu-nos si no el rebeu en uns minuts. Esteu a punt de connectar un nou compte extern des de %(provider)s. Esteu a punt d'iniciar sessiÃ³ utilitzant un compte extern des de %(provider)s. Esteu a punt d'utilitzar el vostre compte de %(provider_name)s per iniciar sessiÃ³ a
%(site_name)s. Com a pas final, si us plau completeu el segÃ¼ent formulari: Has rebut aquest correu electrÃ²nic perquÃ¨ vosaltres o algÃº altre heu solÂ·licitat una
contrasenya per al voso
    @÷[bØ  ã                   @   sf   d dl Z d dlmZ e jrd dlZd dlmZ dddZ		dd
ddedede j	dgdf fddZ
dS )é    N)Ú_utils)ÚRetryCallStateÚretry_stater   Úreturnc                 C   s   dS )z&After call strategy that does nothing.N© ©r   r   r   ú]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\after.pyÚafter_nothing   s    r	   ú%0.3fÚloggerzlogging.LoggerÚ	log_levelÚ
sec_formatc                    s   d fdd}|S )zBAfter call strategy that logs to some logger the finished attempt.r   r   r   Nc                    s:      dt | j¡ d| j  dt | j¡ d¡ d S )NzFinished call to 'z' after z(s), this was the z time calling it.)Úlogr   Úget_callback_nameÚfnÚseconds_since_startÚ
to_ordinalÚattempt_numberr   ©r   r   r   r   r   Úlog_it&   s   ÿ
þþzafter_log.<locals>.log_it©r   r   r   Nr   )r   r   r   r   r   r   r   Ú	after_log   s   r   r   )r
   )ÚtypingÚpip._vendor.tenacityr   ÚTYPE_CHECKINGÚloggingr   r	   ÚintÚstrÚCallabler   r   r   r   r   Ú<module>   s    
ýÿþýü                                                                                                                                                                                                                                                                                                                    mary e-mail address must be verified. change password client id created date joined e-mail address email address email addresses email confirmation email confirmations expires at extra data field labelLogin key last login name or primary provider secret key sent social account social accounts social application social application token social application tokens social applications token secret user verified you are already logged in as %(user_display)s. Project-Id-Version: django-allauth
Report-Msgid-Bugs-To: 
PO-Revision-Date: YEAR-MO-DA HO:MI+ZONE
Last-Translator: Marc SeguÃ­ Coll <metarizard@gmail.com>
Language-Team: CatalÃ  
Language: ca
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=2; plural=(n != 1);
 "oauth_token" (OAuth1) o token d'accÃ©s (OAuth2) "oauth_token_secret" (OAuth1) o token de refrescament (OAuth2) <strong>Nota:</strong> encara podeu <a href="%(email_url)s">canviar la vostra adreÃ§a de correu electrÃ²nic</a>. Un usuari ja ha estat registrat amb aquesta direcciÃ³ de correu electrÃ²nic. frase secrete de API, frase secreta client o frase secreta de consumidor Connexions de Compte Compte inactiu Comptes Afegir correu electrÃ²nic Afegir adreÃ§a de correu electrÃ²nic Afegir un compte d'una xarxa social externa Ja teniu un compte? Si us plau <a href="%(login_url)s">inicieu sessiÃ³</a>. Ja existeix un compte associat a aquesta adreÃ§a de correu electrÃ²nic. Si us plau, primer identifiqueu-vos utilitzant aquest compte, i desprÃ©s vinculeu el vostre compte %s. S'ha produÃ¯t un error intentant iniciar sessiÃ³ a travÃ©s del vostre compte de xarxa social. Identificador de App o clau de consumidor Esteu segurs de voler tancar sessiÃ³? Canviar Contrasenya Confirmar Confirmar adreÃ§a de correu electrÃ²nic Correu electrÃ²nic de confirmaciÃ³ enviat a %(email)s. Connectar %(provider)s Continuar Contrasenya actual Esteu segurs de voler eliminar l'adreÃ§a de correu electrÃ²nic seleccionada? Correu electrÃ²nic Correu electrÃ²nic (un altre cop) Correu electrÃ²nic (opcional) Adreces de correu electrÃ²nic Correu electrÃ²nic ConfirmaciÃ³ de direcciÃ³ de correu electrÃ²nic Heu oblidat la vostra contrasenya? Heu oblidat la vostra contrasenya? IntroduÃ¯u el vostre correu electrÃ²nic i us enviarem un correu que us permetrÃ  restablir-la. Hola des de %(site_name)s! Si encara no heu creat un compte, llavors si us plau
<a href="%(signup_url)s">registreu-vos</a> primer. En cas d'haver-lo oblidat, el vostre nom d'usuari Ã©s %(username)s. Dades de perfil invÃ lideso
    @÷[b`  ã                   @   s^   d dl Z d dlmZ e jrd dlZd dlmZ dddZd	d
dede jdgdf fddZ	dS )é    N)Ú_utils)ÚRetryCallStateÚretry_stater   Úreturnc                 C   s   dS )z'Before call strategy that does nothing.N© ©r   r   r   ú^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\before.pyÚbefore_nothing   s    r	   Úloggerzlogging.LoggerÚ	log_levelc                    s   d fdd}|S )z:Before call strategy that logs to some logger the attempt.r   r   r   Nc              	      s.      dt | j¡ dt | j¡ d¡ d S )NzStarting call to 'z', this is the z time calling it.)Úlogr   Úget_callback_nameÚfnÚ
to_ordinalÚattempt_numberr   ©r   r
   r   r   Úlog_it"   s   
ÿþzbefore_log.<locals>.log_it©r   r   r   Nr   )r
   r   r   r   r   r   Ú
before_log   s   r   r   )
ÚtypingÚpip._vendor.tenacityr   ÚTYPE_CHECKINGÚloggingr   r	   ÚintÚCallabler   r   r   r   r   Ú<module>   s   
&                                                                                                                                                                                                                                                                                                                                                                                                                                              ication Remember Me Remove Removed e-mail address %(email)s. Reset My Password Set Password Sign In Sign In Via %(provider)s Sign Out Sign Up Sign Up Closed Signup Social Accounts Social Network Login Failure Successfully signed in as %(name)s. Thank you for using %(site_name)s!
%(site_domain)s The e-mail address and/or password you specified are not correct. The e-mail address is not assigned to any user account The following e-mail addresses are associated with your account: The password reset link was invalid, possibly because it has already been used.  Please request a <a href="%(passwd_reset_url)s">new password reset</a>. The password reset token was invalid. The social account has been connected. The social account has been disconnected. The social account is already connected to a different account. The username and/or password you specified are not correct. This account is currently inactive. This account is inactive. This e-mail address is already associated with another account. This e-mail address is already associated with this account. This e-mail confirmation link expired or is invalid. Please <a href="%(email_url)s">issue a new e-mail confirmation request</a>. This part of the site requires us to verify that
you are who you claim to be. For this purpose, we require that you
verify ownership of your e-mail address.  Too many failed login attempts. Try again later. Unverified Username Username can not be used. Please use other username. Username or e-mail Verified Verify Your E-mail Address Warning: We are sorry, but the sign up is currently closed. We have sent an e-mail to you for
verification. Please click on the link inside that e-mail. If you do not see the verification e-mail in your main inbox, check your spam folder. Otherwise
contact us if you do not receive it within a few minutes. We have sent an e-mail to you for verification. Follow the link provided to finalize the signup process. If you do not see the verification e-mail in your main inbox, check your spam folder. Please contact us if you do not receive the verification e-mail within a few minutes. We have sent you an e-mail. If you have not received it please check your spam folder. Otherwise contact us if you do not receive it in a few minutes. You are about to connect a new third party account from %(provider)s. You are about to sign in using a third party account from %(provider)s. You are about to use your %(provider_name)s account to login to
%(site_name)s. As a final step, please complete the following form: You are receiving thiso
    @÷[b  ã                   @   s`   d dl Z d dlZe jd ZdedefddZdedefddZd	ejd
ej	f defddZ
dS )é    Né   Úpos_numÚreturnc                 C   sT   | dkrdS | dkrdS | dkrdS | dkrdS d	|   kr#d
kr$dS  t | d S )Nr   Úthé   Ústr   Úndé   Úrdé   é   é
   ©Úfind_ordinal©r   © r   ú^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\_utils.pyr      s   ÿr   c                 C   s   |  t |  S )Nr   r   r   r   r   Ú
to_ordinal*   s   r   Úcb.c                 C   s   g }z|  | j¡ W n ty%   z|  | j¡ W n	 ty"   Y nw Y nw |s,t| S z| jr7| d| j¡ W n	 tyA   Y nw d |¡S )znGet a callback fully-qualified name.

    If no name can be produced ``repr(cb)`` is called and returned.
    r   Ú.)ÚappendÚ__qualname__ÚAttributeErrorÚ__name__ÚreprÚ
__module__ÚinsertÚjoin)r   Úsegmentsr   r   r   Úget_callback_name.   s*   ÿýÿ
r   )ÚsysÚtypingÚmaxsizeÚMAX_WAITÚintÚstrr   r   ÚCallableÚAnyr   r   r   r   r   Ú<module>   s   
"                                                                                                                                                                                                                                                                                                                        .     /  g   :/  C   ¢/     æ/  =   0  D   ?0     0     0     ¦0     ¾0     Ï0  &   é0  )   1  0   :1     k1     p1     1     1     ¬1  ,   Â1  6   ï1     &2  !   F2  =   h2     ¦2  U   ,3  ±   3  2   44  	   g4  2   q4     ¤4     º4     Æ4  &   Ï4     ö4     5     )5      95     Z5     i5     v5     5     5  )   ­5  /   ×5  5   6  O   =6  =   6  N   Ë6  »   7  4   Ö7  -   8  ,   98  C   f8  B   ª8  '   í8     9  @   29  >   s9  ³   ²9     f:  4   ;     6;     F;  H   S;  !   ;  	   ¾;  4   È;     ý;  5   <    A<  «   T=  [    >  C   \>  O    >      ð>  ¤  ?  ?   6A  <   vA  E   ³A  ±   ùA  G   «B  ¹   óB     ­C     ÆC  5   ÚC  /   D  Ö   @D  !  E  1   9F  8   kF  !   ¤F  G   ÆF     G     %G     :G     @G     UG     hG     {G  "   G  #   ³G  	   ×G     áG     íG     ýG     H     H     H  	    H  
   *H     5H     BH     IH     `H     zH  "   H  #   ¸H     ÜH     úH     I  	   I  .   "I     <       o   7                       L   K   	   D      J             }   q       0   )   j       1         d   ]             Q      ,   g   %             F      V           (            P   E                I               n               @      "      O      M   8              R       A      Y       ^             m         e       [   G   U          +      S   5   =   X               u       '          l           b      `              Z   t          ~   *          :   C       3      {   6   9   ;   h      \       r   .          T          s              >   x   i   v   f   p      /         y                                 !       B   N   w   ?       4       #   
       z                         $   c      a          &      H       -          W   |       _   2      k    "oauth_token" (OAuth1) or access token (OAuth2) "oauth_token_secret" (OAuth1) or refresh token (OAuth2) <strong>Note:</strong> you can still <a href="%(email_url)s">change your e-mail address</a>. A user is already registered with this e-mail address. API secret, client secret, or consumer secret Account Connections Account Inactive Accounts Add E-mail Add E-mail Address Add a 3rd Party Account Already have an account? Then please <a href="%(login_url)s">sign in</a>. An account already exists with this e-mail address. Please sign in to that account first, then connect your %s account. An error occurred while attempting to login via your social network account. App ID, or consumer key Are you sure you want to sign out?INDX( 	 ¿²`           (   P  è       ØØ                  ÏD
     l     ÇD
    Ù&ÊLRØÙ&ÊLRØÊLRØÙ&ÊLRØ       Ì               a f t e r . c p y t h o n - 3 1 0 . p y c c  ÎD
     n     ÇD
    Ù&ÊLRØÙ&ÊLRØÙ&ÊLRØÙ&ÊLRØ       R               b e f o r e . c p y t h o n - 3 1 0 . p y c  ÐD
     z     ÇD
    ÊLRØÊLRØÊLRØÊLRØ                      b e f o r e _ s l e e p . c p y t h o n - 3 1 0 . p y c 
    ÊD
    x h     ÇD
    !c	ÊLRØ!c	ÊLRØcÄÊLR !c	ÊLRØ       ¬               n a p . c p y t h o n - 3 1 0 . p y c ÉD
     l     ÇD
    !c	ÊLRØ!c	ÊLRØ!c	ÊLRØ!c	ÊLRØ 0      ê                r e t r y . c p y t h o n - 3 1 0 . p y c p y ËD
     j     ÇD
    cÄÊLRØcÄÊLRØcÄÊLRØcÄÊLRØ       ®               s t o p . c p y t h o n - 3 1 0 . p y c . p y ÌD
     j     ÇD
    Ù&ÊLRØÙ&ÊLRØÙ&ÊLRØÙ&ÊLRØ                       w a i t . c p y t h o n - 3 1 0 . p y c . p y ÑD
     r     ÇD
    £ëÊLRØ£ëÊLRØ£ëÊLRØ£ëÊLR        3
               _ a s y n c i o . c p y t h o n - 3 1 0 . p y c 
    ÍD
     n     ÇD
    Ù&ÊLRØÙ&ÊLRØÙ&ÊLRØÙ&ÊLRØ       È               _ u t i l s . c p y t h o n - 3 1 0 . p y c y ÈD
     r     ÇD
    ÿÊLRØÿÊLRØÿÊLRØÿÊLRØ @      ó?               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         o
    @÷[bæ
  ã                   @   s¦   d dl Z d dlZejrd dlZd dlmZ G dd de jZG dd deZG dd deZ	G d	d
 d
eZ
e
 ZG dd deZG dd deZG dd deZdS )é    N)ÚRetryCallStatec                   @   s<   e Zd ZdZejdddefddZdd	d
ZdddZ	dS )Ú	stop_basez(Abstract base class for stop strategies.Úretry_stater   Úreturnc                 C   s   d S ©N© ©Úselfr   r   r   ú\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\stop.pyÚ__call__   s   zstop_base.__call__ÚotherÚstop_allc                 C   ó
   t | |S r   )r   ©r	   r   r   r   r
   Ú__and__    ó   
zstop_base.__and__Ústop_anyc                 C   r   r   )r   r   r   r   r
   Ú__or__#   r   zstop_base.__or__N)r   r   r   r   )r   r   r   r   )
Ú__name__Ú
__module__Ú__qualname__Ú__doc__ÚabcÚabstractmethodÚboolr   r   r   r   r   r   r
   r      s    
r   c                   @   ó4   e Zd ZdZdeddfddZdddefd	d
ZdS )r   z+Stop if any of the stop condition is valid.Ústopsr   Nc                 G   ó
   || _ d S r   ©r   ©r	   r   r   r   r
   Ú__init__*   r   zstop_any.__init__r   r   c                    ó   t  fdd| jD S )Nc                 3   ó    | ]}| V  qd S r   r   ©Ú.0Úx©r   r   r
   Ú	<genexpr>.   ó    z$stop_any.__call__.<locals>.<genexpr>)Úanyr   r   r   r&   r
   r   -   ó   zstop_any.__call__©r   r   r   r   r   r    r   r   r   r   r   r
   r   '   ó    r   c                   @   r   )r   z*Stop if all the stop conditions are valid.r   r   Nc                 G   r   r   r   r   r   r   r
   r    4   r   zstop_all.__init__r   r   c                    r!   )Nc                 3   r"   r   r   r#   r&   r   r
   r'   8   r(   z$stop_all.__call__.<locals>.<genexpr>)Úallr   r   r   r&   r
   r   7   r*   zstop_all.__call__r+   r   r   r   r
   r   1   r,   r   c                   @   s"   e Zd ZdZdddefddZdS )Ú_stop_neverzNever stop.r   r   r   c                 C   s   dS )NFr   r   r   r   r
   r   >   s   z_stop_never.__call__N)r   r   r   r   r   r   r   r   r   r
   r.   ;   s    r.   c                   @   s,   e Zd ZdZdddZdd	defd
dZdS )Ústop_when_event_setz!Stop when the given event is set.Úeventúthreading.Eventr   Nc                 C   r   r   )r0   )r	   r0   r   r   r
   r    H   r   zstop_when_event_set.__init__r   r   c                 C   s
   | j  ¡ S r   )r0   Úis_setr   r   r   r
   r   K   r   zstop_when_event_set.__call__)r0   r1   r   N)r   r   r   r   r    r   r   r   r   r   r
   r/   E   s    
r/   c                   @   r   )Ústop_after_attemptz.Stop when the previous attempt >= max_attempt.Úmax_attempt_numberr   Nc                 C   r   r   )r4   )r	   r4   r   r   r
   r    R   r   zstop_after_attempt.__init__r   r   c                 C   ó   |j | jkS r   )Úattempt_numberr4   r   r   r   r
   r   U   ó   zstop_after_attempt.__call__)r   r   r   r   Úintr    r   r   r   r   r   r
   r3   O   r,   r3   c                   @   r   )Ústop_after_delayz3Stop when the time from the first attempt >= limit.Ú	max_delayr   Nc                 C   r   r   )r:   )r	   r:   r   r   r
   r    \   r   zstop_after_delay.__init__r   r   c                 C   r5   r   )Úseconds_since_startr:   r   r   r   r
   r   _   r7   zstop_after_delay.__call__)r   r   r   r   Úfloatr    r   r   r   r   r   r
   r9   Y   r,   r9   )r   ÚtypingÚTYPE_CHECKINGÚ	threadingÚpip._vendor.tenacityr   ÚABCr   r   r   r.   Ú
stop_neverr/   r3   r9   r   r   r   r
   Ú<module>   s   



                                                                                  o
    @÷[bg  ã                   @   sB   d dl Z d dlZejrd dlZdeddfddZG dd dZdS )é    NÚsecondsÚreturnc                 C   s   t  | ¡ dS )z
    Sleep strategy that delays execution for a given number of seconds.

    This is the default strategy, and may be mocked out for unit testing.
    N)ÚtimeÚsleep)r   © r   ú[E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\tenacity\nap.pyr      s   r   c                   @   s2   e Zd ZdZdddZdeje ddfd	d
ZdS )Úsleep_using_eventz0Sleep strategy that waits on an event to be set.Úeventúthreading.Eventr   Nc                 C   s
   || _ d S )N)r	   )Úselfr	   r   r   r   Ú__init__%   s   
zsleep_using_event.__init__Útimeoutc                 C   s   | j j|d d S )N)r   )r	   Úwait)r   r   r   r   r   Ú__call__(   s   zsleep_using_event.__call__)r	   r
   r   N)	Ú__name__Ú
__module__Ú__qualname__Ú__doc__r   ÚtypingÚOptionalÚfloatr   r   r   r   r   r   "   s    
r   )r   r   ÚTYPE_CHECKINGÚ	threadingr   r   r   r   r   r   r   Ú<module>   s   	                                                                                                                                                                                                                                                                                                                                                    Ð·ÑÑÐ°Ð½Ð¾Ð²ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¿Ð°ÑÐ¾Ð»Ð°. "
"ÐÐ»Ð¸ÐºÐ½ÐµÑÐµ Ð»Ð¸Ð½ÐºÐ° Ð¿Ð¾-Ð´Ð¾Ð»Ñ Ð·Ð° Ð´Ð° Ð²ÑÐ·ÑÑÐ°Ð½Ð¾Ð²Ð¸ÑÐµ Ð²Ð°ÑÐ°ÑÐ° Ð¿Ð°ÑÐ¾Ð»Ð°."

#: templates/account/email/password_reset_key_message.txt:9
#, python-format
msgid "In case you forgot, your username is %(username)s."
msgstr "Ð ÑÐ»ÑÑÐ°Ð¹, ÑÐµ ÑÑÐµ Ð·Ð°Ð±ÑÐ°Ð²Ð¸Ð»Ð¸, Ð²Ð°ÑÐµÑÐ¾ Ð¿Ð¾ÑÑÐµÐ±Ð¸ÑÐµÐ»ÑÐºÐ¾ Ð¸Ð¼Ðµ Ðµ %(username)s."

#: templates/account/email/password_reset_key_subject.txt:3
#: templates/account/email/unknown_account_subject.txt:3
msgid "Password Reset E-mail"
msgstr "ÐÑÐ·ÑÑÐ°Ð½Ð¾Ð²ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¿Ð°ÑÐ¾Ð»Ð°"

#: templates/account/email/unknown_account_message.txt:4
#, python-format
msgid ""
"You are receiving this e-mail because you or someone else has requested a\n"
"password for your user account. However, we do not have any record of a "
"user\n"
"with email %(email)s in our database.\n"
"\n"
"This mail can be safely ignored if you did not request a password reset.\n"
"\n"
"If it was you, you can sign up for an account using the link below."
msgstr ""
"ÐÐ¾Ð»ÑÑÐ°Ð²Ð°ÑÐµ ÑÐ¾Ð·Ð¸ e-mail, Ð·Ð°ÑÐ¾ÑÐ¾ Ð²Ð¸Ðµ Ð¸Ð»Ð¸ Ð½ÑÐºÐ¾Ð¹ Ð´ÑÑÐ³ Ðµ Ð¿Ð¾Ð¸ÑÐºÐ°Ð» Ð¿Ð°ÑÐ¾Ð»Ð° Ð·Ð° Ð²Ð°ÑÐ¸Ñ "
"Ð¿Ð¾ÑÑÐµÐ±Ð¸ÑÐµÐ»ÑÐºÐ¸ Ð°ÐºÐ°ÑÐ½Ñ.\n"
"ÐÐ° ÑÑÑÐ²ÑÑÐ° Ð¾Ð±Ð°ÑÐµ Ð½Ðµ Ð±ÐµÑÐµ Ð½Ð°Ð¼ÐµÑÐµÐ½ Ð¿Ð¾ÑÑÐµÐ±Ð¸ÑÐµÐ» ÑÐ²ÑÑÐ·Ð²Ð°Ð½ Ñ ÐµÐ»ÐµÐºÑÑÐ¾Ð½Ð½Ð¸Ñ Ð°Ð´ÑÐµÑ %(email)s.\n"
"\nÐÐ¾Ð¶ÐµÑÐµ Ð´Ð° Ð¿ÑÐµÐ½ÐµÐ±ÑÐµÐ³Ð½ÐµÑÐµ ÑÐ¾Ð²Ð° Ð¿Ð¸ÑÐ¼Ð¾, Ð°ÐºÐ¾ Ð½Ðµ ÑÑÐµ Ð¿Ð¾Ð¸ÑÐºÐ°Ð»Ð¸ Ð²ÑÐ·ÑÑÐ°Ð½Ð¾Ð²ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð¿Ð°ÑÐ¾Ð»Ð°. "
"ÐÐ»Ð¸ÐºÐ½ÐµÑÐµ Ð»Ð¸Ð½ÐºÐ° Ð¿Ð¾-Ð´Ð¾Ð»Ñ, Ð·Ð° Ð´Ð° Ð½Ð°Ð¿ÑÐ°Ð²Ð¸ÑÐµ Ð½Ð¾Ð² Ð°ÐºÐ°ÑÐ½Ñ."

#: templates/account/email_confirm.html:6
#: templates/account/email_confirm.html:10
msgid "Confirm E-mail Address"
msgstr "ÐÐ¾ÑÐ²ÑÑÐ¶Ð´ÐµÐ½Ð¸Ðµ Ð½Ð° e-mail Ð°Ð´ÑÐµÑ"

#: templates/account/email_confirm.html:16
#, python-format
msgid ""
"Please confirm that <a href=\"mailto:%(email)s\">%(email)s</a> is an e-mail "
"address for user %(user_display)s."
msgstr ""
"ÐÐ¾Ð»Ñ, Ð¿Ð¾ÑÐ²ÑÑÐ´ÐµÑÐµ, ÑÐµ <a href=\"mailto:%(email)s\">%(email)s</a> Ðµ e-mail "
"Ð°Ð´ÑÐµÑ Ð½Ð° Ð¿Ð¾ÑÑÐµÐ±Ð¸ÑÐµÐ» %(user_display)s."

#: templates/account/email_confirm.html:20
msgid "Confirm"
msgstr "ÐÐ¾ÑÐ²ÑÑÐ´Ð¸"

#: templates/account/email_confirm.html:27
#, python-format
msgid ""
"This e-mail confirmation link expired or is invalid. Please <a href="
"\"%(email_url)s\">issue a new e-mail confirmation request</a>."
msgstr ""
"Ð¢Ð¾Ð·Ð¸ Ð»Ð¸Ð½Ðº Ð·Ð° Ð¿Ð¾ÑÐ²ÑÑÐ¶Ð´ÐµÐ½Ð¸Ðµ Ð½Ð° e-mail Ðµ Ð¸Ð·ÑÐµÐºÑÐ» Ð¸Ð»Ð¸ Ðo
    ;÷[b+  ã                   @   sò   U d Z ddlZddlZddlmZmZmZmZmZ ddl	m
Z
 ddlmZ dZG dd deZdaeed	< 		dd
eeef dee dededee dee ddfddZdddZddddedee dee dee dee ddfddZdS )zN
A module that implements tooling to enable easy warnings about deprecations.
é    N)ÚAnyÚOptionalÚTextIOÚTypeÚUnion)Úparse)Ú__version__zDEPRECATION: c                   @   s   e Zd ZdS )ÚPipDeprecationWarningN)Ú__name__Ú
__module__Ú__qualname__© r   r   úbE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\deprecation.pyr	      s    r	   Ú_original_showwarningÚmessageÚcategoryÚfilenameÚlinenoÚfileÚlineÚreturnc                 C   sb   |d urt d urt | ||||| d S d S t|tr&t d¡}| | ¡ d S t | ||||| d S )Nzpip._internal.deprecations)r   Ú
issubclassr	   ÚloggingÚ	getLoggerÚwarning)r   r   r   r   r   r   Úloggerr   r   r   Ú_showwarning   s   ÿ

r   c                   C   s,   t jdtdd td u rt jatt _d S d S )NÚdefaultT)Úappend)ÚwarningsÚsimplefilterr	   r   Úshowwarningr   r   r   r   r   Úinstall_warning_logger,   s
   
þr"   )Úfeature_flagÚissueÚreasonÚreplacementÚgone_inr#   r$   c                 C   s   |duot tt |k}| t df||sdndf|df||s!dndf|dfg}d d	d
 |D ¡}|r8t|tj|tdd dS )a   Helper to deprecate existing functionality.

    reason:
        Textual reason shown to the user about why this functionality has
        been deprecated. Should be a complete sentence.
    replacement:
        Textual suggestion shown to the user about what alternative
        functionality they can use.
    gone_in:
        The version of pip does this functionality should get removed in.
        Raises an error if pip's current version is greater than or equal to
        this.
    feature_flag:
        Command-line flag of the form --use-feature={feature_flag} for testing
        upcoming functionality.
    issue:
        Issue number on the tracker that would serve as a useful place for
        users to find related discussion and provide feedback.
    Nz{}z*pip {} will enforce this behaviour change.z*Since pip {}, this is no longer supported.zA possible replacement is {}.zEYou can use the flag --use-feature={} to test the upcoming behaviour.z@Discussion can be found at https://github.com/pypa/pip/issues/{}ú c                 s   s.    | ]\}}|d ur|d ur|  |¡V  qd S )N)Úformat)Ú.0ÚvalueZ
format_strr   r   r   Ú	<genexpr>n   s    ýý
ÿzdeprecated.<locals>.<genexpr>é   )r   Ú
stacklevel)r   Úcurrent_versionÚDEPRECATION_MSG_PREFIXÚjoinr	   r   Úwarn)r%   r&   r'   r#   r$   Zis_goneZmessage_partsr   r   r   r   Ú
deprecated7   s2   ÿüþÿüþî
þr3   )NN)r   N)Ú__doc__r   r   Útypingr   r   r   r   r   Zpip._vendor.packaging.versionr   Úpipr   r/   r0   ÚWarningr	   r   Ú__annotations__ÚstrÚintr   r"   r3   r   r   r   r   Ú<module>   sT    	ú
ÿþýüûú
ù
úþýüûúù                                                                                                                                                                                                                                                                               ÙØ¯ÙÙ Ø­Ø³Ø§Ø¨Ø ÙÙ ÙØ¶ÙÙ <a href=\"%(login_url)s\">ÙÙ Ø¨ØªØ³Ø¬ÙÙ Ø§ÙØ¯Ø®ÙÙ</a>."

#: templates/account/signup_closed.html:5
#: templates/account/signup_closed.html:8
msgid "Sign Up Closed"
msgstr "Ø§ÙØ§Ø´ØªØ±Ø§Ù ÙØºÙÙ"

#: templates/account/signup_closed.html:10
msgid "We are sorry, but the sign up is currently closed."
msgstr "ÙØ­Ù Ø¢Ø³ÙÙÙâª:â¬ Ø§ÙØ§Ø´ØªØ±Ø§Ù ÙØºÙÙ Ø­Ø§ÙÙØ§âª.â¬"

#: templates/account/snippets/already_logged_in.html:5
msgid "Note"
msgstr "ÙÙØ§Ø­Ø¸Ø©"
o
    ?÷[b´  ã                   @   s  d Z ddlmZ ddlmZ i dddddd	d
dddddddddddddddddddddd d!d"d#d$d%i d&d'd(d)d*d+d,d-d.d/d0d1d2d3d4d5d6d7d8d9d:d;d<d=d>d?d@dAdBdCdDdEdFdG¥dHdHdIdJdKdLdMdNdOdPdQ
¥ZdRdS ZdTdU ZdVS )Wz¼
    pygments.styles
    ~~~~~~~~~~~~~~~

    Contains built-in styles.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
é    )Úfind_plugin_styles)ÚClassNotFoundÚdefaultzdefault::DefaultStyleÚemacszemacs::EmacsStyleZfriendlyzfriendly::FriendlyStyleZfriendly_grayscalez*friendly_grayscale::FriendlyGrayscaleStyleZcolorfulzcolorful::ColorfulStyleZautumnzautumn::AutumnStyleZmurphyzmurphy::MurphyStyleZmannizmanni::ManniStyleZmaterialzmaterial::MaterialStyleÚmonokaizmonokai::MonokaiStyleZperldoczperldoc::PerldocStyleZpastiezpastie::PastieStyleZborlandzborland::BorlandStyleZtracztrac::TracStyleZnativeznative::NativeStyleZfruityzfruity::FruityStyleZbwzbw::BlackWhiteStyleÚvimzvim::VimStyleÚvszvs::VisualStudioStyleZtangoztango::TangoStyleZrrtzrrt::RrtStyleZxcodezxcode::XcodeStyleÚigorzigor::IgorStylezparaiso-lightz paraiso_light::ParaisoLightStylezparaiso-darkzparaiso_dark::ParaisoDarkStyleZlovelacezlovelace::LovelaceStyleZalgolzalgol::AlgolStyleZalgol_nuzalgol_nu::Algol_NuStyleÚarduinozarduino::ArduinoStyleZrainbow_dashzrainbow_dash::RainbowDashStyleÚabapzabap::AbapStylezsolarized-darkzsolarized::SolarizedDarkStylezsolarized-lightzsolarized::SolarizedLightStyleÚsaszsas::SasStylezstata_light::StataLightStylezstata_dark::StataDarkStylezinkpot::InkPotStylezzenburn::ZenburnStylezgruvbox::GruvboxDarkStylezgruvbox::GruvboxLightStylezdracula::DraculaStylezonedark::OneDarkStylezlilypond::LilyPondStyle)
Ústatazstata-lightz
stata-darkZinkpotZzenburnzgruvbox-darkzgruvbox-lightZdraculazone-darkÚlilypondc                 C   s¼   | t v rt |   d¡\}}d}nt D ]\}}| |kr|  S qd}| }|  ¡ d }ztd| d d |g}W n tyI   td| |oDd d w zt||W S  ty]   td	| w )
Nz::ÚyesÚ ÚStylezpygments.styles.zCould not find style module %rz, though it should be builtinÚ.z.Could not find style class %r in style module.)	Ú	STYLE_MAPÚsplitr   ÚtitleÚ
__import__ÚImportErrorr   ÚgetattrÚAttributeError)ÚnameÚmodÚclsÚbuiltinZ
found_nameÚstyle© r   úgE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\styles\__init__.pyÚget_style_by_name@   s0   ÿÿÿÿÿr!   c                  c   s&    t E dH  t D ]\} }| V  q	dS )zGReturn a generator for all styles by name,
    both builtin and plugin.N)r   r   )r   Ú_r   r   r    Úget_all_stylesX   s
   
ÿr#   N)Ú__doc__Úpip._vendor.pygments.pluginr   Úpip._vendor.pygments.utilr   r   r!   r#   r   r   r   r    Ú<module>   sª    
ÿþýüûúùø	÷
öõôóòñðïîíìëêéèçæåäãâá à!ß"Þ#Ô0                                                                                                                                                                                                                                                                                                                                                                               Ø§Ø­âª.â¬"

#: templates/account/messages/primary_email_set.txt:2
msgid "Primary e-mail address set."
msgstr "ØªÙÙ ØªØ¹ÙÙÙ Ø¹ÙÙØ§Ù Ø§ÙØ¨Ø±ÙØ¯ Ø§ÙØ§ÙÙØªØ±ÙÙÙ Ø§ÙØ±Ø¦ÙØ³Ùâª.â¬"

#: templates/account/messages/unverified_primary_email.txt:2
msgid "Your primary e-mail address must be verified."
msgstr "ÙØ§ Ø¨Ø¯ ÙÙ Ø§ÙØªØ­ÙÙ ÙÙ ØµØ­Ø© Ø§ÙØ¨Ø±ÙØ¯ Ø§ÙØ¥ÙÙØªØ±ÙÙÙâª.â¬"

#: templates/account/password_change.html:5
#: templates/account/password_change.html:8
#: templates/accouno
    ?÷[b   ã                   @   sl   d Z ddlZddlmZ ddlmZ ddlmZ ddlmZ e 	d¡Z
edZdd	 Zd
d ZdddZdS )a  
    pygments.regexopt
    ~~~~~~~~~~~~~~~~~

    An algorithm that generates optimized regexes for matching long lists of
    literal strings.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
é    N)Úescape)Úcommonprefix)Úgroupby)Ú
itemgetterz[\[\^\\\-\]]c                 C   s   dt  dd d | ¡¡ d S )Nú[c                 S   s   d|   ¡  S )Nú\)Úgroup)Úm© r
   ú`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\regexopt.pyÚ<lambda>   s    zmake_charset.<locals>.<lambda>Ú ú])Ú	CS_ESCAPEÚsubÚjoin)Zlettersr
   r
   r   Úmake_charset   s   r   c           	   	      s  |rdpd}| s
dS | d  t | dkr|t  | S  s-|t| dd d d | S t  dkrlg }g }| D ]}t |dkrG| |¡ q9| |¡ q9t |dkrl|rd|t|d d t| | S |t| | S t| }|rt ||t| tfd	d
| D d | S dd
 | D }t|}|r¶t ||ttfdd| D d t|ddd  | S |d dd t|  fddD ¡ | S )zEReturn a regex that matches any string in the sorted list of strings.ú)r   r   é   Nz(?:ú?ú|c                    s   g | ]}| d  qS ©Nr
   ©Ú.0Ús)Úplenr
   r   Ú
<listcomp>?   s    z#regex_opt_inner.<locals>.<listcomp>c                 S   s   g | ]	}|d d d qS )Néÿÿÿÿr
   r   r
   r
   r   r   B   s    c                 3   s    | ]
}|d    V  qd S r   r
   r   )Úslenr
   r   Ú	<genexpr>H   s    z"regex_opt_inner.<locals>.<genexpr>r   c                 s   s"    | ]}t t|d  dV  qdS )r   r   N)Úregex_opt_innerÚlist)r   r   r
   r
   r   r   M   s    ÿc                    s   | d  d kS )Nr   r
   )r   )Úfirstr
   r   r   N   s    z!regex_opt_inner.<locals>.<lambda>)	Úlenr   r    Úappendr   r   Úsortedr   r   )	ÚstringsZ
open_parenZclose_parenZ	oneletterÚrestr   ÚprefixZstrings_revÚsuffixr
   )r"   r   r   r   r       sj   ÿÿÿÿ
ÿþÿþþ
ÿÿýr    r   c                 C   s   t | } |t| d | S )zíReturn a compiled regex that matches any string in the given list.

    The strings to match must be literal strings, not regexes.  They will be
    regex-escaped.

    *prefix* and *suffix* are pre- and appended to the final regex.
    ú()r%   r    )r&   r(   r)   r
   r
   r   Ú	regex_optR   s   r+   )r   r   )Ú__doc__Úrer   Úos.pathr   Ú	itertoolsr   Úoperatorr   Úcompiler   ZFIRST_ELEMENTr   r    r+   r
   r
   r
   r   Ú<module>   s    
8                                                                                                                       provider"
msgstr "ÙØ²ÙØ¯"

#: socialaccount/models.py:47
msgid "name"
msgstr "Ø§Ø³Ù"

#: socialaccount/models.py:49
msgid "client id"
msgstr ""

#: socialaccount/models.py:51
msgid "App ID, or consumer key"
msgstr ""

#: socialaccount/models.py:54
msgid "secret key"
msgstr ""

#: socialaccount/models.py:57
msgid "API secret, client secret, or consumer secret"
msgstr ""

#: socialaccount/models.py:60
msgid "Key"
msgstr ""

#: socialaccount/models.py:77
msgid "social application"
msgstr "ØªØ·Ø¨ÙÙ Ø§Ø¬ØªÙØ§Ø¹Ù"

#: socialaccount/models.py:78
msgid "social applications"
msgstr "ØªØ·Ø¨ÙÙØ§Øª Ø§Ø¬ØªÙØ§Ø¹ÙØ©"

#: socialaccount/models.py:108
msgid "uid"
msgstr ""

#: socialaccount/models.py:110
msgid "last login"
msgstr "Ø£Ø®Ø± Ø¯Ø®ÙÙ"

#: socialaccount/models.py:111
msgid "date joined"
msgstr "ØªØ§Ø±ÙØ® Ø§ÙØ§ÙØ¶ÙØ§Ù"

#: socialaccount/models.py:112
msgid "extra data"
msgstr "Ø¨ÙØ§ÙØ§Øª Ø§Ø¶Ø§ÙÙØ©"

#: socialaccount/models.py:116
msgid "social account"
msgstr "Ø­Ø³Ø§Ø¨ ØªÙØ§ØµÙ Ø§Ø¬ØªÙØ§Ø¹Ù"o
    ?÷[b  ã                   @   s8   d Z d
ddZdd ZG dd dZG dd	 d	eZdS )zÍ
    pygments.filter
    ~~~~~~~~~~~~~~~

    Module that implements the default filter.

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
Nc                    s$    fdd}|D ]}||| } q| S )z¤
    Use this method to apply an iterable of filters to
    a stream. If lexer is given it's forwarded to the
    filter, otherwise the filter receives `None`.
    c                 3   s    |    |¡E d H  d S ©N)Úfilter)Úfilter_Ústream©Úlexer© ú^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\filter.pyÚ_apply   s   zapply_filters.<locals>._applyr   )r   Úfiltersr   r	   r   r   r   r   Úapply_filters   s   r   c                 C   s    t | jtft| d| j| dS )zÛ
    Decorator that converts a function into a filter::

        @simplefilter
        def lowercase(self, lexer, stream, options):
            for ttype, value in stream:
                yield ttype, value.lower()
    Ú
__module__)r   Ú__doc__Úfunction)ÚtypeÚ__name__ÚFunctionFilterÚgetattrr   )Úfr   r   r   Úsimplefilter   s
   
	ýr   c                   @   s    e Zd ZdZdd Zdd ZdS )ÚFilterzl
    Default filter. Subclass this class or use the `simplefilter`
    decorator to create own filters.
    c                 K   s
   || _ d S r   )Úoptions©Úselfr   r   r   r   Ú__init__/   s   
zFilter.__init__c                 C   s   t  r   )ÚNotImplementedError©r   r   r   r   r   r   r   2   s   zFilter.filterN)r   r   Ú__qualname__r   r   r   r   r   r   r   r   )   s    r   c                   @   s$   e Zd ZdZdZdd Zdd ZdS )r   zÑ
    Abstract class used by `simplefilter` to create simple
    function filters on the fly. The `simplefilter` decorator
    automatically creates subclasses of this class for
    functions passed to it.
    Nc                 K   s0   t | dstd| jj tj| fi |¤ d S )Nr   z%r used without bound function)ÚhasattrÚ	TypeErrorÚ	__class__r   r   r   r   r   r   r   r   ?   s
   
ÿzFunctionFilter.__init__c                 c   s    |   ||| j¡E d H  d S r   )r   r   r   r   r   r   r   E   s   zFunctionFilter.filter)r   r   r   r   r   r   r   r   r   r   r   r   6   s
    r   r   )r   r   r   r   r   r   r   r   r   Ú<module>   s
    
                                                                                                                                                                                                                                                                                                                                                                                                                                     ccount_inactive." + app_settings.TEMPLATE_EXTENSION


account_inactive = AccountInactiveView.as_view()


class EmailVerificationSentView(TemplateView):
    template_name = "account/verification_sent." + app_settings.TEMPLATE_EXTENSION


email_verification_sent = EmailVerificationSentView.as_view()
                                                                                                                                                                                                                     ¦ÁSÝ­J  âzxd"	_+Ç#Q¢ôû0¶)÷ù~¼/¦ºn}«dS°¨B%7\Qfoh\×'¹Hø%ZsbÌ|Ò
8ú?TüCÔÊLmõ«_A1W&     	P   rßä*ÿ  	ÿ^î'YÔòÉGÛ2H;?¼'Ó¦Üÿ&¢´±ô«r÷kR¨  øâÉcÆèèÔ¿Læ·g¢"wê`Ó_)SÇk^r½]y¸Ò\@éÿØ1ðR^wÖ\»9sÕëEo$	ÂÆªK^%¸¬þY­áLötü HÆø  p!=­aÐXH:
RÔ÷øù}ùññÍÍß|^¶wªÉç®¾ª¥m6¤Ä~÷H¸ ùoHLh-ÂBk>t£Ôz_è¹Ï^÷Ã"¯SUÚ¬çàó@tÂS-#6r¥Í}³xERÇN»	ùñý|ÿÜqÅ«ã±¬ñÿDÃ¨á¾Êë
\·/ü='Ä?PÍ('+{~ª>ø=F× vïM=ê¼5ÃÆdCõú
;Õ_ÂþiÂø}ez×g&´´R;È!Á
°ºbáL[e\ëc¾ÆÃõO¬k<vkõ}'6Í·æjzRCINDX( 	 }`           (   Ð  è       ØØ                  ¾D
     n     ²D
    i²øÉLRØi²øÉLRØi²øÉLRØi²øÉLRØ       [
               f i l t e r . c p y t h o n - 3 1 0 . p y c y ½D
     l     ²D
    i²øÉLRØi²øÉLRØi²øÉLRØi²øÉLRØ `      -_               l e x e r . c p y t h o n - 3 1 0 . p y c p y ·D
     r     ²D
    X)ïÉLRØX)ïÉLRØX)ïÉLRØX)ïÉLRØ       ¥               m o d e l i n e . c p y t h o n - 3 1 0 . p y c . 1 4 ¸D
     n     ²D
    X)ïÉLRØX)ïÉLRØX)ïÉLRØX)ïÉLR        ù               p l u g i n . c p y t h o n - 3 1 0 . p y c y ÁD
     r     ²D
    iwýÉLRØiwýÉLRØiwýÉLRØiwýÉLRØ                      r e g e x o p t . c p y t h o n - 3 1 0 . p y c 
    ÂD
     l     ²D
    iwýÉLRØiwýÉLRØiwýÉLRØiwýÉLRØ        à               s t y l e . c p y t h o n - 3 1 0 . p y c p y ºD
     l     ²D
    ñÉLRØñÉLRØñÉLRØñÉLRØ        (               t o k e n . c p y t h o n - 3 1 0 . p y c p y ¹D
     j     ²D
    ñÉLRØñÉLRØñÉLR ñÉLRØ 0      Ç#               u t i l . c p y t h o n - 3 1 0 . p y c . p y ³D
     r     ²D
    åÉLRØåÉLRØåÉLRØåÉLRØ       µ               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         o
    ?÷[b¿  ã                   @   s@   d Z dZdZdZdZdd Zdd Zd	d
 Zdd Zdd Z	dS )a0  
    pygments.plugin
    ~~~~~~~~~~~~~~~

    Pygments setuptools plugin interface. The methods defined
    here also work if setuptools isn't installed but they just
    return nothing.

    lexer plugins::

        [pygments.lexers]
        yourlexer = yourmodule:YourLexer

    formatter plugins::

        [pygments.formatters]
        yourformatter = yourformatter:YourFormatter
        /.ext = yourformatter:YourFormatter

    As you can see, you can define extensions for the formatter
    with a leading slash.

    syntax plugins::

        [pygments.styles]
        yourstyle = yourstyle:YourStyle

    filter plugin::

        [pygments.filter]
        yourfilter = yourfilter:YourFilter


    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
zpygments.lexerszpygments.formatterszpygments.styleszpygments.filtersc              	   C   s6   zddl m} W n ttfy   g  Y S w | | ¡S )Né    )Úpkg_resources)Úpip._vendorr   ÚImportErrorÚOSErrorÚiter_entry_points)Z
group_namer   © r   ú^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\plugin.pyr   +   s   ÿ
r   c                  c   s    t tD ]} |  ¡ V  qd S ©N)r   ÚLEXER_ENTRY_POINTÚload©Z
entrypointr   r   r   Úfind_plugin_lexers4   s   ÿr   c                  c   ó$    t tD ]
} | j|  ¡ fV  qd S r	   )r   ÚFORMATTER_ENTRY_POINTÚnamer   r   r   r   r   Úfind_plugin_formatters9   ó   ÿr   c                  c   r   r	   )r   ÚSTYLE_ENTRY_POINTr   r   r   r   r   r   Úfind_plugin_styles>   r   r   c                  c   r   r	   )r   ÚFILTER_ENTRY_POINTr   r   r   r   r   r   Úfind_plugin_filtersC   r   r   N)
Ú__doc__r
   r   r   r   r   r   r   r   r   r   r   r   r   Ú<module>   s    $	       st_logout_view_on_post(self):
        c, resp = self._logout_view("get")
        self.assertTemplateUsed(
            resp, "account/logout.%s" % app_settings.TEMPLATE_EXTENSION
        )

        receiver_mock = Mock()
        user_logged_out.connect(receiver_mock)

        resp = c.post(reverse("account_logout"))

        self.assertTemplateUsed(resp, "account/messages/logged_out.txt")
        receiver_mock.assert_called_once_with(
            sender=get_user_model(),
            request=resp.wsgi_request,
            user=get_user_model().objects.get(username="john"),
            signal=user_logged_out,
        )

        user_logged_out.disconnect(receiver_mock)

    def _logout_view(self, method):
        c = Client()
        user = get_user_model().objects.create(username="john", is_active=True)
        user.set_password("doe")
        user.save()
        c = Client()
        c.login(username="john", password="doe")
        return c, getattr(c, method)(reverse("account_logout"))

    @override_settings(
        ACCOUNT_EMAIL_VERIFICATION=app_settings.EmailVerificationMethod.OPTIONAL,
        ACCOUNT_SIGNUP_PASSWORD_ENTER_TWICE=False,
    )
    def test_optional_email_verification(self):
        c = Client()
        # Signup
        c.get(reverse("account_signup"))
        resp = c.post(
            reverse("account_signup"),
            {
                "username": "johndoe",
                "email": "john@example.com",
                "password1": "johndoe",
            },
        )
        # Logged in
        self.assertRedirects(
            resp, settings.ACCOUNT_SIGNUP_REDIRECT_URL, fetch_redirect_response=False
        )
        self.assertEqual(mail.outbox[0].to, ["john@example.com"])
        self.assertEqual(len(mail.outbox), 1)
        # Logout & login again
        c.logout()
        # Wait for cooldown
        EmailConfirmation.objects.update(sent=now() - timedelta(days=1))
        # Signup
        resp = c.post(
            reverse("account_login"),
            {"login": "johndoe", "password": o
    ?÷[bÚ  ã                   @   s6   d Z ddlZdgZe dej¡Zdd Zd	ddZdS )
zÖ
    pygments.modeline
    ~~~~~~~~~~~~~~~~~

    A simple modeline parser (based on pymodeline).

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
é    NÚget_filetype_from_bufferze
    (?: vi | vim | ex ) (?: [<=>]? \d* )? :
    .* (?: ft | filetype | syn | syntax ) = ( [^:\s]+ )
c                 C   s   t  | ¡}|r| d¡S d S )Né   )Úmodeline_reÚsearchÚgroup)ÚlÚm© r	   ú`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\modeline.pyÚget_filetype_from_line   s   

ÿr   é   c                 C   sp   |   ¡ }|d| d d D ]}t|}|r|  S qt|ddD ]}|t|k r5t|| }|r5|  S q!dS )zL
    Scan the buffer for modelines and return filetype if one is found.
    éÿÿÿÿr   N)Ú
splitlinesr   ÚrangeÚlen)ÚbufÚ	max_linesÚlinesr   ÚretÚir	   r	   r
   r      s   ÿ)r   )Ú__doc__ÚreÚ__all__ÚcompileÚVERBOSEr   r   r   r	   r	   r	   r
   Ú<module>   s    
ý                                                                                                                                                                                                                                                                                                                                                           1,
    )
    def test_login_using_unverified_email_address_is_prohibited(self):
        user = get_user_model().objects.create(
            username="john", email="john@example.org", is_active=True
        )
        user.set_password("doe")
        user.save()

        EmailAddress.objects.create(
            user=user, email="john@example.org", primary=True, verified=True
        )
        EmailAddress.objects.create(
            user=user, email="john@example.com", primary=True, verified=False
        )

        resp = self.client.post(
            reverse("account_login"), {"login": "john@example.com", "password": "doe"}
        )
        self.assertRedirects(
            resp,
            reverse("account_email_verification_sent"),
            fetch_redirect_response=False,
        )
        self.assertEqual(len(mail.outbox), 1)
        assert mail.outbox[0].to == ["john@example.com"]

    def test_login_unverified_account_mandatory(self):
        """Tests login behavior when email verification is mandatory."""
        user = get_user_model().objects.create(username="john")
        user.set_password("doe")
        user.save()
        EmailAddress.objects.create(
            user=user, email="user@example.com", primary=True, verified=False
        )
        resp = self.client.post(
            reverse("account_login"), {"login": "john", "password": "doe"}
        )
        self.assertRedirects(resp, reverse("account_email_verification_sent"))

    def test_login_inactive_account(self):
        """
        Tests login behavior with inactive accounts.

        Inactive user accounts should be prevented from performing any actions,
        regardless of their verified state.
        """
        # Inactive and verified user account
        user = get_user_model().objects.create(username="john", is_active=False)
        user.set_password("doe")
        user.save()
        EmailAddress.objects.create(
            user=user, email="john@example.com", primary=True, verified=True
        )
        resp = self.client.post(
            reverse("account_login"), {"login": "john", "password": "doe"}
        )
        self.assertRedirects(resp, reverse("account_inactive"))

        # Inactive and unverified user account
        user = get_user_model().objects.create(username="doe", is_active=False)
        user.set_password("john")
        user.save()
        EmailAddress.objects.create(
            user=user, email="user@example.com", primary=True, verified=False
        )
        resp = self.client.post(
            reverseo
    ?÷[bº  ã                   @   sD   d Z ddlmZmZ dZdZg d¢Zdd Zdd	d
ZdddZ	dS )a  
    Pygments
    ~~~~~~~~

    Pygments is a syntax highlighting package written in Python.

    It is a generic syntax highlighter for general use in all kinds of software
    such as forum systems, wikis or other applications that need to prettify
    source code. Highlights are:

    * a wide range of common languages and markup formats is supported
    * special attention is paid to details, increasing quality by a fair amount
    * support for new languages and formats are added easily
    * a number of output formats, presently HTML, LaTeX, RTF, SVG, all image
      formats that PIL supports, and ANSI sequences
    * it is usable as a command-line tool and as a library
    * ... and it highlights even Brainfuck!

    The `Pygments master branch`_ is installable with ``easy_install Pygments==dev``.

    .. _Pygments master branch:
       https://github.com/pygments/pygments/archive/master.zip#egg=Pygments-dev

    :copyright: Copyright 2006-2021 by the Pygments team, see AUTHORS.
    :license: BSD, see LICENSE for details.
é    )ÚStringIOÚBytesIOz2.11.2Zrestructuredtext)ÚlexÚformatÚ	highlightc              
   C   s\   z|  | ¡W S  ty- } zt|jd tr(d|jd v s$d|jd v r(td d}~ww )zG
    Lex ``code`` with ``lexer`` and return an iterable of tokens.
    r   zunbound method get_tokensú&missing 1 required positional argumentz4lex() argument must be a lexer instance, not a classN)Z
get_tokensÚ	TypeErrorÚ
isinstanceÚargsÚstr)ÚcodeÚlexerÚerr© r   ú`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\pygments\__init__.pyr   #   s   ÿþúr   Nc              
   C   s   z"|st |ddrt pt }| | |¡ | ¡ W S | | |¡ W dS  tyI } zt|jd trDd|jd v s@d|jd v rDtd d}~ww )zó
    Format a tokenlist ``tokens`` with the formatter ``formatter``.

    If ``outfile`` is given and a valid file object (an object
    with a ``write`` method), the result will be written to it, otherwise
    it is returned as a string.
    ÚencodingNr   zunbound method formatr   z;format() argument must be a formatter instance, not a class)	Úgetattrr   r   r   Úgetvaluer   r	   r
   r   )ÚtokensÚ	formatterÚoutfileZrealoutfiler   r   r   r   r   2   s    
ÿþúr   c                 C   s   t t| |||S )zÿ
    Lex ``code`` with ``lexer`` and format it with the formatter ``formatter``.

    If ``outfile`` is given and a valid file object (an object
    with a ``write`` method), the result will be written to it, otherwise
    it is returned as a string.
    )r   r   )r   r   r   r   r   r   r   r   J   s   r   )N)
Ú__doc__Úior   r   Ú__version__Z__docformat__Ú__all__r   r   r   r   r   r   r   Ú<module>   s    
                                                                                  by not checking on `user_can_authenticate()` users will allow to become
        authenticated whereas according to Django logic this should not be
        allowed.

        In order to preserve the allauth behavior while respecting Django's
        logic, we stash a user for which the password check succeeded but
        `user_can_authenticate()` failed. In the allauth authentication logic,
        we can then unstash this user and proceed pointing the user to the
        account inactive page.
        """
        global _stash
        ret = getattr(_stash, "user", None)
        _stash.user = user
        return ret

    @classmethod
    def unstash_authenticated_user(cls):
        return cls._stash_user(None)
                                                                                                                                                                                                                                                                                                         o
    ;÷[b  ã                   @   s   d Z ddlZddlZddlmZ ddlmZ dedefddZ	dded
e
defddZdded
e
defddZdedee fddZdS )zù
This code wraps the vendored appdirs module to so the return values are
compatible for the current pip code base.

The intention is to rewrite current usages gradually, keeping the tests pass,
and eventually drop this after all usages are changed.
é    N)ÚList)ÚplatformdirsÚappnameÚreturnc                 C   s   t j| ddS )NF)Ú	appauthor)Ú_appdirsÚuser_cache_dir)r   © r	   ú^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\appdirs.pyr      s   r   TÚroamingc                 C   sB   t j| d|d}tj |¡r|S d}| rtj || ¡}tj |¡S )NF©r   r   z
~/.config/)r   Zuser_data_dirÚosÚpathÚisdirÚjoinÚ
expanduser)r   r   r   Zlinux_like_pathr	   r	   r
   Ú_macos_user_config_dir   s   r   c                 C   s$   t jdkr
t| |S tj| d|dS )NÚdarwinFr   )ÚsysÚplatformr   r   Úuser_config_dir)r   r   r	   r	   r
   r   "   s   

r   c                 C   sN   t jdkrtj| dddgS tj| ddd}t jdkr|gS | tj¡dg S )Nr   FT)r   Z	multipathÚwin32z/etc)r   r   r   Zsite_data_dirZsite_config_dirÚsplitr   Úpathsep)r   Zdirvalr	   r	   r
   Úsite_config_dirs+   s   

r   )T)Ú__doc__r   r   Útypingr   Úpip._vendorr   r   Ústrr   Úboolr   r   r   r	   r	   r	   r
   Ú<module>   s    	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  INDX( 	 Nc           (     è       Ø1 i Ø . 1         ©D
     p     õC
    R×ÉLRØR×ÉLRØR×ÉLRØR×ÉLRØ       N               a p p d i r s . c p y t h o n - 3 1 0 . p y c XD
     n     õC
    #RÉLRØ#RÉLRØ#RÉLRØ#RÉLRØ       à               c o m p a t . c p y t h o n - 3 1 0 . p y c . íD
          õC
    }_GÊLRØ}_GÊLRØ}_GÊLRØ}_GÊLRØ       é              " c o m p a t i b i l i t y _ t a g s . c p y t h o n - 3 1 0 . p y c   ÅD
     x     õC
    Z<ÊLRØZ<ÊLR Z<ÊLRØZ<ÊLRØ       ñ               d e p r e c a t i o n . c p y t h o n - 3 1 0 . p y c xE
          õC
    "rËLRØ"rËLRØ"rËLRØ"rËLRØ                     " d i r e c t _ u r l _ h e l p e r s . c p y t h o n - 3 1 0 . p y c   E
     ~     õC
    ~ùËLRØ~ùËLRØ~ùËLRØ~ùËLRØ       G               d i s t u t i l s _ a r g s . c p y t h o n - 3 1 0 . p y c  E
     r     õC
    g¥ÊLRØg¥ÊLRØÕy§ÊLRØg¥ÊLRØ       `               e g g _ l i n k . c p y t h o n - 3  0 . p y c y c  TE
     r     õC
    íÖ%ËLRØíÖ%ËLRØíÖ%ËLRØíÖ%ËLRØ                      e n c o d i n g . c p y t h o n - 3 1 0 . p y c y c  óD
     v     õC
    NÊLRØNÊLRØNÊLRØNÊLRØ        $               f i l e s y s t e m . c p y t h o n - 3 1 0 . p y c  E
     t     õC
    0±ÊLRØ0±ÊLRØ0±ÊLRØ0±ÊLRØ       ª               f i l e t y p e s . c p y t h o n - 3 1 0 . p y c    KE
     l     õC
    MËLRØMËLRØMËLRØMËLRØ                      g l  b c . c p y t h o n - 3 1 0 . p y c c . îD
     n     õC
    èÂIÊLRØèÂIÊLRØèÂIÊLRØèÂIÊLRØ        F               h a s h e s . c p y t h o n - 3 1 0 . p y c . ÷C
           õC
    6zÈLRØ6zÈLRØ6zÈLRØ6zÈLRØ       ×              & i n j e c t _ s e c u r e t r a n s p o r t . c p y t h o n - 3 1 0 . p y c G¯D
     p     õC
    eÜÉLRØwÞÉLRØwÞÉLRØwÞÉLRØ 0      %               l o g g i n g . c p y t h o n - 3 1 0 . p y c ÆD
     j     õC
    ³ÊLRØ³ÊLRØ³ÊLRØ³ÊLR  P      I               m i s c . c p y t h o n - 3 1 0 . p y c . p y E
     n     õC
    0±ÊLRØ0±ÊLRØ0±ÊLRØ0±ÊLRØ       À               m o d e l s . c p y t h o n - 3 1 0 . p y c y yE
     t     õC
    "rËLRØ"rËLRØ"rËLRØ"rËLRØ                      p a c k a g i n g . c p y t h o n - 3 1 0 . p y c 3 1 hE
          õC
    ;_NËLRØ;_NËLRØ;_NËLRØ;_NËLRØ        ï                s e t u p t o o l s _ b u i l d . c p y t h o n - 3 1 0 . p y c r     @E
     v     õC
    Þ ËLRØÞ ËLRØÞ ËLRØÞ ËLRØ                       s u b p r o c e s s . c p y t h o n - 3 1 0 . p y c  ôD
     r     õC
     èPÊLRØ èPÊLRØ èPÊLRØ èPÊLRØ        }               t e m p _ d i r . c p y t h o n - 3 1 0 . p y c y c  tE
     t     õC
    "ûjËLRØ"ûjËLRØ"ûjËLRØ"ûjËLRØ                       u n p a c k i n g . c p y t h o n - 3 1 0 . p y c    E
     j     õC
    Õy§ÊLRØÕy§ÊLRØÕy§ÊLRØÕy§ÊLRØ       5               u r l s . c p y t h o n - 3 1 0 . p y c 1 0  ×D
     v     õC
    þ%ÊLRØþ%ÊLRØþ%ÊLRØþ%ÊLRØ       Ô               v i r t u a l e n v . c p y t h o n - 3 1 0 . p y c  uE
     l     õC
    "ûjËLRØ"ûjËLRØ"ûjËLRØ"ûjËLRØ        9               w h e e l . c p y t h o n - 3 1 0 . p y c p y øC
     j     õC
    êð|ÈLRØêð|ÈLRØêð|ÈLRØêð|ÈLRØ       ì               _ l o g . c p y t h o n - 3 1 0 . p y c . p y öC
     r     õC
    =,xÈLRØ=,xÈLRØ=,xÈLRØ=,xÈLRØÀ       ¼                _ _ i n i t _ _ . c p y t h o n - 3  0 . p y c . 1 4               0 . p y c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                              o
    =÷[b  ã                	   @   sÀ  d Z dZzddlZddlmZ eejZddlmZ W n eefy1   dZdd Z	dd Z
Y dS w dd	lmZmZmZmZ ejZG d
d deZejjZejge_eje_ejjZejeege_eje_ejj	Zejejge_eje_ejjZejege_eje_ejj Z!ejeejeeejge!_eje!_ejj"Z#ejejejeeejge#_eje#_ejj$Z%ej&ge%_eje%_dd Z'dd Z
e fddZdd Z	dddZdd Z(dd Z"dd Z)dS )iõÿÿÿiôÿÿÿé    N)ÚLibraryLoader)Úwintypesc                  G   ó   d S ©N© ©Ú_r   r   ú]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\colorama\win32.pyÚ<lambda>   ó    r
   c                  G   r   r   r   r   r   r   r	   r
      r   )ÚbyrefÚ	StructureÚc_charÚPOINTERc                   @   s>   e Zd ZdZdefdefdejfdejfdefgZdd Z	d	S )
ÚCONSOLE_SCREEN_BUFFER_INFOzstruct in wincon.h.ÚdwSizeÚdwCursorPositionÚwAttributesÚsrWindowÚdwMaximumWindowSizec                 C   sH   d| j j| j j| jj| jj| j| jj| jj| jj| jj	| j
j| j
jf S )Nz"(%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d))r   ÚYÚXr   r   r   ÚTopÚLeftÚBottomÚRightr   )Úselfr   r   r	   Ú__str__   s   ûz"CONSOLE_SCREEN_BUFFER_INFO.__str__N)
Ú__name__Ú
__module__Ú__qualname__Ú__doc__ÚCOORDr   ÚWORDÚ
SMALL_RECTÚ_fields_r   r   r   r   r	   r      s    ûr   c                 C   s   t  }t| t|}t|S r   )r   Ú_GetConsoleScreenBufferInfor   Úbool)ÚhandleÚcsbiÚsuccessr   r   r	   Ú_winapi_test\   s
   ÿr+   c                   C   s   t dd ttttfD S )Nc                 s   s    | ]}t |V  qd S r   )r+   )Ú.0Úhr   r   r	   Ú	<genexpr>c   s    zwinapi_test.<locals>.<genexpr>)ÚanyÚ_GetStdHandleÚSTDOUTÚSTDERRr   r   r   r	   Úwinapi_testb   s   ÿr3   c                 C   s    t | }t }t|t|}|S r   )r0   r   r&   r   )Ú	stream_idr(   r)   r*   r   r   r	   ÚGetConsoleScreenBufferInfof   s   ÿr5   c                 C   s   t | }t||S r   )r0   Ú_SetConsoleTextAttribute)r4   Úattrsr(   r   r   r	   ÚSetConsoleTextAttributem   s   
r8   Tc                 C   sv   t | }|jdks|jdkrd S t |jd |jd }|r2ttj}| j|j7  _| j|j7  _t| }t	||S )Nr   é   )
r"   r   r   r5   r1   r   r   r   r0   Ú_SetConsoleCursorPosition)r4   ÚpositionÚadjustÚadjusted_positionÚsrr(   r   r   r	   ÚSetConsoleCursorPositionq   s   

r?   c                 C   sB   t | }t| ¡ }t |¡}t d¡}t||||t|}|jS )Nr   )r0   r   Úencoder   ÚDWORDÚ_FillConsoleOutputCharacterAr   Úvalue)r4   ÚcharÚlengthÚstartr(   Únum_writtenr*   r   r   r	   ÚFillConsoleOutputCharacter   s   

ÿrH   c                 C   s:   t | }t |¡}t |¡}t d¡}t||||t|S )za FillConsoleOutputAttribute( hConsole, csbi.wAttributes, dwConSize, coordScreen, &cCharsWritten )r   )r0   r   r#   rA   Ú_FillConsoleOutputAttributer   )r4   ÚattrrE   rF   r(   Ú	attributerG   r   r   r	   ÚFillConsoleOutputAttribute   s   


ÿrL   c                 C   s   t | S r   )Ú_SetConsoleTitleW)Útitler   r   r	   ÚSetConsoleTitle   s   rO   )T)*r1   r2   Úctypesr   ÚWinDLLÚwindllr   ÚAttributeErrorÚImportErrorr8   r3   r   r   r   r   Ú_COORDr"   r   Úkernel32ÚGetStdHandler0   rA   ÚargtypesÚHANDLEÚrestyper5   r&   ÚBOOLr6   r#   r?   r:   ZFillConsoleOutputCharacterArB   rL   rI   ZSetConsoleTitleWrM   ÚLPCWSTRr+   rH   rO   r   r   r   r	   Ú<module>   s|   
ýÿþþþûûÿ


                                                                                                                                                     INDX( 	 Ê!`           (   P  è       Ø                    ¦D
     j     ¢D
    ÒÉLRØÒÉLRØÒÉLRØÒÉLRØ       ¹               a n s i . c p y t h o n - 3 1 0 . p y c 3 1 0 ¥D
     x     ¢D
    ÒÉLRØÒÉLRØÒÉLRØÒÉLRØ        Û               a n s i t o w i n 3 2 . c p y t h o n - 3 1 0 . p y c ¤D
     v     ¢D
    y)ÐÉLRØy)ÐÉLRØy)ÐÉLRØy)ÐÉLRØ                      i n i t i a l i s e . c p y t h o n - 3 1 0 . p y c 4 ¨D
     l     ¢D
    ¾îÔÉLRØ¾îÔÉLRØ¾îÔÉLR ¾îÔÉLRØ       k               w i n 3 2 . c p y t h o n - 3 1 0 . p y c y c §D
     p     ¢D
    ¾îÔÉLRØ¾îÔÉLRØ¾îÔÉLRØ¾îÔÉLRØ        Ô               w i n t e r m . c p y t h o n - 3 1 0 . p y c £D
     r     ¢D
    y)ÐÉLRØy)ÐÉLRØy)ÐÉLRØy)ÐÉLRØ¸      ¸               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        o
    =÷[bÚ	  ã                   @   s    d Z dZdZdZdd Zdd Zdd	d
ZdddZG dd deZ	G dd deZ
G dd de	ZG dd de	ZG dd de	Ze Ze Ze Ze
 ZdS )z
This module generates ANSI character codes to printing colors to terminals.
See: http://en.wikipedia.org/wiki/ANSI_escape_code
z[z]úc                 C   ó   t t|  d S )NÚm©ÚCSIÚstr)Úcode© r   ú\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\colorama\ansi.pyÚcode_to_chars   ó   r
   c                 C   s   t d |  t S )Nz2;)ÚOSCÚBEL)Útitler   r   r	   Ú	set_title   r   r   é   c                 C   r   )NÚJr   ©Úmoder   r   r	   Úclear_screen   r   r   c                 C   r   )NÚKr   r   r   r   r	   Ú
clear_line   r   r   c                   @   s   e Zd Zdd ZdS )Ú	AnsiCodesc                 C   s6   t | D ]}| d¡st| |}t| |t| qd S )NÚ_)ÚdirÚ
startswithÚgetattrÚsetattrr
   )ÚselfÚnameÚvaluer   r   r	   Ú__init__   s   

ýzAnsiCodes.__init__N)Ú__name__Ú
__module__Ú__qualname__r    r   r   r   r	   r      s    r   c                   @   s>   e Zd ZdddZdddZdddZddd	Zdd
dZdS )Ú
AnsiCursoré   c                 C   ó   t t| d S )NÚAr   ©r   Únr   r   r	   ÚUP%   r   zAnsiCursor.UPc                 C   r&   )NÚBr   r(   r   r   r	   ÚDOWN'   r   zAnsiCursor.DOWNc                 C   r&   )NÚCr   r(   r   r   r	   ÚFORWARD)   r   zAnsiCursor.FORWARDc                 C   r&   )NÚDr   r(   r   r   r	   ÚBACK+   r   zAnsiCursor.BACKc                 C   s   t t| d t| d S )Nú;ÚHr   )r   ÚxÚyr   r   r	   ÚPOS-   s   zAnsiCursor.POSN)r%   )r%   r%   )r!   r"   r#   r*   r,   r.   r0   r5   r   r   r   r	   r$   $   s    



r$   c                   @   óP   e Zd ZdZdZdZdZdZdZdZ	dZ
d	Zd
ZdZdZdZdZdZdZdZdS )ÚAnsiForeé   é   é    é!   é"   é#   é$   é%   é'   éZ   é[   é\   é]   é^   é_   é`   éa   N©r!   r"   r#   ÚBLACKÚREDÚGREENÚYELLOWÚBLUEÚMAGENTAÚCYANÚWHITEÚRESETÚLIGHTBLACK_EXÚLIGHTRED_EXÚLIGHTGREEN_EXÚLIGHTYELLOW_EXÚLIGHTBLUE_EXÚLIGHTMAGENTA_EXÚLIGHTCYAN_EXÚLIGHTWHITE_EXr   r   r   r	   r7   1   ó$    r7   c                   @   r6   )ÚAnsiBacké(   é)   é*   é+   é,   é-   é.   é/   é1   éd   ée   éf   ég   éh   éi   éj   ék   NrI   r   r   r   r	   r\   G   r[   r\   c                   @   s   e Zd ZdZdZdZdZdS )Ú	AnsiStyler%   r   é   é    N)r!   r"   r#   ÚBRIGHTÚDIMÚNORMALÚ	RESET_ALLr   r   r   r	   rn   ]   s
    rn   N)r   )Ú__doc__r   r   r   r
   r   r   r   Úobjectr   r$   r7   r\   rn   ÚForeÚBackÚStyleÚCursorr   r   r   r	   Ú<module>   s"   


                                                                       È@  Ûµ-mÅc¤8("¡ 1ië¥ðk%²
s'È,^'¸6´<¥³[¡c¬Ëte1[-³Q¬­*°s ¶y?Rÿ×Û¸ôTÓÄuw½Þ:
>/º!NÌ#­ö÷^§Y&°waÝòÀ,µ¨ñÄôÂJ(ÙQÖÕkf¢îöäºT6SôöªV¢K©âHO¾xr-Lf!eÆeK<?k^}{>?oÆ§ÏÓäU]Öî^üñþÚÙ2®a8 Ã`               I+=Ê³t&¾.°»!ã¤F eLuI8   	0   aN«ÿü  u.Ü$$r\ê÷Pm ?,¿ÒÕh¸ÁC;¦ÁSÝ­J  âzxcvÌÜNkÌÎÜ¹£¸¶l{Óû\xcKiá¾ä &*S»±å^ôÙ$÷"AS
ªlkåJÍ`À§ñø^Õ?Àµ2}j×Ð`UÆ	¢  f   	P   Pä*ÿ  	ÿ^î'YÔòÉGÛ2H;?¼'Ó¦Üÿ&¢´±ô«r÷kR¨  øâÈßc;MË?xæí:\*¾ã··¾)`}k½ËN9Ì
§±Sõ`®õï>@µî£3\ï«ûÎ+?ke8S"} 1¾  \!õÊC+Dþ>¿Ë|ûÿÒüûU[8ßSþNoöU{ 4Ý8"ÔPú=ßxÆêäíðìì4ð5µRw7$ êÉó­"Úøþ	-T"	!><f|ÅLr29C9vßÈ`·ù_M|¬Cóq2Pô7pÃBÅsîä×H;«Óÿ{ü-jp¸¡©78í`«.ðÞ-¿Ä+sç(=I0zA¦þ§_ìcxÍ®r-;ZE"j¢;g9Î®79÷ðÞ¢`¾ÜÀ»Vno°Z`{;ä¥¥q1¤ç0¾ÕÁ ãpºÎãfRjÙ6¥3x`²¡3eÐhµ«2Ì'S§¹ÙÞxÛ§9r¬Ó«ù¶ÏÚéóëü·Ï¿øý/ÇøµU³ñ?çôæøÿhW°              1JE-ð¡v7û÷ïÕ1îHÞ¬¬a%j"^·FÈä    	0   aP¡«ÿü  u.Ü$$r\ê÷Pm ?,¿ÒÕh¸ÁC;¦ÁSÝ­J  âzxcvÌÜo
    =÷[b{  ã                   @   st   d dl Z d dlZd dlZddlmZ dadadadada	dd Z
ddd	Zd
d Zejdd Zdd Zdd ZdS )é    Né   )ÚAnsiToWin32Fc                   C   s   t d urt t ¡  d S d S ©N)r   Úorig_stdoutÚ	reset_all© r   r   úbE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\colorama\initialise.pyr      s   ÿr   Tc                 C   s   |st | ||grtdtjatjatjd u rd antt||| | t_atjd u r.d a	ntt||| | t_a	t
sDt t¡ da
d S d S )Nz,wrap=False conflicts with any other arg=TrueT)ÚanyÚ
ValueErrorÚsysÚstdoutr   ÚstderrÚorig_stderrÚwrapped_stdoutÚwrap_streamÚwrapped_stderrÚatexit_doneÚatexitÚregisterr   )Ú	autoresetÚconvertÚstripÚwrapr   r   r   Úinit   s    
ÿ
ÿ
þr   c                   C   ó$   t d urt t_td urtt_d S d S r   )r   r   r   r   r   r   r   r   r   Údeinit3   ó
   
ÿr   c                  o   s,    t | i |¤ z	d V  W t  d S t  w r   )r   r   )ÚargsÚkwargsr   r   r   Úcolorama_text:   s
   r   c                   C   r   r   )r   r   r   r   r   r   r   r   r   ÚreinitC   r   r    c                 C   s&   |rt | |||d}| ¡ r|j} | S )N)r   r   r   )r   Zshould_wrapÚstream)r!   r   r   r   r   Úwrapperr   r   r   r   J   s   ÿr   )FNNT)r   Ú
contextlibr   Úansitowin32r   r   r   r   r   r   r   r   r   Úcontextmanagerr   r    r   r   r   r   r   Ú<module>   s    

                                                                                                                                                                                                                                                                                                                                                                         me can only be provided if the certificate is revokedzDrevocation_reason can only be provided if the certificate is revokedz)revocation_time must be a datetime objectz7The revocation_time must be on or after 1950 January 1.zCrevocation_reason must be an item from the ReasonFlags enum or None)r   r   ÚCertificateÚ	TypeErrorr    ÚdatetimeZ_certZ_issuerÚ
_algorithmZ_this_updateZ_next_updater!   r"   r   r	   r   ÚReasonFlagsZ_cert_statusZ_revocation_timeZ_revocation_reason)	ÚselfÚcertÚissuerr   Úcert_statusÚthis_updateÚnext_updateÚrevocation_timeÚrevocation_reasonr   r   r   Ú__init__;   s\   ÿ
ÿ
ÿ
ÿÿÿÿ
ÿÿ
z_SingleResponse.__init__N)r   r   r   r3   r   r   r   r   r$   :   s    r$   c                   @   s   e Zd ZejdefddZejdefddZejdej	fddZ
ejdefdd	Zejd
ejdefddZejdejfddZdS )ÚOCSPRequestÚreturnc                 C   ó   dS ©z3
        The hash of the issuer public key
        Nr   ©r+   r   r   r   Úissuer_key_hash   ó    zOCSPRequest.issuer_key_hashc                 C   r6   ©z-
        The hash of the issuer name
        Nr   r8   r   r   r   Úissuer_name_hash   r:   zOCSPRequest.issuer_name_hashc                 C   r6   ©zK
        The hash algorithm used in the issuer name and key hashes
        Nr   r8   r   r   r   Úhash_algorithm   r:   zOCSPRequest.hash_algorithmc                 C   r6   ©zM
        The serial number of the cert whose status is being checked
        Nr   r8   r   r   r   Úserial_number   r:   zOCSPRequest.serial_numberÚencodingc                 C   r6   )z/
        Serializes the request to DER
        Nr   ©r+   rA   r   r   r   Úpublic_bytes   r:   zOCSPRequest.public_bytesc                 C   r6   )zP
        The list of request extensions. Not single request extensions.
        Nr   r8   r   r   r   Ú
extensions   r: INDX( 	 6
`           (     è                            MB
    ` P     KB
    |²LRØ|²LRØ|²LRØ|²LRØ       Ú	               a n s i . p y OB
    p ^     KB
    Æ{~²LRØÆ{~²LRØÆ{~²LRØÆ{~²LRØ 0      )               a n s i t o w i n 3 2 . p y   RB
    p \     KB
    +Ý²LRØ+Ý²LRØ+Ý²LRØ+Ý²LRØ       {               i n i t i a l i s e . p y     TB
    h R     KB
    6?²LRØ6?²LRØ6?²LRØ6?²LRØ                       w i n 3 2 . p y       WB
    h V     KB
    ¡²LRØ¡²LRØ¡²LRØ¡²LRØ        &              
 w i n t e r m . p y   YB
    h X     KB
    1²LRØ1²LRØ1²LRØ1²LRØð       ï                _ _ i n i t _ _ . p y ¢D
    h X     KB
    y)ÐÉLRØ¾îÔÉLRØ¾îÔÉLRØ¾îÔÉLRØ                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        o
    @÷[b  ã                
   @   s$  d dl Z d dlmZ eG dd dZzd dlZd dlmZmZ e jdkr+eejZ	ndZ	e
dW n ee
efyE   defd	d
ZY n(w dZdZe	jjZejejge_eje_e	jjZejge_eje_defdd
Zedkrd dlZe Zd dlmZ ede ¡  d ee e dS dS )é    N)Ú	dataclassc                   @   s,   e Zd ZU dZdZeed< 	 dZeed< dS )ÚWindowsConsoleFeatureszWindows features available.FÚvtÚ	truecolorN)Ú__name__Ú
__module__Ú__qualname__Ú__doc__r   ÚboolÚ__annotations__r   © r   r   ú\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_windows.pyr      s   
 r   )ÚLibraryLoaderÚwintypesÚwin32zNot windowsÚreturnc                  C   s
   t  } | S )N)r   )Úfeaturesr   r   r   Úget_windows_console_features   s   r   iõÿÿÿé   c                  C   sj   t t} t ¡ }t| |}t|o|jt@ }d}|r-t 	¡ }|j
dkp,|j
dko,|jdk}t||d}|S )zGet windows console features.

        Returns:
            WindowsConsoleFeatures: An instance of WindowsConsoleFeatures.
        Fé
   i×:  )r   r   )Ú_GetStdHandleÚSTDOUTr   ÚDWORDÚ_GetConsoleModer
   ÚvalueÚ"ENABLE_VIRTUAL_TERMINAL_PROCESSINGÚsysÚgetwindowsversionÚmajorÚbuildr   )ÚhandleZconsole_modeÚresultr   r   Zwin_versionr   r   r   r   r   -   s   

ÿÚ__main__)Úprintz
platform="ú")!r   Údataclassesr   r   Úctypesr   r   ÚplatformZWinDLLZwindllÚImportErrorÚAttributeErrorÚ
ValueErrorr   r   r   Zkernel32ZGetConsoleModer   ZHANDLEZLPDWORDÚargtypesZBOOLÚrestypeÚGetStdHandler   r   r   r   Úpip._vendor.richr#   ÚsystemÚreprr   r   r   r   Ú<module>   s@    	
ýý	ÿù                                                                                                                                                                             9   re   rU   rq   rV   r   r   r   rW   Õ   ó   
z RelativeDistinguishedName.__eq__c                 C   rX   rM   r   rV   r   r   r   rY   Û   rZ   z RelativeDistinguishedName.__ne__c                 C   ó
   t | jS rM   )r[   rq   rN   r   r   r   r\   Þ   rZ   z"RelativeDistinguishedName.__hash__c                 C   r   rM   )Úiterro   rN   r   r   r   Ú__iter__á   rZ   z"RelativeDistinguishedName.__iter__c                 C   r   rM   )r>   ro   rN   r   r   r   Ú__len__ä   rZ   z!RelativeDistinguishedName.__len__c                 C   s   d  |  ¡ ¡S )Nz<RelativeDistinguishedName({})>)rC   rS   rN   r   r   r   r]   ç   s   z"RelativeDistinguishedName.__repr__rM   )r   r   r   r_   ÚIterabler3   rK   r   ÚListry   r`   ra   r;   rS   rb   rc   rW   rY   rd   r\   ÚIteratorr   r   r]   r   r   r   r   re   ³   s&    ÿ
þÿÿ
þre   c                   @   s.  e Zd Zejdeje ddfddZejdeje ddfddZdejej	eef  ddfddZ	d dej
e defd	d
Zdedeje fddZedeje fddZd dejdefddZdedefddZdedefddZdefddZdeje fddZdefddZdefddZdS )!ÚNamerf   r$   Nc                 C   ó   d S rM   r   rr   r   r   r   rK   ì   s   zName.__init__c                 C   r   rM   r   rr   r   r   r   rK   ð   s   c                 C   s`   t |}tdd |D rdd |D | _d S tdd |D r,t tjt |¡| _d S td)Nc                 s   rg   rM   rh   ri   r   r   r   rk   ý   rl   z Name.__init__.<locals>.<genexpr>c                 S   s   g | ]}t t t|¡gqS r   )re   r_   Úcastr3   ri   r   r   r   rv   þ   s    ÿÿz!Name.__init__.<locals>.<listcomp>c                 s   rg   rM   )r9   re   ri   r   r   r   rk     rl   zNattributes must be a list of NameAttribute or a list RelativeDistinguishedName)rm   rn   ro
    @÷[bê  ã                   @   s   d dl mZ ddlmZ ddlmZ ddlmZ er&ddlm	Z	m
Z
mZmZ G dd dZed	krJd d
lmZ d dlmZ eeddZee dS dS )é    )ÚTYPE_CHECKINGé   )ÚMeasurement)ÚSegment)Ú	StyleType)ÚConsoleÚConsoleOptionsÚRenderResultÚRenderableTypec                   @   sF   e Zd ZdZddd	Z	
					dddZd
ddddefddZdS )ÚStyledz­Apply a style to a renderable.

    Args:
        renderable (RenderableType): Any renderable.
        style (StyleType): A style to apply across the entire renderable.
    Ú
renderabler
   Ústyler   ÚreturnNc                 C   s   || _ || _d S ©N)r   r   )Úselfr   r   © r   úZE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\styled.pyÚ__init__   s   
zStyled.__init__Úconsoler   Úoptionsr   r	   c                 C   s*   |  | j¡}| | j|¡}t ||¡}|S r   )Ú	get_styler   Úrenderr   r   Úapply_style)r   r   r   r   Zrendered_segmentsÚsegmentsr   r   r   Ú__rich_console__   s   zStyled.__rich_console__c                 C   s   t  ||| j¡S r   )r   Úgetr   )r   r   r   r   r   r   Ú__rich_measure__   s   zStyled.__rich_measure__)r   r
   r   r   r   N)r   r   r   r   r   r	   )Ú__name__Ú
__module__Ú__qualname__Ú__doc__r   r   r   r   r   r   r   r   r      s"    
ÿÿ
þÿÿþr   Ú__main__)Úprint)ÚPanelZhellozon blueN)Útypingr   Úmeasurer   Úsegmentr   r   r   r   r   r   r	   r
   r   r   Úpip._vendor.richr"   Zpip._vendor.rich.panelr#   Úpanelr   r   r   r   Ú<module>   s    û                                                                                                                                                                                                                                                                                                a str.Úutf8é   Tz/Country name must be a 2 character country codezUCountry names should be two characters, but the attribute is {} characters in length.)Ú
stacklevelz%_type must be from the _ASN1Type enum)Ú
isinstancer   Ú	TypeErrorÚstrr   ÚCOUNTRY_NAMEÚJURISDICTION_COUNTRY_NAMEÚlenÚencodeÚ
ValueErrorÚwarningsÚwarnÚformatÚ	_SENTINELÚ_NAMEOID_DEFAULT_TYPEÚgetr   r   Ú_oidÚ_valueÚ_type)Úselfr5   r   rI   r4   Zc_lenr   r   r   Ú__init__R   s8   
ÿ
ÿþÿý

zNameAttribute.__init__c                 C   ó   | j S ©N)rG   ©rJ   r   r   r   r5      ó   zNameAttribute.oidc                 C   rL   rM   )rH   rN   r   r   r   r      rO   zNameAttribute.valuec                 C   s   t  | j| jj¡S )zt
        The short attribute name (for example "CN") if available,
        otherwise the OID dotted string.
        )r"   rF   r5   Zdotted_stringrN   r   r   r   Úrfc4514_attribute_name   s   z$NameAttribute.rfc4514_attribute_nameÚattr_name_overridesc                 C   s4   |r|  | j¡nd}|du r| j}d|t| jf S )z 
        Format as RFC4514 Distinguished Name string.

        Use short attribute name if available, otherwise fall back to OID
        dotted string.
        Nz%s=%s)rF   r5   rP   r2   r   )rJ   rQ   Ú	attr_namer   r   r   Úrfc4514_string   s
   
ÿzNameAttribute.rfc4514_stringÚotherc                 C   s&   t |tstS | j|jko| j|jkS rM   )r9   r3   ÚNotImplementedr5   r   ©rJ   rT   r   r   r   Ú__eq__£   s   
zNameAttribute.__eq__c                 C   ó
   | |k S rM   r   rV   r   r   r   Ú__ne__©   ó   
zNameAttribute.__ne__c                 C   s   t | j| jfS rM   )Úhashr5   r   rN   r   r   r   Ú__hash__¬   s   zNameAttribute.__hash__c                 C   s
   d  | ¡S )Nz/<NameAttribute(oid={0.oid}, value={0.value!r})>)rC   rN   r   r   r   Ú__repr__¯   rZ   zNameAttribute.__repo
    @÷[b7  ã                   @   sf   d dl mZmZ ddlmZ ddlmZ ddlmZ er*ddl	m
Z
mZmZmZmZ G dd dZd	S )
é    )ÚOptionalÚTYPE_CHECKINGé   )ÚSegment)Ú	StyleType)Ú	loop_last)ÚConsoleÚConsoleOptionsÚRenderResultÚRenderableTypeÚGroupc                	   @   sV   e Zd ZU dZded< ddddddee d	ed
dfddZ					
	dddZ	dS )ÚScreenzÖA renderable that fills the terminal screen and crops excess.

    Args:
        renderable (RenderableType): Child renderable.
        style (StyleType, optional): Optional background style. Defaults to None.
    r   Ú
renderableNF)ÚstyleÚapplication_modeÚrenderablesr   r   Úreturnc                G   s&   ddl m} || | _|| _|| _d S )Nr   )r   )Úpip._vendor.rich.consoler   r   r   r   )Úselfr   r   r   r   © r   úZE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\screen.pyÚ__init__   s   

zScreen.__init__Úconsoler   Úoptionsr	   r
   c                 c   s    |j \}}| jr| | j¡nd }|j||d}|j| jpd||dd}tj||||d}| jr4tdnt 	¡ }t
|D ]\}	}
|
E d H  |	sJ|V  q<d S )N)ÚwidthÚheightÚ T)r   Úpad)r   z
)Úsizer   Ú	get_styleÚupdateÚrender_linesr   r   Ú	set_shaper   Úliner   )r   r   r   r   r   r   Úrender_optionsÚlinesÚnew_lineÚlastr#   r   r   r   Ú__rich_console__(   s   
ÿ
ýzScreen.__rich_console__)r   r   r   r	   r   r
   )
Ú__name__Ú
__module__Ú__qualname__Ú__doc__Ú__annotations__r   r   Úboolr   r(   r   r   r   r   r      s*   
 üþýü
ûÿÿþr   N)Útypingr   r   Úsegmentr   r   r   Ú_loopr   r   r   r	   r
   r   r   r   r   r   r   r   Ú<module>   s    	                                                                                                                                                                               )Nz<RegisteredID(value={})>r0   r   r	   r	   r
   r2   Ï   r3   zRegisteredID.__repr__r4   c                 C   r5   r$   )r   rR   r6   r   r7   r	   r	   r
   r8   Ò   r9   zRegisteredID.__eq__c                 C   r:   r$   r	   r7   r	   r	   r
   r;   Ø   r<   zRegisteredID.__ne__c                 C   r=   r$   r>   r   r	   r	   r
   r@   Û   r<   zRegisteredID.__hash__)r   r   r   r   r"   rB   r   r   r2   rD   rE   r8   r;   rF   r@   r	   r	   r	   r
   rR   Ä   rQ   rR   c                   @   s~   e Zd ZdeddfddZedefddZdefdd	Zde	fd
dZ
dedefddZdedefddZdefddZdS )Ú	IPAddressr   r   Nc                 C   s,   t |tjtjtjtjfstd|| _d S )Nzzvalue must be an instance of ipaddress.IPv4Address, ipaddress.IPv6Address, ipaddress.IPv4Network, or ipaddress.IPv6Network)r   Ú	ipaddressÚIPv4AddressÚIPv6AddressÚIPv4NetworkÚIPv6Networkr   r   rJ   r	   r	   r
   r"   à   s   üþ	ÿ
zIPAddress.__init__c                 C   r#   r$   r%   r   r	   r	   r
   r   ò   r&   zIPAddress.valuec                 C   s0   t | jtjtjfr| jjS | jjj| jjj S r$   )r   r   rT   rU   rV   ÚpackedÚnetwork_addressÚnetmaskr   r	   r	   r
   Ú_packedö   s   ÿÿzIPAddress._packedc                 C   r/   )Nz<IPAddress(value={})>r0   r   r	   r	   r
   r2      r3   zIPAddress.__repr__r4   c                 C   r5   r$   )r   rS   r6   r   r7   r	   r	   r
   r8     r9   zIPAddress.__eq__c                 C   r:   r$   r	   r7   r	   r	   r
   r;   	  r<   zIPAddress.__ne__c                 C   r=   r$   r>   r   r	   r	   r
   r@     r<   zIPAddress.__hash__)r   r   r   Ú_IPADDRESS_TYPESr"   rB   r   Úbytesr\   r   r2   rD   rE   r8   r;   rF   r@   r	   r	   r	   r
   rS   ß   s    
rS   c                   @   s   e Zd ZdededdfddZedefddZedefd	d
Zde	fddZ
do
    @÷[b  ã                   @   sü   d dl mZ d dlmZmZmZmZ ddlmZ ddl	m
Z
 ddlmZ ddlmZ ddlmZmZ er:dd	lmZ d
ddd
d
ddddee dededee dee ddfddZedkr|d dlmZ e  dededd
fddZedd  e  d
S d
S )!é    )ÚMapping)ÚTYPE_CHECKINGÚAnyÚOptionalÚTupleé   )ÚReprHighlighter)ÚPanel)ÚPretty)ÚTable)ÚTextÚTextType)ÚConsoleRenderableNTF)ÚtitleÚ	sort_keysÚindent_guidesÚ
max_lengthÚ
max_stringÚscopezMapping[str, Any]r   r   r   r   r   Úreturnr   c                C   s¶   t  }tjddd}|jdd dtttf dtttf fdd	}|r+t|  	¡ |d
n|  	¡ }	|	D ] \}
}t
 |
|
 d¡r?dndfd¡}| |t|||||d¡ q1tj||dddS )a¬  Render python variables in a given scope.

    Args:
        scope (Mapping): A mapping containing variable names and values.
        title (str, optional): Optional title. Defaults to None.
        sort_keys (bool, optional): Enable sorting of items. Defaults to True.
        indent_guides (bool, optional): Enable indentaton guides. Defaults to False.
        max_length (int, optional): Maximum length of containers before abbreviating, or None for no abbreviation.
            Defaults to None.
        max_string (int, optional): Maximum length of string before truncating, or None to disable. Defaults to None.

    Returns:
        ConsoleRenderable: A renderable object.
    )r   r   F)ÚpaddingÚexpandÚright)ÚjustifyÚitemr   c                 S   s   | \}}|  d¡ | ¡ fS )z2Sort special variables first, then alphabetically.Ú__)Ú
startswithÚlower)r   ÚkeyÚ_© r    úYE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\scope.pyÚ
sort_items)   s   z render_scope.<locals>.sort_items)r   r   zscope.key.specialz	scope.key)z =zscope.equals)Úhighlighterr   r   r   zscope.border)r   Zborder_styler   )r   r   ÚgridÚ
add_columnr   Ústrr   ÚboolÚsortedÚitemsr   Úassembler   Úadd_rowr
   r	   Úfit)r   r   r   r   r   r   r#   Zitems_tabler"   r)   r   ÚvalueZkey_textr    r    r!   Úrender_scope   s4   "þûþ
ür.   Ú__main__)ÚprintÚfooÚbarc                 C   s6   g d¢}ddg d¢dgdd}t tt dd	d
 d S )N)r   é   é   Né   TFzHello Worldz1.1ZconfirmFruitPurchase)ÚappleZorangeZmangoesZpomelog+ÙÎ÷ñ?Z	194521489)ÚversionÚmethodÚparamsÚidz	[i]localsF)r   r   )r0   r.   Úlocals)r1   r2   Zlist_of_thingsZdict_of_thingsr    r    r!   ÚtestK   s   
ür<   gºk	ù W4@gÉå?$	@)Úcollections.abcr   Útypingr   r   r   r   r#   r   Zpanelr	   Úprettyr
   Útabler   Útextr   r   Úconsoler   r'   Úintr.   Ú__name__Úpip._vendor.richr0   Úfloatr<   r    r    r    r!   Ú<module>   sH    ùÿýüûúù
ø8


ð                                                                                                @   sª   e Zd ZejZdedeje	 ddfddZ
edefddZedeje	 fd	d
ZdefddZdejdefddZdejdefddZde	fddZdefddZdS )ÚBasicConstraintsÚcaÚpath_lengthr   Nc                 C   sX   t |ts	td|d ur|std|d ur$t |tr |dk r$td|| _|| _d S )Nzca must be a boolean valuez)path_length must be None when ca is Falser   z2path_length must be a non-negative integer or None)r!   r   r^   r   r8   Ú_caÚ_path_length)r0   rÄ   rÅ   r(   r(   r)   r@   Á  s   
ÿÿÿ
zBasicConstraints.__init__c                 C   r~   r    )rÆ   r/   r(   r(   r)   rÄ   Ò  r   zBasicConstraints.cac                 C   r~   r    )rÇ   r/   r(   r(   r)   rÅ   Ö  r   zBasicConstraints.path_lengthc                 C   r   )Nz:<BasicConstraints(ca={0.ca}, path_length={0.path_length})>r    r/   r(   r(   r)   rb   Ú  r¾   zBasicConstraints.__repr__rq   c                 C   r¿  o
    ?÷[bz  ã                   @   s   d dl mZ G dd deZedkrCd dlmZ e Zeeee eeee G dd dZ	e	 Z
eee
e eede d	S d	S )
é    )ÚABCc                   @   s&   e Zd ZdZededefddZdS )ÚRichRenderablea#  An abstract base class for Rich renderables.

    Note that there is no need to extend this class, the intended use is to check if an
    object supports the Rich renderable protocol. For example::

        if isinstance(my_object, RichRenderable):
            console.print(my_object)

    ÚotherÚreturnc                 C   s   t |dp	t |dS )z6Check if this class supports the rich render protocol.Ú__rich_console__Ú__rich__)Úhasattr)Úclsr   © r
   úWE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\abc.pyÚ__subclasshook__   s   zRichRenderable.__subclasshook__N)Ú__name__Ú
__module__Ú__qualname__Ú__doc__ÚclassmethodÚtypeÚboolr   r
   r
   r
   r   r      s    
r   Ú__main__)ÚTextc                   @   s   e Zd ZdS )ÚFooN)r   r   r   r
   r
   r
   r   r      s    r   Ú N)Úabcr   r   r   Úpip._vendor.rich.textr   ÚtÚprintÚ
isinstancer   Úfr
   r
   r
   r   Ú<module>   s    ô                                                                                                                                                                                                                                 Zede	dd fddZ
edefd	d
ZedefddZdefddZdejdefddZdejdefddZdefddZdefddZdS )r   r&   r   Nc                 C   s
   || _ d S r    ©Z_digest)r0   r&   r(   r(   r)   r@   '  ry   zSubjectKeyIdentifier.__init__r   c                 C   s   | t |S r    r   )r   r   r(   r(   r)   Úfrom_public_key*  s   z$SubjectKeyIdentifier.from_public_keyc                 C   r~   r    r§   r/   r(   r(   r)   r&   0  r   zSubjectKeyIdentifier.digestc                 C   r~   r    r§   r/   r(   r(   r)   r   4  r   z#SubjectKeyIdentifier.key_identifierc                 C   ra   )Nz$<SubjectKeyIdentifier(digest={0!r})>)rN   r&   r/   r(   r(   r)   rb   8  rc   zSubjectKeyIdentifier.__repr__rq   c                 C   s   t |tstS t | j|j¡S r    )r!   r   rs   r   Zbytes_eqr&   rt   r(   r(   r)   ru   ;  s   
zSubjectKeyIdentifier.__eq__c                 C   rw   r    r(   rt   r(   r(   r)   rx   A  ry   zSubjectKeyIdentifier.__ne__c                 C   rz   r    )r|   r&   r/   r(   r(   r)   r}   D  ry   zSubjectKeyIdentifier.__hash__c                 C   r   r    r   r/   r(   r(   r)   r"   G  ry   z!SubjectKeyIdentifier.public_bytes)rF   rG   rH   r   ZSUBJECT_KEY_IDENTIFIERr=   rR   r@   r¥   r	   r¨   r   r&   r   rI   rb   rO   r   r   ru   rx   r8   r}   r"   r(   r(   r(   r)   r   $  s$    ÿþr   c                   @   ó   e Zd ZejZdejd ddfddZe	d\Z
ZZdefdd	Zd
ejdefddZd
ejdefddZdefddZdefddZdS )ÚAuthorityInformationAccessÚdescriptionsÚAccessDescriptionr   Nc                 C   ó,   t |}tdd |D std|| _d S )Nc                 s   r   r    ©r!   r¬   r   r(   r(   r)   r   R  ó    z6AuthorityInformationAccess.__init__.<locals>.<genexpr>ú@Every item in the descriptions list must be an AccessDescription©rW   r   r^   Ú_descriptions©r0   r«   r(   r(   r)   r@   N  ó   ÿ
z#AuthorityInformationAccess.__init__r²   c                 C   ra   )Nz <AuthorityInformationAccess({})>©rN   r²   r/   r(   r(   r)   rb   \  rc   z#AuthorityInformationAccess.__repr__rq   c                 C   rr   r    )r!   rª   rs   r²   rt   r(   r(   r)   ru   _  rv   z!AuthorityInformationAccess.__eq__c                 C   rw   r    r(   rt   r(   r(   r)   rx   e  ry   z!AuthorityInformationAccess.__ne__co
    @÷[bF  ã                   @   s¨   d dl mZmZ d dlmZmZ G dd deZG dd deZedkrRdd	l	m
Z
 dd
lmZ e Zejdd e e
 ¡ W d   dS 1 sKw   Y  dS dS )é    )ÚABCÚabstractmethod)ÚAnyÚCallablec                   @   s&   e Zd ZdZededdfddZdS )ÚPagerzBase class for a pager.ÚcontentÚreturnNc                 C   s   dS )zbShow content in pager.

        Args:
            content (str): Content to be displayed.
        N© ©Úselfr   r	   r	   úYE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\pager.pyÚshow   s    z
Pager.show)Ú__name__Ú
__module__Ú__qualname__Ú__doc__r   Ústrr   r	   r	   r	   r   r      s    r   c                   @   s4   e Zd ZdZdedefddZdeddfddZdS )	ÚSystemPagerz'Uses the pager installed on the system.r   r   c                 C   s   t d |¡S )NÚpydoc)Ú
__import__Úpagerr
   r	   r	   r   Ú_pager   s   zSystemPager._pagerNc                 C   s   |   |¡ dS )z!Use the same pager used by pydoc.N)r   r
   r	   r	   r   r      s   zSystemPager.show)r   r   r   r   r   r   r   r   r	   r	   r	   r   r      s    r   Ú__main__é   )Úmake_test_card)ÚConsoleT)ÚstylesN)Úabcr   r   Útypingr   r   r   r   r   r   r   Úconsoler   r   Úprintr	   r	   r	   r   Ú<module>   s    "ÿû                                            tificateRevocationList.is_signature_validN),r'   r(   r)   r   r   r   r   rQ   r   r   r   rk   rR   rT   r   r   r   r   rw   r   ry   r   rs   r8   r   r   r   r.   r{   r   r   rV   rM   rN   r]   Úoverloadr_   ÚsliceÚListÚUnionÚIteratorr^   r   r   r$   r$   r$   r%   r   6  sb    ÿþ
þÿþr   c                   @   s>  e Zd ZejdedefddZejdedefddZejde	fddZ
ejdefd	d
ZejdefddZejdejej fddZejdefddZejdefddZejdefddZejdejdefddZejdefddZejdefddZ ejdefddZ!ejdedefdd Z"d!S )"ÚCertificateSigningRequestrI   r   c                 C   rh   r}   r$   rL   r$   r$   r%   rM   ²  rl   z CertificateSigningRequest.__eq__c                 C   rh   r~   r$   rL   r$   r$   r%   rN   ¸  rl   z CertificateSigningRequest.__ne__c                 C   rh   r   r$   rE   r$   r$   r%   rP   ¾  rl   z"CertificateSigningRequest.__hash__c                 C   rh   ro   r$   rE   r$   r$   r%   rp   Ä  rl   z$CertificateSigningRequest.public_keyc                 C   rh   rt   r$   rE   r$   r$   r%   ru   Ê  rl   z!CertificateSigningRequest.subjectc                 C   rh   rv   r$   rE   r$   r$   r%   rw   Ð  rl   z2CertificateSigningRequest.signature_hash_algorithmc                 C   rh   rx   r$   rE   r$   r$   r%   ry   Ù  rl   z1CertificateSigningRequest.signature_algorithm_oidc                 C   rh   )z@
        Returns the extensions in the signing request.
        Nr$   rE   r$   r$   r%   r.   ß  rl   z$CertificateSigningRequest.extensionsc                 C   rh   )z/
        Returns an Attributes object.
        Nr$   rE   r$   r$   r%   r2   å  rl   z$CertificateSigningRequest.attributesr   c                 C   rh   )z;
        Encodes the request to PEM or DER format.
        Nr$   r   r$   r$   r%   r   ë  rl   z&CertificateSigningRequest.public_bytesc                 C   rh   rz   r$   rE   r$   r$   r%   r{   ñ  rl   z#CertificateSigningRequest.signaturec                 C   rh   )zd
        Returns the PKCS#10 CertificationRequestInfo bytes as defined in RFC
        2986.
        Nr$   rE   r$   r$   r%   Útbs_certrequest_bytes÷  rl   z/CertificateSigningRequest.tbs_certrequest_bytesc                 C   rh   )z8
        Verifies signature of signing request.
        Nr$ o
    @÷[by  ã                   @   sd   d dl mZmZmZmZmZ d dlmZ erd dlm	Z	 dZ
dedefddZd	edd
fddZdS )é    )ÚAnyÚCallableÚcastÚSetÚTYPE_CHECKING)Úisclass©ÚRenderableTypeZ-aihwerij235234ljsdnp34ksodfipwoe234234jlskjdfÚcheck_objectÚreturnc                 C   s   t | tpt| dpt| dS )z+Check if an object may be rendered by Rich.Ú__rich__Ú__rich_console__)Ú
isinstanceÚstrÚhasattr)r
   © r   ú\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\protocol.pyÚis_renderable
   s
   
ÿýr   Ú
renderabler	   c                 C   s~   ddl m} t }t| dr:t| s:t| trt| S t| d}| } t| }||v r,q:| 	|¡ t| dr:t| rt
|| S )zÕCast an object to a renderable by calling __rich__ if present.

    Args:
        renderable (object): A potentially renderable object

    Returns:
        object: The result of recursively calling __rich__.
    r   r   r   )Úpip._vendor.rich.consoler	   Úsetr   r   Ú
_GIBBERISHÚreprÚgetattrÚtypeÚaddr   )r   r	   Zrich_visited_setZcast_methodZrenderable_typer   r   r   Ú	rich_cast   s   	


÷
r   N)Útypingr   r   r   r   r   Úinspectr   r   r	   r   Úboolr   Úobjectr   r   r   r   r   Ú<module>   s    	                                                                                                                                                                        ÿÿþr   )r"   Zcryptography.hazmat.primitivesr   Z(cryptography.hazmat.primitives.twofactorr   Z-cryptography.hazmat.primitives.twofactor.hotpr   r   r   Úobjectr   r   r   r   r   Ú<module>   s
                                                                                                                                                                                                                                                                                             ÂeÎÃÀtñ­Q$öÝ¿8Ï©Uã!Ø¨¨Fäw¦0SkA¸7câ!+7Ùñ»¿ÛÉ`¦ çäÜ0ñD¿ÿü}y±A*üp©ÿ£viRé~QWâüßåfb{%|.­ºº<&÷Ü+ù~¢,óß­Wmö0XÕf-ß®OxÄ$ñsP^¡µUX Å©Úr3kªùp>ä
ðX¾¸ûfîË:ÀïßzKr­,Äì«   þªY®í©³9ªÈßþDl,¬¸õpBAÒø[üùÙ¥Ã;¿+Cìù-y¦ê¯Ç¼ÙtS¤OùäX2ò®iqD$]3ÔÙ\±ØÀçª¾Wé¤gXÚH³ÃK%ðú]8VJ)`,VÛô¢Ã6áöÿ:èØÊ5ãbô=NW)VÊÕ©Ë!ÿº2öÜËoÔÿÀ¦H°Ý¥Ô4ñ²Çøfrêô9hr{äñw|Q{Ý»¨¶Çé]æªB´î	}O´j3foëbùålåû'ÀÙ
bnöfax8ÊTØ7¸ÚÈ'ÚêémQæØ¿(º)	/¯ð¢jIQ´3«ómG âÌí$©UÂH(K¿!*[(½ô~² `C¼"È¬ÌpÍ9y³{øcü§©EñníßlÀ¹Áµcvj@î$D,¬§#Þe79?O__b	dlP+!é ¼Óah1dAwOlö"ôu¤NÜrº5Wíshdè[¦|{ÏA[ZrÔ{&7ú>l7ë²¯pÙ×EéKÙ<Øýªâ9§Â¨ÑUE¨En(HbÆÌîpbÝ×ú¯Å¹8¾gOªÕdEàX/N8½­ïÎ_zëËÏøãÔ-/Ò&¾Eµ	äÊD¶«$µTñQsò¶§f©&Û{½õ/à ¶)Åv£'åfß;½vÝ¤7éÇ£Hzß	HÁÐS?ÑÎT
z§ ÉíEdÅëà;²ÇNqkd³QkÎ¹P¿Õ§Ãm*°V¼ìº&¯V_ó` ©¶im"½®ëÉþÉßWÕÝ?fóúæiõåo:o<.ÞüÓi+ð¡%¦eµ.>Q§mDÕëåiÆÃ[ ùA,2×s+2ïË-5åãs;»kZ©UôUÿÒÝc?Ø¦?àl¯¢Kÿò(Õ©Ué·­¶Cødúáßîù'G[;êû2¶(Ü^x¼e¡qØùZZÔª«êÁBÆjº'FÜÁPÍÄwLRà%×YêP)*Ö·£^ ßÉJÿÓÍvFÇ$§sýÜÓ'cþ£a&Á}!à±9.°OgÜ×h'¥Ñ ÜN	Seªupªâ³ù¨`Bnò.o±¿;Í~<éîW6ðÌP2Øì"ÇÃN¸õÅwÄØ66cÝK±ÀÀë·æ¥jÌ=Ò ¿fßRÕq÷à±î®AÔTrãÁèÄA`a ·0AñN¯kKn_úbU[ãò¿ÖòFöMÞ8Íè4LÚßlsT£±e"HDkëó,Ü  khEO-2<bÃe44>ø/¸Ä|AlÇxXþX¯áWÜ±N:ø´{ëíSñr;;ôk¿ª¿5ÈÍ7S}§ ¡=Ñ­-2kzqfÝGcÞEø´»#Na£ÊÀ®C°1ÈµàE¹ÝuL¯wg,17ö¨¾P_æ2Ý#õ[#é¥yébw%~D¬Ö U®o¿}1¦¿èñ&W<[t¡Páa<ÎàíBE+ÔÍéôÐ}ïÒöC<¥ålF=¹È1Sçî©_ñ&6 Å.ÃñÍ½2îµÑÜóx>%Zç&×¿o©hÂvB[=ÊÈJ6&£ÝÇÕz,z
úÚWé µâè²ÃëüRjÚWÞA'@^q§ÑÍñ§ÔÁc×ÈùfÜÏÖ÷[rNñ§óFÏ¸ùÍ[Ù.Ä$×uBxlðô¥£v_¦æÜ!)ñ¹Ð®^¶SúoÀ¬ULZÂëÎ¯ÉaØTPZ*°åÃõ¶¶uì±<<ÿ¯V,çÇÈ&Rø{ä9ò!{¦Ôª¨×óêâ~ªÈ¾(ðAVÖ{ým§ïf#GJoaVð6z#ôdçi¼ãkZ!ü5n3U\@õë¼E©0¬ÆÖ¨üf}nâ{|ÐZ8QnSÃpI8ðîÌÏ*ïó¦Y·k&¸7nÏ6¸àiX^.ðÅScf³rÐÖ|é~òy6uææx«W=fMâ«.(ÊN¹*Ê>ÊäÝè¿,ôÇMZl$1¬
Þ¶	ïÏí×ME§«øð:ë;ÂJiÅ|P¨ÇÁÅÙeoÃ±£ÕÔXRc±"¢­ª]êgkÙdù±³²Òâ}É«xHf«3¡/ßD8ÜíÐ¥ò'wÜyëØ3Ê o~
/7Øo¥ÄuæâQ`¯¦o
    @÷[b  ã                   @   sX   d dl mZmZ ddlmZ ddlmZ er"ddlmZm	Z	m
Z
mZ G dd deZdS )	é    )ÚOptionalÚTYPE_CHECKINGé   )ÚJupyterMixin)ÚMeasurement)ÚConsoleÚConsoleOptionsÚRenderableTypeÚRenderResultc                   @   sX   e Zd ZdZddddee ddfdd	Z	
					dddZ	
					dddZdS )Ú	ConstrainzêConstrain the width of a renderable to a given number of characters.

    Args:
        renderable (RenderableType): A renderable object.
        width (int, optional): The maximum width (in characters) to render. Defaults to 80.
    éP   Ú
renderabler	   ÚwidthÚreturnNc                 C   s   || _ || _d S ©N)r   r   )Úselfr   r   © r   ú]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\constrain.pyÚ__init__   s   
zConstrain.__init__Úconsoler   Úoptionsr   r
   c                 c   sD    | j d u r| jV  d S | t| j |j¡}| | j|¡E d H  d S r   )r   r   Úupdate_widthÚminÚ	max_widthÚrender)r   r   r   Zchild_optionsr   r   r   Ú__rich_console__   s
   
zConstrain.__rich_console__r   c                 C   s*   | j d ur| | j ¡}t ||| j¡}|S r   )r   r   r   Úgetr   )r   r   r   Úmeasurementr   r   r   Ú__rich_measure__   s   
zConstrain.__rich_measure__)r   )r   r   r   r   r   r
   )r   r   r   r   r   r   )	Ú__name__Ú
__module__Ú__qualname__Ú__doc__r   Úintr   r   r   r   r   r   r   r   
   s"    ÿÿ
þ	ÿÿþr   N)Útypingr   r   Újupyterr   Úmeasurer   r   r   r   r	   r
   r   r   r   r   r   Ú<module>   s                                                                                                                                                                                                                                                                                                              j| ¡ ¡}||fS )z Make ECDSA public key from data.)rr   r   ÚEllipticCurvePublicKeyZfrom_encoded_pointr!   rh   )rR   rt   r+   Ú
curve_namer   r%   r   r   r   rv   d  s
   
ÿz_SSHFormatECDSA.load_publicc                 C   sH   |   |¡\\}}}t|\}}||f|krtdt || j¡}||fS )z!Make ECDSA private key from data.z"Corrupt data: ecdsa field mismatch)rr   rJ   r$   r   Zderive_private_keyr!   )rR   r+   rx   r   r   Úsecretrw   r   r   r   r~   l  s   z_SSHFormatECDSA.load_privatec                 C   s*   |  tjtj¡}| | j¡ | |¡ dS )zWrite ECDSA public keyN)Úpublic_bytesr   ZX962r   ZUncompressedPointr`   r   )rR   r%   r   r   r   r   r   r   v  s
   ÿz_SSHFormatECDSA.encode_publicc                 C   s,   |  ¡ }| ¡ }|  ||¡ | |j¡ dS )zWrite ECDSA private keyN)r%   r}   r   ra   Zprivate_value)rR   rw   r   r%   r}   r   r   r   r   ~  s   z_SSHFormatECDSA.encode_privateN)
rj   rk   rl   rm   rT   rr   rv   r~   r   r   r   r   r   r   r   J  s    

r   c                   @   rn   )Ú_SSHFormatEd25519z~Format for Ed25519 keys.

    Public:
        bytes point
    Private:
        bytes point
        bytes secret_and_point
    c                 C   s   t |\}}|f|fS )zEd25519 public fields)rD   )rR   r+   r   r   r   r   rr     s   
z_SSHFormatEd25519.get_publicc                 C   s(   |   |¡\\}}tj | ¡ ¡}||fS )z"Make Ed25519 public key from data.)rr   r   ÚEd25519PublicKeyZfrom_public_bytesrh   )rR   rt   r+   r   r%   r   r   r   rv     s
   ÿz_SSHFormatEd25519.load_publicc                 C   sb   |   |¡\\}}t|\}}|dd }|dd }||ks#|f|kr'tdtj |¡}||fS )z#Make Ed25519 private key from data.Nr    z$Corrupt data: ed25519 field mismatch)rr   rD   r$   r   ÚEd25519PrivateKeyZfrom_private_bytes)rR   r+   rx  o
    @÷[b  ã                
   @   sÄ   d dl Z d dlmZmZmZ ddlmZmZ ddlm	Z	 e  
d¡Zdedeeeeef  fd	d
Zddedededee fddZedkr`ddlmZ eddZe d¡ eedddd dS dS )é    N)ÚIterableÚListÚTupleé   )Úcell_lenÚ
chop_cells)Ú	loop_lastz	\s*\S+\s*ÚtextÚreturnc                 c   sX    d}t  | |¡}|d ur*| ¡ \}}| d¡}|||fV  t  | |¡}|d usd S d S )Nr   )Úre_wordÚmatchÚspanÚgroup)r	   ÚpositionZ
word_matchÚstartÚendÚword© r   úYE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_wrap.pyÚwords
   s   
ür   TÚwidthÚfoldc                 C   sÊ   g }|j }d}t}t| D ]U\}}}	||	 ¡ }
||
 |kr\|
|krO|rDtt|	||dD ]\}}|r8||}q-|t|7 }|| q-q|rJ|| ||	}q|r[|r[|| ||	}q|||	7 }q|S )Nr   ©r   )Úappendr   r   Úrstripr   r   Úlen)r	   r   r   Zdividesr   Zline_positionÚ	_cell_lenr   Z_endr   Zword_lengthÚlastÚliner   r   r   Údivide_line   s4   ÿ

ù	
r   Ú__main__)ÚConsoleé
   )r   z@12345 abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWXYZ 12345Úabcdefghijklmnopqrstuvwxyzé   r   )T)ÚreÚtypingr   r   r   Úcellsr   r   Ú_loopr   Úcompiler   ÚstrÚintr   Úboolr   Ú__name__Úconsoler!   Úprintr   r   r   r   Ú<module>   s    
  


û                       µ¦}ú[ê±¶£$÷¾r}jÿø,Ö]ò¹ÓMq)î1kgÏRÊÁÑ®K&äÉBðêÔÇF
»hü¦+é°saéxFÃ.Ñ¦éß`'ä0^õÊÁHÙÔgªVklEîø­4DFÔ©SÉºêÈ?³H¼Ï¶OFÈâ¨!mï°·U«×:¤bãäUª¡aÝÖ©,¶ÍPÐ;ÕG­¶è7Ý0ß»)dâ³rÏN.¡Ê)·-¯Æ·wÕ[¯"LqêlBÖM¨QxRxþ^×¡(tí½@¢ò®Bm§{K¤ËPD£Ú1|HÆÊÊw­?þ)4OkrYÉpà~ÎµÄÃ.n­_ãë2¼eäihmVaxy+6é¼á~Ëö¾£©È÷Øpa7îD¹s¸ûHßy8å¹ÁËÑFìÿÜ®öxw8õÛ0Qj¼Gý@Êî«e^Éµrúß³Îxw:Lm×¶	ï¹&°ïØìÅÔ­qÐ
	ëu½¡Õ{õ\Á8®U^M<u¤wÁÞbéum^Y\piN/vfàAÌýlUþÆÉ?KÔøÐºD?³ì¬åQÀ^	e._lw4NïºÆôZ÷×ùö8Ì×M³g1?à7Di&Ãúô`Ouøo½i åb'kÈ.ËþhèÈþ¡¥A²£ýå3UÕá<õi¦Ô(°`(Ð¸ª[¼ïy¾rÄbGyÙÕªAw¥_m¿pàVU>3mÙèlâ óHÆ7`Ø¶þ¨ÄÜD4MÅëô		9v«áÓV¡çhTçqÍ¯/wç;úvx¥jbikW!3ÈÙbÆ¹<»c[£bùª"74Sªgá ·ÄÁ­¯Ñ»nyÂd¹q¥'ªÇ¶ÿ2<wy,F÷Eý»ÝÿµXâ .Ñ¨BüÛ·`dòçí]>q[#U¤ºÏûu4¸ïdÙIpvÜ7y²¹Eà>>M6mò±<Q?4m<;ô~Ö(Ù·ÇQS NzdgÎq.9íó}¡¸E^Çÿôÿû¼Þü=½p7ÿÿÐíäìÞ.95%3à¾wÍÀ3}=àÊ¨â}âSýùqæàzeÊ Uv3£IÃô\ÃÖ êå(äpL-ß
åéäÄUúJ¿öÊ{~¦ºY­mq¾¹ÿâÑ-ãØ[aÇ"åE ÎÙÈU,ìÌäßæéßð%ÿÂýÒp,,¯j)Õçíg¾ô?[ß§KsrÞöÄVt7ÚÜõg©wöQÖ¾ß±cèâ[ZÎniCðÚ?©H>Ñ×dûç¿Ï#e;æMò2îØÎ­úÜDL»RZnLÊkÄz×ihþå 7~ßiÉ\</gáwðmViÄÍi¿îV<w6ªõfr¼yW"4n£/u×Âþì9<ì8!¨0'À^A×èR:ñâ·Gw¹p²i°Å-û.ËvQ¸õqM#"<_CNEö]ëÌ I3Ñ¦ý7%(z{SþÞ dêÄ}Ë·e¦;6ûÏËëRbq'A?¡îen¶Éeû-ºÖ·?ýe:A\uÂêä Uu¦÷í"MTVßö:)ªºD¬£±-Ãt¼vx(+ñ;|ln*^J®ºvØúCtÇHeç\{ò}U(\=¦½SqifªknÄÍiÃsvfxH%p,ÛZ°,¥½mJZFèÙ§ô"³d»QC½ØhÎvÝÏØÁ<ÒiS7Ïì$Ød«ã1&'Dê·TáÑÖpRÝ¬u"O[¼4zµL¯loìw¤D»üeÂJbÇpÞ=N×´ÜP»Wëko´áäójyÿKïgþ6?7h
ñ*æÇY-<­ùD4Aä³¸n¬¿QsEoxÜ.P&,ÝÕOøö^8[yñ¸µeÙ¤«G¶7À>fÊÞÿ¢}e»ß{¬%Rs@¶2²8!Ia&m@HÇ0â¹*¦FLJ&Çàt?û#Q;ý5j)J¡¢i¹:´bGÚ{êêÎê\Â îfÌmíæÀäpÚqgì²¤É5nkM5-g`¼«sôªv[W¹W¨,> eY+ïþiÎ+©ÌâÇTÞ#F+;&\©ºÅ4¹1µox³ ãîiºü*¹$dÕÖáºVs÷oý'<´áq7£uÈ«»ÓF´Á÷ÑË(é+­(gøöÊ@[óþÍP.y,QÔÀëÍ-x¼ôqfúÑÌçNE£Pf/õþ¿Ë)È·RÛ-}.uÒÜ¶ïùñRYh!0¾½ï¶·¨Èëöibí!Æ?'Þ ÙÿõÍ'Â3Ó'~7UÀæËEõ\)yÅ`¡ÕÚK/&xïÿ|YSq:Ã9JzAT°³Ûi+ùôî<ÜúNÊ`ñ-V½­Òãôg¹Lßê¢ p_|U%+^GHÍ8ë÷¸P»¾&û4Ô/i88C"þ!oc ñ1þqFúÇ÷>fñ£®¸a¥ð[7#R_¹¿ÿec,òEvzS+·-<¬ñæé§zíç¶a#òÓûtkª°#¶ÿÎª/#[ÿÿ°r¬ÿÓ¬õþU<>ÎcæÛtG3ûzsÿRÂæäcûµp¨Å¿Ì³e0ùôa^lÀèAÈ£;YçM¦Ü³²|J>¹j¦Wco G.Y¶[àËqì.¸,13¿}[m¸tI¶ç³ixbÿÿø'BN"¬Ókm²
 Z¦+líX@7í«à9m[¼µ5PvÎð@@dÔÇ÷½3z¨òuÃüìE¦[3TÂ	×ÃxÓmHe6(ËCLX-s¨uxÞcúÕ{E~MÄôf£r¬~¶»`±x}Ýh6Ö¡¡á Mb®àVÈ~"XH]ÑûyCpkÞÎÍxÆdÒøáöo'íhþUk¢øbæ>%§Þ]Ô{å©¡?ÿÓ»ÄÉHºá:ïÑ.&ÿÙNPÅ½cLo
    @÷[bÔ  ã                   @   s   d dl mZmZmZ edZdee deeeef  fddZdee deeeef  fddZdee deeeeef  fd	d
ZdS )é    )ÚIterableÚTupleÚTypeVarÚTÚvaluesÚreturnc                 c   sN    t | }zt|}W n
 ty   Y dS w d|fV  |D ]}d|fV  qdS )z9Iterate and generate a tuple with a flag for first value.NTF©ÚiterÚnextÚStopIteration)r   Úiter_valuesÚvalue© r   úYE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_loop.pyÚ
loop_first   s   ÿ
ÿr   c                 c   sR    t | }zt|}W n
 ty   Y dS w |D ]	}d|fV  |}qd|fV  dS )z8Iterate and generate a tuple with a flag for last value.NFTr   )r   r   Úprevious_valuer   r   r   r   Ú	loop_last   s   ÿ
r   c                 c   s^    t | }zt|}W n
 ty   Y dS w d}|D ]}|d|fV  d}|}q|d|fV  dS )zBIterate and generate a tuple with a flag for first and last value.NTFr   )r   r   r   Úfirstr   r   r   r   Úloop_first_last   s   ÿr   N)	Útypingr   r   r   r   Úboolr   r   r   r   r   r   r   Ú<module>   s
    ""(                                                                                                                                                                                                                                                       l_certs)Úselfr	   ZsignersZadditional_certsr   r   r   Ú__init__1   s   
zPKCS7SignatureBuilder.__init__r	   r
   c                 C   s(   t d| | jd urtdt|| jS )Nr	   zdata may only be set once)r   r!   Ú
ValueErrorr   r"   )r$   r	   r   r   r   Úset_data6   s   

zPKCS7SignatureBuilder.set_dataÚcertificateÚprivate_keyÚhash_algorithmc                 C   sn   t |tjtjtjtjtjfstdt |tj	stdt |t
jtjfs*tdt| j| j|||fg S )NzLhash_algorithm must be one of hashes.SHA1, SHA224, SHA256, SHA384, or SHA512ú&certificate must be a x509.Certificatez.Only RSA & EC keys are supported at this time.)Ú
isinstancer   ÚSHA1ÚSHA224ÚSHA256ÚSHA384ÚSHA512Ú	TypeErrorr   ÚCertificater   ÚRSAPrivateKeyr   ÚEllipticCurvePrivateKeyr   r!   r"   )r$   r(   r)   r*   r   r   r   Ú
add_signer=   s,   ûþ
ÿÿþz PKCS7SignatureBuilder.add_signerc                 C   s,   t |tjs
tdt| j| j| j|g S )Nr+   )r,   r   r3   r2   r   r!   r"   r#   )r$   r(   r   r   r   Úadd_certificate^   s
   ÿz%PKCS7SignatureBuilder.add_certificateÚencodingÚoptionsr   c                 C   sä   t | jdkrtd| jd u rtdt|}tdd |D s%td|tjjtjj	tjj
fvr6tdtj|v rDtj|vrDtdtj|v rW|tjj	tjjfv rWtd	tj|v retj|v retd
ddlm} | | ||¡S )Nr   zMust have at least one signerzYou must add data to signc                 s   s    | ]}t |tV  qd S r    )r,   r   )Ú.0Úxr   r   r   Ú	<genexpr>s   s    z-PKCS7SignatureBuilder.sign.<locals>.<genexpr>z*options must be from the PKCS7Options enumz1Must be PEM, DER, or SMIME from the Encoding enumzAWhen passing the Text option you must also pass DetachedSignaturez9The Text option is only available for SMIME serializationzFNoAttributes is a superset of NoCapabilities. Do not pass both values.r   )Úlenr"   r&   r!   ÚlistÚallr   ÚEncodingZPEMZDERZSMIMEr   r   r   r   r   r   r   Z
pkcs7_sign)r$   r8   r9   r   Zosslr   r   r   Úsignh   sL   
ýÿÿþÿþÿÿþÿzPKCS7SignatureBuilder.signr    )r   r   r   r%   Úbytesr'   r   r3   Ú_ALLOWED_PRIVATE_KEY_TYPESÚ_ALLOWED_PKCS7_HASH_TYPESr6   r7   r   r@   ÚtypingÚIterabler   ÚAnyrA   r   r   r   r   r   0   s6    þýü
û!ÿ
þüþýüûr   )rEo
    @÷[bÞ  ã                   @   sN   d dl mZ d dlmZmZmZ edZedZG dd deeef eZdS )é    )ÚOrderedDict)ÚDictÚGenericÚTypeVarÚCacheKeyÚ
CacheValuec                       s^   e Zd ZdZdeddf fddZdededdfd	d
Zde	eef dedefddZ
  ZS )ÚLRUCachezÔ
    A dictionary-like container that stores a given maximum items.

    If an additional item is added when the LRUCache is full, the least
    recently used key is discarded to make room for the new item.

    Ú
cache_sizeÚreturnNc                    s   || _ tt|  ¡  d S )N)r	   Úsuperr   Ú__init__)Úselfr	   ©Ú	__class__© ú^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_lru_cache.pyr      s   zLRUCache.__init__ÚkeyÚvaluec                 C   s4   || vrt | | jkr| jdd t | ||¡ dS )z7Store a new views, potentially discarding an old value.F)ÚlastN)Úlenr	   Úpopitemr   Ú__setitem__©r   r   r   r   r   r   r      s   zLRUCache.__setitem__r   c                 C   s*   t  | |¡}t  | |¡ t  | ||¡ |S )z-Gets the item, but also makes it most recent.)r   Ú__getitem__Ú__delitem__r   r   r   r   r   r      s   zLRUCache.__getitem__)Ú__name__Ú
__module__Ú__qualname__Ú__doc__Úintr   r   r   r   r   r   Ú__classcell__r   r   r   r   r   	   s
    &r   N)	Úcollectionsr   Útypingr   r   r   r   r   r   r   r   r   r   Ú<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                _TYPESr
   r3   r   r-   r/   ÚTupler   r@   rI   rJ   ÚIterablerP   rR   r   r   r   r   Ú<module>   sf   þÿ*Iýÿþý

þÿ
üýÿþý
ü
ÿþ
ýüûú                                                                                                                                                                                                                                                                                                     à K ¨.SÏAú¥¤4kÒNTâª¶âî?r$ÒhRåã%>ÿgÜ}põì=øËüxÚ|MÏeET¨               3Kélx"ÞQYä¡>DÏ5Á¹ñR®ç9ÃàpÇ;Î©)¥¡isÄD`'B8   	0   a­Y«ÿü  u.Ü$$r\ê÷Pm ?,¿ÒÕh¸ÁC;¦ÁSÝ­J  âzxcvÌÜNkÌÎÜ¹£¸¶l{Óû\xcKiá¾ä &*S»±å^ôÙ$÷"AS
ªlkåJÍ`À§ñø^Õ?Àµ2}j×Ð`UÆ	¢  f   	P   ¯Wä*ÿ  	ÿ^î'YÔòÉGÛ2H;?¼'Ó¦Üÿ&¢´±ô«r÷kR¨  øâÈßc;MË?xæí:\*¾ã··¾)`}k½ËN9Ì
§±Sõ`®õï>@µî£3\ï«ûÎ+?ke8S"} 1¾  \!åÕ(C }¾çø|ýÃë~ÿësãÚ©@ç[Ä³z
.), ô,ìÏÂ'.NÌ+õq¸KÊÞ%½ÅÑl%áñ©eAa9¦*fNu~ò"¤ÉÐ½ÚÎÀ¦÷Gù7u;|þØ§o|&þýsöO	ÈQÐlÈD\¬.Þ±éÛÎ {p²RQ89|*oånçÄ>µ]ÝÏ>â¿â;ä#Öÿ
Vg/
:Ó®ðukí»ØÇ¤LÉmV²z`JùPàË³ï%¢xW["bÖ4à®{éçoÝB_¡î&(ÍC.öÐUlÅõOy7Âº*àîgÚ?Z¸p~×úÛîxÏÏÐx>·ïñN·>=ªT               Ö$ïpI       	0   a¯]«ÿü  u.Ü$$r\ê÷Pm ?,¿ÒÕh¸ÁC;¦ÁSÝ­J  âzxcvÌÜNkÌÎÜ¹£¸¶l{Óû\xcKiá¾ä &*S»±å^ôÙ$÷"AS
ªlkåJÍ`À§ñø^Õ?Àµ2}j×Ð`UÆ	¢  f   	P   ±[ä*ÿ  	ÿ^î'YÔòÉGÛ2H;?¼'Ó¦Üÿ&¢´±ô«r÷kR¨  øâÈßc;MË?xæí:\*¾ã··¾)`}k½ËN9Ì
§±Sõ`®õï>@µî£3\ï«ûÎ+?ke8S"} 1¾  \!eÑ   Õ:¼â¯>®
ð<|*mfÎ|ü"9ÕìÙS­y*|8$¥ÅÓy6
ÙNëKq»½¸Þr/Te:30æ,$ÞQë­Ä§~i©Ýâ]#¯~£}¶úøía·o\Óë¡}8í± 9Ùí±SY²¬WÎÃßøa;j^¯x?é+ÎØòï¡àr«	ÈmogÏá3[¾:|B¬]·åð¿K.§¾^_á£²wbPSSÅYZ_üÚ£®¡­¦ö&¸ÁøÉ   §WUçÕÐ#              ÓpáÛÁÓ\w/¡TµRÇ´ ñê/ì%YLDÝÂ`®¤,wdaä¡OáË¤ «Z[â¥%   	0   a±a«ÿü  u.Ü$$r\ê÷Pm ?,¿ÒÕh¸ÁC;¦ÁSÝ­J  âzxcvÌÜNkÌÎÜ¹£¸¶l{Óûo
    ?÷[b½  ã                
   @   s@  d dl mZ d dlZd dlmZmZ ddlmZ ddlm	Z	 e 
d¡jZe	dfd	ed
eeef defddZedddedefddZedddedefddZd	ededefddZd$d	edededee fddZedkreed eddD ]Zee q}ed dd!D ]Zeeded"  ed#e  qdS dS )%é    )Ú	lru_cacheN)ÚDictÚListé   )ÚCELL_WIDTHS)ÚLRUCacheu   ^[ -oÂ Ë¿Í°-Ò]*$i   ÚtextÚ_cacheÚreturnc                    sZ   t | rt| S | | d¡}|dur|S t t fdd| D }t| dkr+||| < |S )z³Get the number of cells required to display text.

    Args:
        text (str): Text to display.

    Returns:
        int: Get the number of cells required to display text.
    Nc                 3   s    | ]} |V  qd S )N© ©Ú.0Ú	character©Z	_get_sizer   úYE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\cells.pyÚ	<genexpr>   s    zcell_len.<locals>.<genexpr>é@   )Ú_is_single_cell_widthsÚlenÚgetÚget_character_cell_sizeÚsum)r   r	   Zcached_resultÚ
total_sizer   r   r   Úcell_len   s   
r   )Úmaxsizer   c                 C   s   t | rdS tt| S )ú±Get the cell size of a character.

    Args:
        character (str): A single character.

    Returns:
        int: Number of cells (0, 1 or 2) occupied by that character.
    r   )r   Ú_get_codepoint_cell_sizeÚord)r   r   r   r   r   #   s   
r   Ú	codepointc                 C   s   t }d}t|d }|| d }	 || \}}}| |k r!|d }n| |kr*|d }n|dkr0dS |S ||k r9	 dS || d }q)r   r   r   é   Téÿÿÿÿ)r   r   )r   Z_tableÚlower_boundÚupper_boundÚindexÚstartÚendÚwidthr   r   r   r   3   s    

ÿör   Útotalc           	      C   sæ   t | rt| }||k r| d||   S | d| S |sdS t| }||kr(| S ||k r4| d||   S d}t| }	 || d }| d|d  }t|}||d krct|d dkrc|dd d S ||kri|S ||krp|}n|}q;)	z?Set the length of a string to fit within given number of cells.ú NÚ r   Tr   r   r    )r   r   r   )	r   r'   ÚsizeÚ	cell_sizer$   r%   ÚposÚbeforeZ
before_lenr   r   r   Úset_cell_sizeP   s4   õr.   Úmax_sizeÚpositionc           
         s   t   fdd| D ddd }|}g g}|d j}|j}|rB| \}}	||	 |kr8| |g¡ |d j}|	}n||	7 }|| |sdd |D S )z-Break text in to equal (cell) length strings.c                    s   g | ]}| |fqS r   r   r   ©Z_get_character_cell_sizer   r   Ú
<listcomp>x   s    ÿzchop_cells.<locals>.<listcomp>Nr    c                 S   s   g | ]}d   |¡qS )r)   )Újoin)r   Úliner   r   r   r2      s    )r   ÚappendÚpop)
r   r/   r0   Ú
charactersr   Úlinesr5   r6   r   r*   r   r1   r   Ú
chop_cellsu   s(   
ÿþ


ø	r9   Ú__main__u   ð½u]   è¿æ¯å¯¹äºæ´²è¯­è¨æ¯æçæµè¯ãé¢å¯¹æ¨¡æ£±ä¸¤å¯çæ³æ³ï¼æç»çæµçè¯±æãé   éP   r    ú|Úx)r   )Ú	functoolsr   ÚreÚtypingr   r   Z_cell_widthsr   Z
_lru_cacher   ÚcompileÚmatchr   ÚstrÚintr   r   r   r.   r9   Ú__name__Úprintr4   ÚrangeÚnr   r   r   r   Ú<module>   s,    & %
ù                                                                                        çüÕUÕX´ÑL)ÖoSu¸Õ4+XÕy#¯Eù/ÅÏ¿ô_U®/ñJ÷¬$õÒØjjEÞÿÓð·èÐ'ªýwÁm6eMU(-ñÙáÉ©åë@{<wñ¯Pl51/4 °Qº-îUÃöFårãyÒ¦ó¶n^Ã÷æûÿ¥é=kö¾ýåÿ:ªuÎÓXà¦-s
Ë_ÉÀ½#9±V7Íb
8Á§;ðñO¢ÆqËÞ¦>-¬¢?é¿ °tX ¦Ýß¼©+iï>¿#±i~Cw"~Îo?ëß68`;U´=aìá\Ðý®øß×~ßn5Íðóïç×7nþSÛ¾?Ïùª«ª°                ;;ÚÖíÙ'ä*;P.#bHÂqòÖ   	0   a%«ÿü  u.Ü$$r\ê÷Pm ?,¿ÒÕh¸ÁC;¦ÁSÝ­J  âzxcvÌÜNkÌÎÜ¹£¸¶l{Óû\xcKiá¾ä &*S»±å^ôÙ$÷"AS
ªlkåJÍ`À§ñø^Õ?Àµ2}j×Ð`UÆ	¢  f   	P   #ä*ÿ  	ÿ^î'YÔòÉo
    @÷[bÑ  ã                   @   s¦   d dl mZmZmZmZ ddlmZ ddlmZ ddl	m
Z
 dZG dd dZG d	d
 d
Zdee defddZdee deddfddZdededdfddZdS )é    )ÚAnyÚDictÚIterableÚListé   )Úget_console)ÚSegment)ÚDEFAULT_TERMINAL_THEMEz<pre style="white-space:pre;overflow-x:auto;line-height:normal;font-family:Menlo,'DejaVu Sans Mono',consolas,'Courier New',monospace">{code}</pre>
c                
   @   sP   e Zd ZdZdededdfddZdee d	ee d
edeeef fddZ	dS )ÚJupyterRenderablez)A shim to write html to Jupyter notebook.ÚhtmlÚtextÚreturnNc                 C   s   || _ || _d S )N)r   r   )Úselfr   r   © r   ú[E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\jupyter.pyÚ__init__   s   
zJupyterRenderable.__init__ÚincludeÚexcludeÚkwargsc                    sF   | j | jd}rfdd| ¡ D } r! fdd| ¡ D }|S )N©z
text/plainz	text/htmlc                    ó   i | ]\}}| v r||qS r   r   ©Ú.0ÚkÚv©r   r   r   Ú
<dictcomp>   ó    z7JupyterRenderable._repr_mimebundle_.<locals>.<dictcomp>c                    ó   i | ]\}}| vr||qS r   r   r   ©r   r   r   r      r   )r   r   Úitems)r   r   r   r   Údatar   ©r   r   r   Ú_repr_mimebundle_   s   z#JupyterRenderable._repr_mimebundle_)
Ú__name__Ú
__module__Ú__qualname__Ú__doc__Ústrr   r   r   r   r#   r   r   r   r   r
      s    ÿÿÿ
þr
   c                
   @   s>   e Zd ZdZdZdee dee dedeeef fddZ	d	S )
ÚJupyterMixinz@Add to an Rich renderable to make it render in Jupyter notebook.r   r   r   r   r   c           	         sl   t  }t| | |j¡}t|}| |¡}||d}r'fdd| ¡ D } r4 fdd| ¡ D }|S )Nr   c                    r   r   r   r   r   r   r   r   ,   r   z2JupyterMixin._repr_mimebundle_.<locals>.<dictcomp>c                    r   r   r   r   r   r   r   r   .   r   )r   ÚlistÚrenderÚoptionsÚ_render_segmentsÚ_render_bufferr    )	r   r   r   r   ÚconsoleÚsegmentsr   r   r!   r   r"   r   r#   #   s   

zJupyterMixin._repr_mimebundle_N)
r$   r%   r&   r'   Ú	__slots__r   r(   r   r   r#   r   r   r   r   r)      s    ÿÿÿ
þr)   r0   r   c                 C   s¨   dt dt fdd}g }|j}t}t | ¡D ]1\}}}|rq||}|rB| |¡}|r3d| d| dn|}|jrBd|j d| d	}|| qd
 |¡}	tj	|	d}
|
S )Nr   r   c                 S   s   |   dd¡  dd¡  dd¡S )zEscape html.ú&z&amp;ú<z&lt;ú>z&gt;)Úreplace)r   r   r   r   Úescape3   s   z _render_segments.<locals>.escapez<span style="z">z</span>z	<a href="z</a>Ú )Úcode)
r(   Úappendr	   r   ÚsimplifyÚget_html_styleÚlinkÚjoinÚJUPYTER_HTML_FORMATÚformat)r0   r6   Ú	fragmentsZappend_fragmentÚthemer   ÚstyleÚcontrolÚruler8   r   r   r   r   r-   2   s"   


r-   r   Nc                 C   sB   t | }t||}zddlm} || W dS  ty    Y dS w )zRender segments to Jupyter.r   )ÚdisplayN)r-   r
   ZIPython.displayrE   ÚModuleNotFoundError)r0   r   r   Zjupyter_renderableZipython_displayr   r   r   rE   K   s   
ýrE   Úargsr   c                  O   s   t  }|j| i |¤S )zProxy for Console print.)r   Úprint)rG   r   r/   r   r   r   rH   Y   s   rH   )Útypingr   r   r   r   r7   r   Úsegmentr   Úterminal_themer	   r>   r
   r)   r(   r-   rE   rH   r   r   r   r   Ú<module>   s                                                                                                                                                                                                                                                                                     o
    @÷[bÅ	  ã                   @   s@  d dl Z d dlmZmZmZ ddlmZ ddlmZ ddl	m
Z
 ddlmZ ddlmZ e jd	kr8d d
lmZ nd d
lmZ erJddlmZmZmZ ed ZG dd deZG dd deZedkrd dl Z d dlmZ d dlmZ eddZedd ee ¡ D ddZe  e¡ e!e j"dkre #e j"d ¡ dS dS dS )é    N)ÚTYPE_CHECKINGÚOptionalÚUnioné   )ÚJupyterMixin)ÚSegment)ÚStyle)ÚEMOJI©Ú_emoji_replace)é   é   )ÚLiteral)ÚConsoleÚConsoleOptionsÚRenderResult)ÚemojiÚtextc                   @   s   e Zd ZdZdS )ÚNoEmojizNo emoji by that name.N)Ú__name__Ú
__module__Ú__qualname__Ú__doc__© r   r   úYE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\emoji.pyr      s    r   c                	   @   s   e Zd Zg d¢ZdddZ		ddedeeef d	ee	 d
dfddZ
eded
efddZd
efddZd
efddZ					
	dddZdS )ÚEmoji)ÚnameÚstyleÚ_charÚvariantu   ï¸u   ï¸)r   r   ÚnoneNr   r   r   Úreturnc                 C   sf   || _ || _|| _zt| | _W n ty   td|w |dur1|  j| j |d¡7  _dS dS )zíA single emoji character.

        Args:
            name (str): Name of emoji.
            style (Union[str, Style], optional): Optional style. Defaults to None.

        Raises:
            NoEmoji: If the emoji doesn't exist.
        zNo emoji called NÚ )	r   r   r   r	   r   ÚKeyErrorr   ÚVARIANTSÚget)Úselfr   r   r   r   r   r   Ú__init__    s   ÿÿzEmoji.__init__r   c                 C   s   t |S )z÷Replace emoji markup with corresponding unicode characters.

        Args:
            text (str): A string with emojis codes, e.g. "Hello :smiley:!"

        Returns:
            str: A string with emoji codes replaces with actual emoji.
        r
   )Úclsr   r   r   r   Úreplace9   s   
zEmoji.replacec                 C   s   d| j dS )Nz<emoji ú>)r   ©r&   r   r   r   Ú__repr__E   s   zEmoji.__repr__c                 C   s   | j S ©N)r   r+   r   r   r   Ú__str__H   s   zEmoji.__str__Úconsoler   Úoptionsr   r   c                 c   s    t | j| | j¡V  d S r-   )r   r   Ú	get_styler   )r&   r/   r0   r   r   r   Ú__rich_console__K   s   zEmoji.__rich_console__)r    N)r/   r   r0   r   r!   r   )r   r   r   Ú	__slots__r$   Ústrr   r   r   ÚEmojiVariantr'   Úclassmethodr)   r,   r.   r2   r   r   r   r   r      s2    
üþ
ýü
ûÿÿþr   Ú__main__)ÚColumns)r   T)Úrecordc                 c   s(    | ]}d |vrd| d| V  qdS )u   âú:z: Nr   )Ú.0r   r   r   r   Ú	<genexpr>Z   s   & r<   )Zcolumn_first)$ÚsysÚtypingr   r   r   Újupyterr   Úsegmentr   r   r   Ú_emoji_codesr	   r   Úversion_infor   Úpip._vendor.typing_extensionsr/   r   r   r   r5   Ú	Exceptionr   r   r   Zpip._vendor.rich.columnsr8   Úpip._vendor.rich.consoleÚsortedÚkeysÚcolumnsÚprintÚlenÚargvÚ	save_htmlr   r   r   r   Ú<module>   s:    
6
þ
ñ                                                                                                                                                                                                                                                                                                                                ±ÄÃ¢¶ýx±J6a}¡Çæ@~aÞ¹Öuºs«©PJKë¼çU0               6f»äºqÏ ¼½î×Ï«Ç®üyçÖsd   	0   aD«ÿü  u.Ü$$r\ê÷Pm ?,¿ÒÕh¸ÁC;¦ÁSÝ­J  âzxcvÌÜNkÌÎÜ¹£¸¶l{Óû\xcKiá¾ä &*S»±å^ôÙ$÷"AS
ªlkåJÍ`À§ñø^Õ?Àµ2}j×Ð`UÆ	¢  f   	P   Fä*ÿ  	ÿ^î'YÔòÉGÛ2H;?¼'Ó¦Üÿ&¢´±ô«r÷kR¨  øâÈßc;MË?xæí:\*¾ã··¾)`}k½ËN9Ì
§±Sõ`®õï>@µî£3\ï«ûÎ+?ke8S"} 1¾  \!eÌÁIÏ¿Ø>çxöÞü»çÏ:
µÎµ"F ÝæM¨jRÏ¸ävtÏÆôò\WS*gãc½,)áx¶oäæ)	8P âFôôû/aÍêÊPs¯o
    @÷[b  ã                   @   sº   d dl m Z  d dlmZmZmZmZmZmZ ddlm	Z	m
Z
 er0ddlmZmZmZ ddlmZ ee ge	f ZG dd dZed	kr[d d
lmZ e Zejddd ejddd dS dS )é    )Údatetime)ÚIterableÚListÚOptionalÚTYPE_CHECKINGÚUnionÚCallableé   )ÚTextÚTextType)ÚConsoleÚConsoleRenderableÚRenderableType©ÚTablec                   @   s¨   e Zd Z						ddedededeeef d	ed
ee ddfddZ							dddde
d dee deeeef  dedee dee dee ddfddZdS )Ú	LogRenderTFú[%x %X]é   Ú	show_timeÚ
show_levelÚ	show_pathÚtime_formatÚomit_repeated_timesÚlevel_widthÚreturnNc                 C   s.   || _ || _|| _|| _|| _|| _d | _d S )N)r   r   r   r   r   r   Ú
_last_time)Úselfr   r   r   r   r   r   © r   ú_E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_log_render.pyÚ__init__   s   	
zLogRender.__init__Ú Úconsoler   Úrenderablesr   Úlog_timeÚlevelÚpathÚline_noÚ	link_pathr   c	                 C   s  ddl m}	 ddlm}
 |
jdd}d|_| jr|jdd | jr)|jd	| j	d
 |jdddd | j
r<|r<|jdd g }| jrx|pF| ¡ }|pK| j}t|rU||}nt| |¡}|| jkrp| jrp| tdt| ¡ n| |¡ || _| jr| |¡ | |	|¡ | j
r»|r»t }|j||rd| ndd |r¶| d¡ |j| |r²d| d| ndd | |¡ |j|  |S )Nr	   )ÚRenderablesr   )r   r	   )ÚpaddingTzlog.time)Ústylez	log.level)r*   Úwidthzlog.messageÚfold)Zratior*   Úoverflowzlog.pathú zlink file://r    ú:ú#)Z
containersr(   Útabler   ZgridÚexpandr   Z
add_columnr   r   r   Úget_datetimer   Úcallabler
   Ústrftimer   r   ÚappendÚlenÚadd_row)r   r!   r"   r#   r   r$   r%   r&   r'   r(   r   ÚoutputÚrowZlog_time_displayZ	path_textr   r   r   Ú__call__    sN   





ÿ
þ

zLogRender.__call__)TFTr   Tr   )NNr    NNN)Ú__name__Ú
__module__Ú__qualname__Úboolr   ÚstrÚFormatTimeCallabler   Úintr   r   r   r   r;   r   r   r   r   r      s^    ùþýü
ûúù
ø÷þýüûúùø	÷
ör   Ú__main__)r   z[on blue]HelloÚright)Újustifyz[on blue]helloN)r   Útypingr   r   r   r   r   r   Útextr
   r   r!   r   r   r   r1   r   rA   r   r<   Úpip._vendor.rich.consoleÚcÚprintÚlogr   r   r   r   Ú<module>   s     Kû                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 o
    @÷[b(  ã                	   @   s~   d dl mZmZmZ d dlZddlmZ ee Zeegef Z	ee	egef Z
de d¡jfdedee de
d	efd
dZdS )é    )ÚCallableÚMatchÚOptionalNé   )ÚEMOJIz!(:(\S*?)(?:(?:\-)(emoji|text))?:)ÚtextÚdefault_variantÚ
_emoji_subÚreturnc                    sR   t jddd}|j|r| |d¡nd dtt dtf fdd}||| S )	zReplace emoji code in text.u   ï¸u   ï¸)r   ÚemojiÚ Úmatchr
   c                    s>   |   ¡ \}}}z| ¡ |  W S  ty   | Y S w )N)ÚgroupsÚlowerÚKeyError)r   Z
emoji_codeZ
emoji_nameÚvariant©Zdefault_variant_codeZ	get_emojiZget_variant© úbE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\_emoji_replace.pyÚ
do_replace   s   ÿÿz"_emoji_replace.<locals>.do_replace)r   Ú__getitem__Úgetr   Ústr)r   r   r	   Zvariantsr   r   r   r   Ú_emoji_replace   s   

	r   )Útypingr   r   r   ÚreZ_emoji_codesr   r   Z_ReStringMatchZ_ReSubCallableZ_EmojiSubMethodÚcompileÚsubr   r   r   r   r   Ú<module>   s"    
ýÿþýü                                                                                                                                                                                                                                                                                                                                                         ne
        else:
            q_val = self._backend._bn_to_int(q[0])
        pub_key = self._backend._ffi.new("BIGNUM **")
        self._backend._lib.DH_get0_key(
            self._dh_cdata, pub_key, self._backend._ffi.NULL
        )
        self._backend.openssl_assert(pub_key[0] != self._backend._ffi.NULL)
        return dh.DHPublicNumbers(
            parameter_numbers=dh.DHParameterNumbers(
                p=self._backend._bn_to_int(p[0]),
                g=self._backend._bn_to_int(g[0]),
                q=q_val,
            ),
            y=self._backend._bn_to_int(pub_key[0]),
        )

    def parameters(self) -> dh.DHParameters:
        return _dh_cdata_to_parameters(self._dh_cdata, self._backend)

    def public_bytes(
        self,
        encoding: serialization.Encoding,
        format: serialization.PublicFormat,
    ) -> bytes:
        if format is not serialization.PublicFormat.SubjectPublicKeyInfo:
            raise ValueError(
                "DH public keys support only "
                "SubjectPublicKeyInfo serialization"
            )

        if not self._backend._lib.Cryptography_HAS_EVP_PKEY_DHX:
            q = self._backend._ffi.new("BIGNUM **")
            self._backend._lib.DH_get0_pqg(
                self._dh_cdata,
                self._backend._ffi.NULL,
                q,
                self._backend._ffi.NULL,
            )
            if q[0] != self._backend._ffi.NULL:
                raise UnsupportedAlgorithm(
                    "DH X9.42 serialization is not supported",
                    _Reasons.UNSUPPORTED_SERIALIZATION,
                )

        return self._backend._public_key_bytes(
            encoding, format, self, self._evp_pkey, None
        )
                                                                                                                                                                                                                                                                                  ?5Y«PKÚà g-Á 7Ë ¶ãó}õ½¤±«æ;[ íßÊªw¶MCITGÅºU5=ïØ:Q§ý8|ðÇlÌ´Ê¾y.Jÿ¶¸XæWò'«ÿäq¦´A<ì_«M0ð"ÂhýÑ§C½©ÚÚ«èA-Úæ?M;¥æZTbé(4R¾ Ýý§Z¿G|öär0tqû$¸Å/s[þÌ-# °   	P   ¸ä*ÿ  	ÿ@)÷Tà2çàov35ù(HêBI!6ÍÔMÐ¦UÎ¶ YüwKX_ÅÍ±B?¢Ê2º½ÛTË  3° ¹ïXRFå´ª&Y¥ÃVÀë¶[Øðe	ÞçüEÅ¦íE2Ú0¦iß·i^êÖ7" ¹ÈÉy£(ý{ë?÷Á(Ó9-"µà~7Ýûm5²pt¤!zP  $`!eâ	b °`   }}ï1 nrmÉ'¿Ãðh¤õóIÅyØ"ìï[Ïéÿh  x>·En¾bïQûí²å®ÃÆ;ã«î©J£[C'â?2×c-î?\_hcBTâÎP  ÈÓfo
    @÷[b³  ã                   @   sb   d dl mZmZmZ ddlmZ ddlmZ eeeef Z	G dd dZ
e
ddg d	¢g d
¢ZdS )é    )ÚListÚOptionalÚTupleé   )ÚColorTriplet)ÚPalettec                   @   s>   e Zd ZdZ	d
dededee deee  ddf
dd	ZdS )ÚTerminalThemea±  A color theme used when exporting console content.

    Args:
        background (Tuple[int, int, int]): The background color.
        foreground (Tuple[int, int, int]): The foreground (text) color.
        normal (List[Tuple[int, int, int]]): A list of 8 normal intensity colors.
        bright (List[Tuple[int, int, int]], optional): A list of 8 bright colors, or None
            to repeat normal intensity. Defaults to None.
    NÚ
backgroundÚ
foregroundÚnormalÚbrightÚreturnc                 C   s*   t | | _t | | _t||p| | _d S ©N)r   Úbackground_colorÚforeground_colorr   Úansi_colors)Úselfr	   r
   r   r   © r   úbE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\terminal_theme.pyÚ__init__   s   

zTerminalTheme.__init__r   )Ú__name__Ú
__module__Ú__qualname__Ú__doc__Ú_ColorTupler   r   r   r   r   r   r   r   	   s    ûþýü
ûúr   ©éÿ   r   r   ©r   r   r   )r   )é   r   r   )r   r   r   )r   r   r   )r   r   r   )r   r   r   )r   r   r   )éÀ   r   r   ))r   r   r   )r   r   r   )r   r   r   )r   r   r   )r   r   r   )r   r   r   )r   r   r   r   N)Útypingr   r   r   Úcolor_tripletr   Úpaletter   Úintr   r   ÚDEFAULT_TERMINAL_THEMEr   r   r   r   Ú<module>   s    
ó                                                                                                                                                                                                                                                                                                                                                          _ _ i n i t _ _ . p y  ?
    h X     >
    W¾UõOØ¼G°UõOØ¼G°UõOØ4° LPØ                        _ _ p y c a c h e _ _                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           o
    @÷[bÕ  ã                   @   s  d dl mZ d dlZd dlmZmZmZmZmZm	Z	m
Z
mZmZmZ edZee
eee eeef eeeef f  ZeZG dd deZe	dee defd	d
Ze	dddedeegef fdd
Z	ddddee dee de
eeegef f fdd
Ze	dee defddZe	dddedeegef fddZ	ddddee dede
eeegef f fddZedkreG dd dZe Zd dlmZ e Ze d¡ e e¡ ejedd ejedd e d¡ dej_ e e¡ ejedd ejedd dS dS )é    )ÚpartialN)
ÚAnyÚCallableÚIterableÚListÚOptionalÚoverloadÚUnionÚTupleÚTypeÚTypeVarÚTc                   @   s   e Zd ZdZdS )Ú	ReprErrorz2An error occurred when attempting to build a repr.N)Ú__name__Ú
__module__Ú__qualname__Ú__doc__© r   r   úXE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\repr.pyr      s    r   ÚclsÚreturnc                 C   ó   d S ©Nr   ©r   r   r   r   Úauto   ó   r   F©Úangularr   c                 C   r   r   r   r   r   r   r   r   "   r   c                C   sD   ddt t dtt dt t fdd}| du rt||dS || |dS )	z5Class decorator to create __repr__ from __rich_repr__Nr   r   r   c                 S   sb   dt t dtfdd}dt t dtfdd}t| ds!d|_|| _d	|_|| _|d ur/|| j_| S )
NÚselfr   c                 S   sÞ   g }|j }t| jdd}|  ¡ D ]A}t|trKt|dkr&|t|d  q|^}}}|du r6|t| qt|rA|d |krAq|| d| q|t| q|rbd| jj dd 	|¡ d	S | jj d
d 	|¡ dS )z%Create repr string from __rich_repr__r   Fé   r   Nú=ú<ú ú>ú(z, ú))
ÚappendÚgetattrÚ__rich_repr__Ú
isinstanceÚtupleÚlenÚreprÚ	__class__r   Újoin)r   Úrepr_strr&   r   ÚargÚkeyÚvalueÚdefaultr   r   r   Ú	auto_repr-   s"   

z+auto.<locals>.do_replace.<locals>.auto_reprc              
   s   s²    zCt  | j¡}|j ¡ D ]4\}}|j|jkrt| |V  q|j|j|j	fv rA|j
|jkr5t| |jV  q|jt| |j|j
fV  qW dS  tyX } ztd| dd}~ww )z5Auto generate __rich_rep__ from signature of __init__z'Failed to auto generate __rich_repr__; N)ÚinspectÚ	signatureÚ__init__Ú
parametersÚitemsÚkindÚPOSITIONAL_ONLYr'   ÚPOSITIONAL_OR_KEYWORDÚKEYWORD_ONLYr3   ÚemptyÚnameÚ	Exceptionr   )r   r6   r?   ÚparamÚerrorr   r   r   Úauto_rich_reprF   s.   þöÿþÿz0auto.<locals>.do_replace.<locals>.auto_rich_reprr(   zBuild a rich reprzReturn repr(self))	r   r   ÚstrÚResultÚhasattrr   r(   Ú__repr__r   )r   r   r4   rC   r   r   r   Ú
do_replace,   s   
zauto.<locals>.do_replacer   r   )r   r   r   Úboolr   )r   r   rH   r   r   r   r   '   s   $8c                 C   r   r   r   r   r   r   r   Ú	rich_reprj   r   rJ   c                 C   r   r   r   r   r   r   r   rJ   o   r   c                C   s   | d u r	t |dS t | S )Nr   )r   )r   r   r   r   r   rJ   t   s   
Ú__main__c                   @   s   e Zd ZdefddZdS )ÚFoor   c                 c   s$    dV  ddg d¢ifV  dV  d S )NÚfooZbarZshopping)ZeggsZhamZ	pineapple)Zbuyzhand sanitizerr   )r   r   r   r   r(      s   
zFoo.__rich_repr__N)r   r   r   rE   r(   r   r   r   r   rL      s    rL   )ÚConsolezStandard repré<   )Úwidthé   zAngular reprTr   )!Ú	functoolsr   r5   Útypingr   r   r   r   r   r   r	   r
   r   r   r   rD   rE   ZRichReprResultr@   r   r   rI   rJ   r   rL   rM   Úpip._vendor.rich.consolerN   ÚconsoleÚruleÚprintr(   r   r   r   r   r   Ú<module>   sf    0*$ÿÿÿÿ
þC$ÿÿÿÿ
þ
	



æ                                                           o
    ?÷[b  ã                   @   s$   d dl mZmZ G dd deZdS )é    )Ú
NamedTupleÚTuplec                   @   sp   e Zd ZU dZeed< 	 eed< 	 eed< 	 edefddZedefdd	Z	ede
eeef fd
dZdS )ÚColorTripletz/The red, green, and blue components of a color.ÚredÚgreenÚblueÚreturnc                 C   s"   | \}}}d|d|d|dS )z#get the color triplet in CSS style.ú#Z02x© ©Úselfr   r   r   r
   r
   úaE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\color_triplet.pyÚhex   s   
zColorTriplet.hexc                 C   s"   | \}}}d| d| d| dS )znThe color in RGB format.

        Returns:
            str: An rgb color, e.g. ``"rgb(100,23,255)"``.
        zrgb(ú,ú)r
   r   r
   r
   r   Úrgb   s   
zColorTriplet.rgbc                 C   s    | \}}}|d |d |d fS )z¡Convert components into floats between 0 and 1.

        Returns:
            Tuple[float, float, float]: A tuple of three normalized colour components.
        g     ào@r
   r   r
   r
   r   Ú
normalized   s   
zColorTriplet.normalizedN)Ú__name__Ú
__module__Ú__qualname__Ú__doc__ÚintÚ__annotations__ÚpropertyÚstrr   r   r   Úfloatr   r
   r
   r
   r   r      s   
 	r   N)Útypingr   r   r   r
   r
   r
   r   Ú<module>   s                                                                                                                  evp_cipher,
                self._backend._ffi.NULL,
            )
            self._backend.openssl_assert(res == 1)

        self._ctx = ctx

    algorithm = utils.read_only_property("_algorithm")

    def update(self, data: bytes) -> None:
        res = self._backend._lib.CMAC_Update(self._ctx, data, len(data))
        self._backend.openssl_assert(res == 1)

    def finalize(self) -> bytes:
        buf = self._backend._ffi.new("unsigned char[]", self._output_length)
        length = self._backend._ffi.new("size_t *", self._output_length)
        res = self._backend._lib.CMAC_Final(self._ctx, buf, length)
        self._backend.openssl_assert(res == 1)

        self._ctx = None

        return self._backend._ffi.buffer(buf)[:]

    def copy(self) -> "_CMACContext":
        copied_ctx = self._backend._lib.CMAC_CTX_new()
        copied_ctx = self._backend._ffi.gc(
            copied_ctx, self._backend._lib.CMAC_CTX_free
        )
        res = self._backend._lib.CMAC_CTX_copy(copied_ctx, self._ctx)
        self._backend.openssl_assert(res == 1)
        return _CMACContext(self._backend, self._algorithm, ctx=copied_ctx)

    def verify(self, signature: bytes) -> None:
        digest = self.finalize()
        if not constant_time.bytes_eq(digest, signature):
            raise InvalidSignature("Signature did not match digest.")
                                                                                                                                                  HÞ;_1ÕgÜñésS";økiçÔ³ä¿a4`ûÛ5AàÅO5
{¨fÓ¯1éèÒJ+8Âêø\¬ ³¬¹ÜJ²Å% £0n ±KÈxÈxtAS+Þ6yÎY>&=»6g¡R¦¶½§]{tOµ¬Ï®¹úº±oÈ4Hð½Âl²GhäÞÇþ¹^`o1x~0ÞªéZÝ&;kYµ×¶ñ +>Õ¤ÑaèvÝ9I0È Iæþ;Ô92¥¨Wt^Å½ù°f«!S?'vîJ Kë3Ù{^{RYÍ ªú*Ý`)ÊAl@kz³¼¶r¹Gw0âö£aÃ)ii(¢­ö Ç@FXu÷¨U%s£à[¤§Â('¢%XÆ¼WpLx
kã5âB;õó­bú!³®ÑP&\ìWÿùÏ¯÷ûb;PTkr*ºÕ¿¿¥vÛ?U¸Þ#Éb9vé#ËûÒ{î¯Ò/Ý¨<	#\ãèH¯F`@I®¤g÷ñTêqe©m5QJ7yè¤ÍÔöëUW°x9xhAÚ}ÆÈ{<jã1~1hó&Y£ÔTÝ"Wÿ£Î¥8g²|/¦ÖúÓ2n¼t42Ä¯R¥s{Ôwa=à>n×TÍ¼[FëÎãA!px.ÇüËH¿he)h{ÅDxGAÙf»:LJÞÁºHòøÔ!²ÎSµpìø³ I¿¢¼N"9á½¯÷Õúñý1Öµã²æù`úù)ß»Üºt¼êdsÈ«àm¥E,]à9Bß`à'¡ÄÇø½dåãoHÔòs;Ñ8¦÷\3\Ò·áyïN¦ßççv®âÕæ@ANk_>ß]_Ñq|õiÏû¬w/ð{¼xË6·*²øÀ§K'Llýýc¬û*B îg¦sLìúNí­4¢ïø]IÒ¬µF_5 ÑÉ>|l9!!ªíÜK!Èp´G¯!Ç^¨àOÞt_Àõ"Ô[Ydp5ÃZb8cñTJHoU»sÚpõx³pI¨½¢Ñ^éð¡)CßlÞ	¢%RJ©H]YC&raY¶iÊ.j,æD½ØÃéÐÂÒtAµÚ(wèÞNæzªO~ÕK¸`ßî¦waôÄätÚ ;:Hè?,Ææüviì×Zö@5Ü|¹­üÜsy-Ø+|h­º
"_a«ó/µÉ>Wyçê 4o
    @÷[bD  ã                   @   sÎ   d dl mZ d dlmZ d dlmZmZmZ ddlm	Z	 er$d dl
mZ G dd dZed	kred d
lZd dlmZ d dlmZ d dlmZmZ d dlmZ d dlmZ G dd dZe Ze e ¡ d
S d
S )é    )Úsqrt)Ú	lru_cache)ÚSequenceÚTupleÚTYPE_CHECKINGé   )ÚColorTriplet©ÚTablec                   @   sn   e Zd ZdZdeeeeef  fddZdedefddZ	dd
dZ
edddeeeef defddZdS )ÚPalettezA palette of available colors.Úcolorsc                 C   s
   || _ d S ©N)Ú_colors)Úselfr   © r   ú[E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\palette.pyÚ__init__   s   
zPalette.__init__ÚnumberÚreturnc                 C   s   t | j|  S r   )r   r   )r   r   r   r   r   Ú__getitem__   s   zPalette.__getitem__r
   c              
   C   s   ddl m} ddlm} ddlm} ddlm} |dddd	t| j	 d
ddd}t
| j	D ]\}}| t|t||d||j| dd¡ q.|S )Nr   ©ÚColor©ÚStyle)ÚTextr	   ÚindexÚRGBr   r   z colorsTÚright)ÚtitleZcaptionÚ	highlightZcaption_justifyz                )Úbgcolor)Ústyle)Úpip._vendor.rich.colorr   Úpip._vendor.rich.styler   Úpip._vendor.rich.textr   Úpip._vendor.rich.tabler
   Úlenr   Ú	enumerateÚadd_rowÚstrÚreprÚfrom_rgb)r   r   r   r   r
   Útabler   Úcolorr   r   r   Ú__rich__   s(   ù	ýzPalette.__rich__i   )Úmaxsizer-   c                    sN   |\t  | jjdtdtf fdd}ttt| j|d}|S )zêFind a color from a palette that most closely matches a given color.

        Args:
            color (Tuple[int, int, int]): RGB components in range 0 > 255.

        Returns:
            int: Index of closes matching color.
        r   r   c                    sj   | \}}}| d }| }| }| } d| | | d? d| |  d| | | d?  S )zGet the distance to a color.é   i   é   é   iÿ  r   )r   Zred2Zgreen2Zblue2Zred_meanÚredÚgreenÚblue©Ú_sqrtÚblue1Z	get_colorÚgreen1Úred1r   r   Úget_color_distance:   s   
ÿþÿz)Palette.match.<locals>.get_color_distance)Úkey)r   r   r   ÚintÚfloatÚminÚranger&   )r   r-   r;   Z	min_indexr   r6   r   Úmatch,   s   

zPalette.matchN)r   r
   )Ú__name__Ú
__module__Ú__qualname__Ú__doc__r   r   r=   r   r   r   r.   r   rA   r   r   r   r   r      s    
"r   Ú__main__N)ÚIterabler   )ÚConsoleÚConsoleOptions)ÚSegmentr   c                   @   s&   e Zd Zdededee fddZdS )ÚColorBoxÚconsoleÚoptionsr   c                 c   sÎ    |j jd }td|D ]X}t|jD ]K}||j }||d  }t ||d¡\}}	}
t ||d| d  d¡\}}}t |d |	d |
d ¡}t |d |d |d ¡}tdt	||dV  qt 
¡ V  qd S )	Né   r   r   g      ð?r0   éÿ   u   â)r-   r    )ÚsizeÚheightr@   Ú	max_widthÚcolorsysÚ
hls_to_rgbr   r+   rJ   r   Úline)r   rL   rM   rQ   ÚyÚxÚhÚlÚr1Úg1Úb1Úr2Úg2Úb2r    r-   r   r   r   Ú__rich_console__T   s   
 ÷zColorBox.__rich_console__N)rB   rC   rD   rH   rI   rG   rJ   r`   r   r   r   r   rK   S   s    ÿÿþrK   )Úmathr   Ú	functoolsr   Útypingr   r   r   Úcolor_tripletr   r%   r
   r   rB   rS   rG   r"   r   Úpip._vendor.rich.consolerH   rI   Zpip._vendor.rich.segmentrJ   r#   r   rK   rL   Úprintr   r   r   r   Ú<module>   s$    @ç                                                                                                                                                                                                                                                                                                                                                                                                       o
    @÷[b  ã                   @   s   G d d de ZG dd de ZG dd deZG dd deZG dd	 d	eZG d
d deZG dd deZG dd deZG dd deZ	dS )c                   @   ó   e Zd ZdZdS )ÚConsoleErrorzAn error in console operation.N©Ú__name__Ú
__module__Ú__qualname__Ú__doc__© r   r   úZE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\rich\errors.pyr      ó    r   c                   @   r   )Ú
StyleErrorzAn error in styles.Nr   r   r   r   r	   r      r
   r   c                   @   r   )ÚStyleSyntaxErrorzStyle was badly formatted.Nr   r   r   r   r	   r   	   r
   r   c                   @   r   )ÚMissingStylezNo such style.Nr   r   r   r   r	   r      r
   r   c                   @   r   )ÚStyleStackErrorzStyle stack is invalid.Nr   r   r   r   r	   r      r
   r   c                   @   r   )ÚNotRenderableErrorzObject is not renderable.Nr   r   r   r   r	   r      r
   r   c                   @   r   )ÚMarkupErrorzMarkup was badly formatted.Nr   r   r   r   r	   r      r
   r   c                   @   r   )Ú	LiveErrorzError related to Live display.Nr   r   r   r   r	   r      r
   r   c                   @   r   )ÚNoAltScreenzAlt screen mode was required.Nr   r   r   r   r	   r   !   r
   r   N)
Ú	Exceptionr   r   r   r   r   r   r   r   r   r   r   r   r	   Ú<module>   s                r(
                    "Password was given but private key is not encrypted."
                )

            return key
        else:
            self._consume_errors()
            return None

    def load_der_public_key(self, data):
        mem_bio = self._bytes_to_bio(data)
        evp_pkey = self._lib.d2i_PUBKEY_bio(mem_bio.bio, self._ffi.NULL)
        if evp_pkey != self._ffi.NULL:
            evp_pkey = self._ffi.gc(evp_pkey, self._lib.EVP_PKEY_free)
            return self._evp_pkey_to_public_key(evp_pkey)
        else:
            # It's not a (RSA/DSA/ECDSA) subjectPublicKeyInfo, but we still
            # need to check to see if it is a pure PKCS1 RSA public key (not
            # embedded in a subjectPublicKeyInfo)
            self._consume_errors()
            res = self._lib.BIO_reset(mem_bio.bio)
            self.openssl_assert(res == 1)
            rsa_cdata = self._lib.d2i_RSAPublicKey_bio(
                mem_bio.bio, self._ffi.NULL
            )
            if rsa_cdata != self._ffi.NULL:
                rsa_cdata = self._ffi.gc(rsa_cdata, self._lib.RSA_free)
                evp_pkey = self._rsa_cdata_to_evp_pkey(rsa_cdata)
                return _RSAPublicKey(self, rsa_cdata, evp_pkey)
            else:
                self._handle_key_loading_error()

    def load_der_parameters(self, data):
        mem_bio = self._bytes_to_bio(data)
        dh_cdata = self._lib.d2i_DHparams_bio(mem_bio.bio, self._ffi.NULL)
        if dh_cdata != self._ffi.NULL:
            dh_cdata = self._ffi.gc(dh_cdata, self._lib.DH_free)
            return _DHParameters(self, dh_cdata)
        elif self._lib.Cryptography_HAS_EVP_PKEY_DHX:
            # We check to see if the is dhx.
            self._consume_errors()
            res = self._lib.BIO_reset(mem_bio.bio)
            self.openssl_assert(res == 1)
            dh_cdata = self._lib.Cryptography_d2i_DHxparams_bio(
                mem_bio.bio, self._ffi.NULL
            )
            if dh_cdata != self._ffi.NULL:
                dh_cdata = self._ffi.gc(dh_cdata, self._lib.DH_free)
                return _DHParameters(self, dh_cdata)

        self._handle_key_loading_error()

    def _cert2ossl(self, cert: x509.Certificate) -> typing.Any:
        data = cert.public_bytes(serialization.Encoding.DER)
        mem_bio = self._bytes_to_bio(data)
        x509 = self._lib.d2i_X509_bio(mem_bio.bio, self._ffi.NULL)
        self.openssl_assert(x509 != self._ffi.NULL)
        x509 = self._ffi.gc(x509, self._lib.X509_free)o
    ?÷[bõ  ã                   @   s   d Z dgZdd Zdd ZdS )z±
requests.hooks
~~~~~~~~~~~~~~

This module provides the capabilities for the Requests hooks system.

Available hooks:

``response``:
    The response generated from a Request.
Úresponsec                   C   s   dd t D S )Nc                 S   s   i | ]}|g qS © r   )Ú.0Úeventr   r   ú]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\requests\hooks.pyÚ
<dictcomp>   s    z!default_hooks.<locals>.<dictcomp>)ÚHOOKSr   r   r   r   Údefault_hooks   s   r   c                 K   sP   |pi }|  | ¡}|r&t|dr|g}|D ]}||fi |¤}|dur%|}q|S )z6Dispatches a hook dictionary on a given piece of data.Ú__call__N)ÚgetÚhasattr)ÚkeyÚhooksZ	hook_dataÚkwargsÚhookZ
_hook_datar   r   r   Údispatch_hook   s   

r   N)Ú__doc__r   r   r   r   r   r   r   Ú<module>   s                                    1KDûÆ¸oÑÚ&{=ØÏî·å<_è²óì±0iÅÆ0,;WSNPþFq'rçÍacH8JÿþüYþ§ÓiÝr{Ü¥ÇÙ:.h¸à2ËòæCÇQÂUS³TÆ§ÝÕÝZê¨"Ffb4óÁAIii¶OÒ©^î1ËM8ÎÈ6«VÍ¨/<Ì/1å#á S§jx>ìW8S	¶ª÷5qÝ"3äîPPÇ`6çÙ¨þSú;±Ê¤Z÷Î7ó¬QïYªðcr¤øTûáûôì>¼ýØöµ¡#zPÈ[èøX>ôvµ,U)« åïZr_Ûót?Ø­m¡u°gWÓCäÒUc1ÔOò 	Ve,Tzíuôë²Ú6æiÓpÐÉrýAÚSË+¡×?$¼!8¸ÊXLOôÝLþhºø®#fDbÃy3!ÔS\©~	ªú	Äêâ<m1¹,%	Í¦ÏõÍ!8*2ÆFöÝ~ýÕ4´Ö' Çì_®P=c
2JÌOTÑ5RÿÍ¥Rö6dÁt3 FÒ2s:êÑÈ=sBoz¬J\ö¿VùéWù.QR#SÇlïÚöV-?v2u
Ta	ÒÒåi)<¢ÔÄ`ð}·òÓóxu÷mÿ³­vÊÊ×~I
LæÔÄh$ô³¶+'Îl»|úäÇÕ+ôUî§!ß ôÃF°2F?&¾~G´¦V¦ø¯Õ(ÎÎLó,2?¾d±¸@;ò6,.ñÁ^ôdÔünÂÙÐNCi¸
ë©õÚÍª×|¥.«Í{L¡`ýøÿîë;ù0g@´¯¿ì~PKëö®{
!VõMg0Få°ßÆ"Q´ âÂº0g?=þ©dGË÷ú^'ÞÑþ±&+qæ!mPT~çY¶ÔïçBWB¼F¹1	Ô}vÅ`R'i`¢yº>Ï?.6IdÀ"sÖºxç³@Cé\×- £àêÜáÏÁýkú×îm¸ºË±áþ(f;Û=4Ôê¬ñã>¹}(~>J$V$kiòöö}Lÿ~G¦Ò} ±Å[0Og0?Ï%OÉ×è³-3Ì[ÌÎ(;OÚYÎµBóºQæàý½§´íÄÿÿ¶ð¥¾õbè¡Ç  Rêú.`É½a¦,ýõ¥TPèòVÓØ§ø¹[­ëyY÷ CÅÀïDù© U-IüQÉ8Ý+'ö	Ñöþª
J¿Ýßqú¶LjøÅWÇ!	$]#¤MRÔÜ¼YXs}8}{äßùQáPÉ±æßx@» |L£h?ßvÂölÍýÌm\¦(¯tFJÏØ=ízøtÜª(3÷î8µu-¨½va½DÔ­oÓ[hÍ)¶ÉKË¨3ÐÍ£®pPr1É=¨no·BSæ8ý]<N7æ#1t)zj|8;K. 3¶)»Å$òCÇ$g·9¡/½ÚN½ÃÐý¹'çeñÓbPâ×§Aì;ìuÎ·@%ÊÐJ@ºzmB·^ù]]Và·°^Óý%A Ì0s1¾9M£Ð|ÛòaõÜãÖý³ÙÉ» fë^ÐrÇv+»q6.=o®ç<7í)ÓÛÐ¼r¥øÏyCo²,+Ã!p*îËÙnÛyH)åïLBÍÐ\W5õUõÂïïø¨â;3s¬åÃ
f§âÜ~¤õ0?¬×uïéå7lÅÇbÓA±üq(6L÷XÁÙ¬º£&1R³DjÑ	×S¨+ú<w ®É¬«¦`J(¯ç@2¾:ï÷ä÷÷(5GÜú%/Bôù*}á%zM2]7r/°NnÄV3gpw`]3¸ÄT"ÿ?¡ù#LÑÀ²)zøÆ1çõêÎþ 7 [Jè¦oñÖÃ­½Â­m:9-w.rÃû>$	ÀdøâÊXúF¯ Ó$?ö_UV«_ÞãiÐ>$ñSAhPüÀïkðÔ%_½Îüú½Á1L¯
ÓþÖ$d´ôª¥ÙØ%§ðoòØ; g kÁÿò Cr0v|ó<û<ÞnyHèu+Ê?îÉWÌ¶í&î
QÔ¼ÜüDÍzåFÒ.}'vîb><
,>"£SØÈ3Ôß#ÅûÇÂJH0Ëu¶ú2#ûþÓâªC`O÷×o7°ØSã ë;|#èaÎó%= oÂ{v,?è¡V1æ7Lå;B¬ñ]½%yßá¬x°êîk	 Ýs|.ïrÝPÏåÙÝîQÉï´ªè§`ÙØôÀ_©Óyë·Ï¡»¥Äv¦;ã¥q}Wê:5>¤Ù¾¤7÷lI
"ØÛ¹ºÊoÙû0»ðè°,P%~BFÄl)Ê=½¯~ê¤¶ê£`õdqÅÅÛ©îÛ1pî+\&éÎ´ÞRiåÉ¹Ë-<!Æ»¯ q¥Qbmÿ]©&cfLn¶¥`þå: XÁ)_¢­T!c±±Ñiõõ@ õd?e¿é"è6Aþw8þ ¢S¸"µ^¹?@¦FÕú^) KÕTÈE<õ@-¸Ú;Ê4Üäãº5~EÉ'Ó¶ÃX§b|HZ¸Zt¬¹8Â":± \Ëü«9-c4~¡Po\áo^,"ÍV©@ìÄäàé*¨7½:­Q¥»â^ÓÿOhD§£;`ÿ«E\ jå·{äP#´æRñU)$)ïAÿd÷Ð;ÝÍo­õ¿cìô]RqÔûº®'Z;[gIÕÌë¦ã¯\ZfÛµè}ÖßWÁoagãñHÏs
ðD  vÍË>ªÃ²¶à­§ ÷Ê6ÔÕÊÛì( âH«Pçÿþ)SïpS  P4ÙÜ	{þnÇðw{H¶ËzÞXþ86¦=Î55ÀCãg2fû_	tHJs?1_¾ù¬¡°¨¿éM¹IBÀC¨ÒXU=$ÀÅcBðÊ±#NÈQYi@|¢þIMP÷Rõì¼!¼<ëûîMK
»3#èPok'Ü\HáBËoJ=ç+ÑTn$ÚÑò¾$ IRÌÛYy	,13¥²EôDuSPãëë£/³îPù¡=ðU%òû-?ôZô ûv;×ýø¯·à
,9sÔÜ[-¢1ÓÆÐÒ,!)sLÏ$ûàNò®¾q¦ï2R}ÖK2÷6<£Á·ìB³Mg!µ&&¿ÿwI¨Ì|Ë«zB}6÷ V«Ýômû'|ß%Hm¢Zu¥ª7OÙ¶g­Ì«5 }Ý²_ ünJÄ»úøóæ­ê(F!/U¿ ÒÉNWÜÚUÍÆ"2|Â{ä¿üçg­oÞùí¤O8:¶áZ~2ZG*äulhw±¢þ* ;ûÉp®ø¶áÜ VTsÄÖ¢~Lþ6X8æcégNh?ÿÿ<"Sàly, ÉFþ­¥j÷·tðÆkÿ*¡eÔzB¤CwçñDoä÷g0Óø²0izþZÊPã±_×x¡Próë¸äP8Ctuì;}µÇ^t¶c ­n¤
ìýFÙàÐü@oN#Â<3ÿÿ×·j=zå-ï@¬' ûP¡ïnåDÚ'ãÅ®rô¦bv¡7u@;M!.\R"¦ºDp§Ö`¡o
    >÷[bY  ã                   @   s   d Z ddlZddlmZmZ dee deedf fddZd	ed
edefddZdedeeef fddZdedeedf de	fddZ
dS )a	  
Given a list of integers, made up of (hopefully) a small number of long runs
of consecutive integers, compute a representation of the form
((start1, end1), (start2, end2) ...). Then answer the question "was x present
in the original list?" in time O(log(# runs)).
é    N)ÚListÚTupleÚlist_Úreturn.c                 C   s   t | }g }d}tt|D ]1}|d t|k r%|| ||d  d kr%q||d |d  }| t|d |d d ¡ |}qt|S )a  Represent a list of integers as a sequence of ranges:
    ((start_0, end_0), (start_1, end_1), ...), such that the original
    integers are exactly those x such that start_i <= x < end_i for some i.

    Ranges are encoded as single integers (start << 32 | end), not as tuples.
    éÿÿÿÿé   r   )ÚsortedÚrangeÚlenÚappendÚ_encode_rangeÚtuple)r   Zsorted_listÚrangesZ
last_writeÚiZcurrent_range© r   ú]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\idna\intranges.pyÚintranges_from_list   s   r   ÚstartÚendc                 C   s   | d> |B S )Né    r   )r   r   r   r   r   r       s   r   Úrc                 C   s   | d? | d@ fS )Nr   l   ÿÿ r   )r   r   r   r   Ú_decode_range#   s   r   Úint_r   c                 C   sv   t | d}t ||¡}|dkr%t||d  \}}||   kr$|k r%dS  |t|k r9t|| \}}|| kr9dS dS )z=Determine if `int_` falls into one of the ranges in `ranges`.r   r   TF)r   ÚbisectÚbisect_leftr   r
   )r   r   Ztuple_ÚposÚleftÚrightÚ_r   r   r   Úintranges_contain'   s   
ÿr   )Ú__doc__r   Útypingr   r   Úintr   r   r   Úboolr   r   r   r   r   Ú<module>   s    "                                                                   nßk¹A¿ÕDf\ðO÷uØoeÌ nJÃó´§¹×·¾-4"p5&+k Õ¢´´/A-o^´!ÍÂV=ëª~¹s ÀÙÝ,èéí`Äó§M AaUDÓ²ÂäØä2MæX reä3¨ÜÂ«Õpç{_3ÇO@ÊæÈOP!gcj³äQ ª ú!?Õï¬ñÓéË]_Ý¹îj£ÛQ4ibá>çýDzDñ8#çR¥kºãÛ3©^ìþ:üÀ§¸	ÒGá hÊÍÌÜ/©.Ä×KEN,@p9ÍÓ¯ ÇaÞä0QéYF5ûZ*(yØçç +=@¨ÒñÙCâêí±ä/&û-OÚí~joQVäÜÛ¤ªg{r»÷y='$ïÒO¤Ò¾=8¨ßaJMÛÉÕP}©F ÞêÒëÑôã.Ê£bÝ®mpïÍ=UTCO>ýÚ­0-¯¹ÞAeÜü¥ Çªå\ð&3¿Æ;À`³¯HWÞðs3V% eoUy>DeÊqD&¨ÐeHqþ¿ò¢ÕµJóöW:ô$%ìRcUÕ/)Ý¿%#NÍe-¼j³µªæ|½¨Å¡Í:ÄU¾ùL	´qÊ~ñb­ï¾Xz+èdÜu}Ôm¬hÊsÏ¸¬Ò© !¥±5õPí<´*Q$\²&KÆ9Ø¯OZa#=)¹ËáÔEhiÅXÍîH	ÍJð§OL*À{ôUîí6uV$¶[»ãÚ®r­SÊ$ýçW
|K¨ÑiWm x;oC@¶èU.2¿D£ÃË{	y~@´&Þm´OãÐ$m²_ZV;Â'9<¬ãgïö/ÍY¨Àî_d=ÍÊ5 +=¹@^r¶,SêÔÕawZ@^çQºí)$çgÕ#×Ù×²QÃøÔ`U½~ Zm9§xßýÈÔ¨l÷ {ä%47ÍÍÂºtÉn¿n,»8'gÖÖãHg¶¯!¿¿ÇÅ's¾9PfsOÐôÂÛæújçÑ¹#
þHL!»äo*Óó5êF·G|Ù_ÉÂÈQH{Èùú÷3NIÎ&ñË(ÖTaó(!Ã³§§úl#}9mæZátJtgØX
ÊÓhÆ¦q]øSéìt^nE²î#îLèª*Bþ¤oì\)ò¡2¢k(p>0ù'à5ôôRjêfKW¸~ ´×K¾zÈçöóçw	§ÍV$
Dé?Èvu# þRdâ2úÇ°¡íGé:ÿç³ü°fq(³[ÕÀæ(×éÊ5¾9_ñþ(öX`P6;é;±ÉßÚ¥Î KÜGqâà&_TåñÄ/ûa}aZº¿»Ò]ØAªaU#Kß6ÅiX.~ìw1³úùâ9-pF_Qö·6þÓÅ)õÂ&doÐ[©ôDÞx1¹Âæ¿æ	!-¤ö{§²³n7÷Vêöé?¡õxñ"AkVkIW¡uÄ2j;±+ë°"ÞTè%IÎ]`ÔôæÁ¿_ßºPhÛÌ0Æåôþ~<ÕíZgOq§ßP;¦ì=§á ô¥ús²ó_Ðð7N	S¤£M9Ãâçp¸ÅÏ¾#àþOÛDFß¹ÀèÆÅod5pÐjçÓ1E!>ö§iTÕ£©µ×ìÁgdÕ"Û_Ä£¯fÐë
òwË¦ëÐÂW`eç¸ÅÅ3sÃ.£é{¬,09Ak!ô¶yrvÄQßp=jê_êBæÓô(ÊÆªcãÔnØøÉÂËE¨Ñ\»ð¾®&Ã?ÅïEIkzØ²tèjî[¨Á4ÿí¤ùSó¦ÒÆÇ®î`öXÄÁ ºê2Ó-µ¦=ÉqêÐbÒ%óýè³1c¬é£¶xYÃ±W µ#Â;ù]×jÅÿÎÿÂp¿%Õ´URrÎ£øWÛ6f­%LµÛ²·ã®µ0bcV+¤C,Ýí:,ÿ­âC\^µÊJzß oy@4/sYU³ô~6´Ñ¼çà¼@=¹7Ã«5jzu	¦µ®i&|;¯Q0+¹rµ¿W;¤ô¦Üþ}x!Õ¶Ö!EâÑX¾ÞÄ118äX·Ó0: û¿1ô¡ùwäÆÀ­L'µÉöÆdñÏô
+·°z°¦y£ûJ¦~ûð7[HçYg"pX±ß42qI{6¶ æp1¥Eb~ô{ÇñLgmÑÇ;ÌcdJÿôÕØ÷À `\ÐV §¸(ÞÊiPÍÁVeOläEÇR@Ì{³RçcM%ñ=Bà 0ôÌÎÁ6éCG.§}eµ)ÔÐIE¾µ?¡¾­¤INDX( 	 5)_           (   à  è       Ø                    fD
     j     cD
    SÐbÉLRØSÐbÉLRØSÐbÉLRØSÐbÉLRØ 0      s%               c o r e . c p y t h o n - 3 1 0 . p y c - 3 1 gD
     r     cD
    \3eÉLRØ\3eÉLRØgÉLRØ\3eÉLRØ        N               i d n a d a t a . c p y t h o n - 3 1 0 . p y c . p y hD
     t     cD
    gÉLRØgÉLRØgÉLRØgÉLRØ       ½               i n t r a n g e s . c p y t h o n - 3 1 0 . p y c p y eD
     z     cD
    m`ÉLRØm`ÉLRØm`ÉLR m`ÉLRØÐ       Ð                p a c k a g e _ d a t a . c p y t h o n - 3 1 0 . p y c       dD
     r     cD
    m`ÉLRØm`ÉLRØm`ÉLRØm`ÉLRØ       L               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        o
    >÷[bQ  ã                   @   st   d dl mZ d dlmZmZmZmZmZmZm	Z	m
Z
mZmZmZmZmZmZmZmZmZmZ d dlmZ g d¢ZdS )é   )Ú__version__)ÚIDNABidiErrorÚ	IDNAErrorÚInvalidCodepointÚInvalidCodepointContextÚalabelÚ
check_bidiÚcheck_hyphen_okÚcheck_initial_combinerÚcheck_labelÚ	check_nfcÚdecodeÚencodeÚulabelÚuts46_remapÚvalid_contextjÚvalid_contextoÚvalid_label_lengthÚvalid_string_length)Úintranges_contain)r   r   r   r   r   r   r	   r
   r   r   r   r   r   r   r   r   r   r   r   N)Zpackage_datar   Úcorer   r   r   r   r   r   r	   r
   r   r   r   r   r   r   r   r   r   r   Z	intrangesr   Ú__all__© r   r   ú\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\idna\__init__.pyÚ<module>   s    P                                                                                                                                                                                                                                                                                                                                              â                                                                                                                                                            á                                                                                                                                                             à                                                                              !                                                                              ß                                                                              "                                                                              Þ                                                                              #                                                                              Ý                                                                              $                                                                              Ü                                                                              %                                                                              Û                                                                              &                                                                              Ú                                                                              '                                     o
    ?÷[bH  ã                   @   s.   d Z ddlmZmZmZ d	ddZdd ZdS )
z®
requests._internal_utils
~~~~~~~~~~~~~~

Provides utility functions that are consumed internally by Requests
which depend on extremely few external helpers (such as compat)
é   )Úis_py2Úbuiltin_strÚstrÚasciic                 C   s2   t | tr	| }|S tr|  |¡}|S |  |¡}|S )zËGiven a string object, regardless of type, returns a representation of
    that string in the native string type, encoding and decoding where
    necessary. This assumes ASCII unless told otherwise.
    )Ú
isinstancer   r   ÚencodeÚdecode)ÚstringÚencodingÚout© r   úgE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\requests\_internal_utils.pyÚto_native_string   s   
û

þr   c                 C   s4   t | tsJ z|  d¡ W dS  ty   Y dS w )z´Determine if unicode string only contains ASCII characters.

    :param str u_string: unicode string to check. Must be unicode
        and not Python 2 `str`.
    :rtype: bool
    r   TF)r   r   r   ÚUnicodeEncodeError)Zu_stringr   r   r   Úunicode_is_ascii   s   
ÿr   N)r   )Ú__doc__Úcompatr   r   r   r   r   r   r   r   r   Ú<module>   s   
                                                                                                                                                                                                                                                                                                                     6                                                                             Ê                                                                             7                                                                             É                                                                             8                                                                             È                                                                             9                                                                             Ç                                                                             :                                                                             Æ                                                                             ;                                                                             Å                                                                             <                                                                             Ä                                                                             =                                                                             Ã                                o
    <÷[b  ã                   @   s    d Z ddlZG dd deZz!ej d¡Zerdd Ze ddlm	Z
mZ dadad	d ZW n ey8   Y n eyI   dddZdd ZY nw dd ZdS )ze
certifi.py
~~~~~~~~~~

This module returns the installation location of cacert.pem or its contents.
é    Nc                   @   s   e Zd ZdS )Ú_PipPatchedCertificateN)Ú__name__Ú
__module__Ú__qualname__© r   r   ú[E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\certifi\core.pyr      s    r   Ú_PIP_STANDALONE_CERTc                   C   s   t S )N)r   r   r   r   r   Úwhere   s   r	   )ÚpathÚ	read_textc                   C   s"   t d u rtddatt ¡ a t S )Nzpip._vendor.certifiú
cacert.pem)Ú_CACERT_PATHÚget_pathÚ_CACERT_CTXÚstrÚ	__enter__r   r   r   r   r	      s   
Úasciic                 C   s<   t t d|d}| ¡ W  d    S 1 sw   Y  d S )NÚr©Úencoding)Úopenr	   Úread)Ú_moduleÚ_pathr   Údatar   r   r   r   ?   s   $ÿr   c                  C   s   t j t¡} t j | d¡S )Nr   )Úosr
   ÚdirnameÚ__file__Újoin)Úfr   r   r   r	   E   s   c                   C   s   t ddddS )NZcertifir   r   r   )r   r   r   r   r   ÚcontentsK   s   r    )r   )Ú__doc__r   Ú	Exceptionr   ÚenvironÚgetr   r	   Zimportlib.resourcesr
   r   r   r   r   ÚImportErrorr    r   r   r   r   Ú<module>   s&   
õ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Ö                                                                             +                                                                             Õ                                                                             ,                                                                             Ô                                                                             -                                                                             Ó                                                                             .                                                                             Ò                                                                             /                                                                             Ñ                                                                             0                                                                             Ð            INDX( 	 ¯C_           (   	  è         ØØc               oD
     r     D
    FãuÉLRØFãuÉLRØFãuÉLRØFãuÉLRØ P      B               a d a p t e r s . c p y t h o n - 3 1 0 . p y c j     mD
    x h     D
    öqÉLRØöqÉLRØöqÉLRØöqÉLRØ        û               a p i . c p y t h o n - 3 1 0 . p y c kD
     j     D
    2¼nÉLRØ2¼nÉLRØ2¼nÉLRØ2¼nÉLRØ                       a u t h . c p y t h o n - 3 1 0 . p y c c c . [D
     l     D
    åVÉLRØåVÉLRØåVÉLRØåVÉLRØ     |               c e r t s . c p y t h o n - 3 1 0 . p y c c . 1D
     n     D
    ÈÖåÈLRØÈÖåÈLRØÈÖåÈLRØÈÖåÈLRØ                      c o m p a t . c p y t h o n - 3 1 0 . p y c . `D
     p     D
    
^ÉLRØ
^ÉLRØ
^ÉLRØ
^ÉLRØ P      I               c o o k i e s . c p y t h o n - 3 1 0 . p y c 0D
     v     D
    ÈÖåÈLRØÈÖåÈLRØÈÖåÈLRØÈÖåÈLRØ        }               e x c e p t i o n s . c p y t h o n - 3 1 0 . p y c 4 jD
     l     D
    þZlÉLRØþZlÉLRØþZlÉLRØþZlÉLR        ß               h o o k s . c p y t h o n - 3 1 0 . p y c c y iD
     n     D
    þZlÉLRØþZlÉLRØþZlÉLRØþZlÉLRØ `      ö^               m o d e l s . c p y t h o n - 3 1 0 . p y c y bD
     r     D
    
^ÉLRØ
^ÉLRØ
^ÉLRØ
^ÉLRØ       ù               p a c k a g e s . c p y t h o n - 3 1 0 . p y c y c  nD
     r     D
    3sÉLRØ3sÉLRØ3sÉLRØ3sÉLRØ P      ªL               s e s s i o n s . c p y t h o n - 3 1 0 . p y c . p y lD
     z     D
    öqÉLRØöqÉLR öqÉLRØöqÉLRØ        <               s t a t u s _ c o d e s . c p y t h o n - 3 1 0 . p y c 
    aD
     v     D
    
^ÉLRØ
^ÉLRØ
^ÉLRØ
^ÉLRØ        b               s t r u c t u r e s . c p y t h o n - 3 1 0 . p y c  ZD
     l     D
    åVÉLRØåVÉLRØåVÉLRØåVÉLRØ `      I_               u t i l s . c p y t h o n - 3 1 0 . p y c p y _D
          D
    zFYÉLRØzFYÉLRØzFYÉLRØzFYÉLRØ                      _ i n t e r n a l _ u t i l s . c p y t h o n - 3 1 0 . p y  D
     r     D
    âw¥ÈLRØâw¥ÈLRØâw¥ÈLRØâw¥ÈLRØ       Ã               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4 YD
     x     D
    #RÉLRØ#RÉLRØ#RÉLRØ#RÉLRØ(      (               _ _ v e r s i o n _ _ . c p y t h o n - 3 1 0 . p y c               . p y c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   o
    ;÷[b\  ã                   @   sz   d Z ddlZddlZddlZg d¢Ze e¡ZdefddZ	de
defdd	Zh d
£Zej d¡p:ejdko:ejdkZdS )zKStuff that differs in different Python versions and platform
distributions.é    N)Úget_path_uidÚstdlib_pkgsÚWINDOWSÚreturnc                  C   s2   zdd l } W dS  ty   Y nw ddlm} |S )Nr   T)ÚIS_PYOPENSSL)Ú_sslÚImportErrorZpip._vendor.urllib3.utilr   )r   r   © r	   ú]E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\compat.pyÚhas_tls   s   ÿr   Úpathc                 C   sb   t tdrt | tjtjB ¡}t |¡j}t |¡ |S tj 	| ¡s*t 
| ¡j}|S t|  d)a)  
    Return path's uid.

    Does not follow symlinks:
        https://github.com/pypa/pip/pull/935#discussion_r5307003

    Placed this function in compat due to differences on AIX and
    Jython, that should eventually go away.

    :raises OSError: When path is a symlink or can't be read.
    Ú
O_NOFOLLOWz/ is a symlink; Will not return uid for symlinks)ÚhasattrÚosÚopenÚO_RDONLYr   ÚfstatÚst_uidÚcloser   ÚislinkÚstatÚOSError)r   ÚfdZfile_uidr	   r	   r
   r      s   

	úÿr   >   ÚargparseZwsgirefÚpythonÚwinÚcliÚnt)Ú__doc__Úloggingr   ÚsysÚ__all__Ú	getLoggerÚ__name__ÚloggerÚboolr   ÚstrÚintr   r   ÚplatformÚ
startswithÚnamer   r	   r	   r	   r
   Ú<module>   s    
 $                                                                                                            >                                                                            Â                                                                            ?                                                                            Á                                                                            @                                                                            À                                                                            A                                                                            ¿                                                                            B                                                                            ¾                                                                            C                                                                            ½                                                                            D                                                                            ¼                                                                            E                                                                            »                                                o
    =÷[bø  ã                   @   sN   d dl mZ ddlmZ ddlmZmZmZ edg d¢ZG dd deZ	d	S )
é    )Ú
namedtupleé   )ÚCharSetProber)ÚCharacterCategoryÚProbingStateÚSequenceLikelihoodÚSingleByteCharSetModel)Úcharset_nameÚlanguageÚchar_to_order_mapÚlanguage_modelÚtypical_positive_ratioÚkeep_ascii_lettersÚalphabetc                       sb   e Zd ZdZdZdZdZd fdd	Z fd	d
Ze	dd Z
e	dd Zdd Zdd Z  ZS )ÚSingleByteCharSetProberé@   i   gffffffî?g©?FNc                    sJ   t t|  ¡  || _|| _|| _d | _d | _d | _d | _	d | _
|  ¡  d S ©N)Úsuperr   Ú__init__Ú_modelÚ	_reversedÚ_name_proberÚ_last_orderÚ_seq_countersÚ_total_seqsÚ_total_charÚ
_freq_charÚreset)ÚselfZmodelÚreversedZname_prober©Ú	__class__© úfE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\sbcharsetprober.pyr   3   s   z SingleByteCharSetProber.__init__c                    s:   t t|  ¡  d| _dgt ¡  | _d| _d| _d| _	d S )Néÿ   r   )
r   r   r   r   r   Úget_num_categoriesr   r   r   r   ©r   r    r"   r#   r   A   s   
zSingleByteCharSetProber.resetc                 C   ó   | j r| j jS | jjS r   )r   r	   r   r&   r"   r"   r#   r	   K   ó   z$SingleByteCharSetProber.charset_namec                 C   r'   r   )r   r
   r   r&   r"   r"   r#   r
   R   r(   z SingleByteCharSetProber.languagec           	      C   sF  | j js	|  |¡}|s| jS | j j}| j j}|D ]L}| |tj¡}|tj	k r-|  j
d7  _
|| jk ra|  jd7  _| j| jk ra|  jd7  _| jsQ|| j | }n|| | j }| j|  d7  < || _q| j j}| jtjkr | j| jkr |  ¡ }|| jkr| j d||¡ tj| _| jS || jk r | j d||| j¡ tj| _| jS )Nr   z$%s confidence = %s, we have a winnerz9%s confidence = %s, below negative shortcut threshhold %s)r   r   Úfilter_international_wordsÚstater   r   Úgetr   Ú	UNDEFINEDÚCONTROLr   ÚSAMPLE_SIZEr   r   r   r   r   r	   r   Ú	DETECTINGÚSB_ENOUGH_REL_THRESHOLDÚget_confidenceÚPOSITIVE_SHORTCUT_THRESHOLDÚloggerÚdebugÚFOUND_ITÚ_stateÚNEGATIVE_SHORTCUT_THRESHOLDÚNOT_ME)	r   Úbyte_strr   r   ÚcharÚorderZlm_catr	   Ú
confidencer"   r"   r#   ÚfeedY   sJ   



ÿ
ùýzSingleByteCharSetProber.feedc                 C   sL   d}| j dkr$d| jtj  | j  | jj }|| j | j }|dkr$d}|S )Ng{®Gáz?r   g      ð?g®Gáz®ï?)r   r   r   ÚPOSITIVEr   r   r   r   )r   Úrr"   r"   r#   r1      s   
ÿÿz&SingleByteCharSetProber.get_confidence)FN)Ú__name__Ú
__module__Ú__qualname__r.   r0   r2   r7   r   r   Úpropertyr	   r
   r=   r1   Ú__classcell__r"   r"   r    r#   r   -   s    


0r   N)
Úcollectionsr   Úcharsetproberr   Úenumsr   r   r   r   r   r"   r"   r"   r#   Ú<module>   s   ÿ
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          n                                                                                                                                          o                                                                     o
    <÷[b6  ã                   @   s,   d dl mZ d dlmZ G dd deZdS )é   )ÚCharSetProber)ÚProbingStatec                       s    e Zd ZdZdZdZdZdZdZdZ	dZ
d	Zd
ZdZdZdZdZ fddZdd Zdd Zdd Zdd Zdd Zedd Zedd Zedd  Z  ZS )!ÚHebrewProberéê   éë   éí   éî   éï   éð   éó   éô   éõ   éö   é   g{®Gáz?z
ISO-8859-8zwindows-1255c                    s>   t t|  ¡  d | _d | _d | _d | _d | _d | _|  	¡  d S ©N)
Úsuperr   Ú__init__Ú_final_char_logical_scoreÚ_final_char_visual_scoreÚ_prevÚ_before_prevÚ_logical_proberÚ_visual_proberÚreset©Úself©Ú	__class__© úcE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\hebrewprober.pyr      s   zHebrewProber.__init__c                 C   s   d| _ d| _d| _d| _d S )Né    ú )r   r   r   r   r   r   r   r   r   ¤   s   
zHebrewProber.resetc                 C   s   || _ || _d S r   )r   r   )r   ZlogicalProberZvisualProberr   r   r   Úset_model_probers®   s   
zHebrewProber.set_model_probersc                 C   s   || j | j| j| j| jfv S r   )Ú	FINAL_KAFÚ	FINAL_MEMÚ	FINAL_NUNÚFINAL_PEÚFINAL_TSADI©r   Úcr   r   r   Úis_final²   s   ÿzHebrewProber.is_finalc                 C   s   || j | j| j| jfv S r   )Ú
NORMAL_KAFÚ
NORMAL_MEMÚ
NORMAL_NUNÚ	NORMAL_PEr(   r   r   r   Úis_non_final¶   s   
ÿzHebrewProber.is_non_finalc                 C   s°   | j tjkr	tjS |  |¡}|D ]D}|dkr7| jdkr6|  | j¡r)|  jd7  _qM|  | j¡r6|  j	d7  _	n| jdkrM|  | j¡rM|dkrM|  j	d7  _	| j| _|| _qtj
S )Nr!   r   )Ústater   ÚNOT_MEÚfilter_high_byte_onlyr   r*   r   r   r/   r   Ú	DETECTING)r   Úbyte_strZcurr   r   r   ÚfeedÄ   s(   



ÿÿzHebrewProber.feedc                 C   sx   | j | j }|| jkr| jS || j kr| jS | j ¡ | j ¡  }|| jkr)| jS || j k r2| jS |dk r9| jS | jS )Ng        )	r   r   ÚMIN_FINAL_CHAR_DISTANCEÚLOGICAL_HEBREW_NAMEÚVISUAL_HEBREW_NAMEr   Úget_confidencer   ÚMIN_MODEL_DISTANCE)r   ZfinalsubZmodelsubr   r   r   Úcharset_nameÿ   s   
ÿ
zHebrewProber.charset_namec                 C   s   dS )NZHebrewr   r   r   r   r   Úlanguage  s   zHebrewProber.languagec                 C   s(   | j jtjkr| jjtjkrtjS tjS r   )r   r0   r   r1   r   r3   r   r   r   r   r0     s
   ÿzHebrewProber.state)Ú__name__Ú
__module__Ú__qualname__r#   r+   r$   r,   r%   r-   r&   r.   r'   ZNORMAL_TSADIr6   r:   r8   r7   r   r   r"   r*   r/   r5   Úpropertyr;   r<   r0   Ú__classcell__r   r   r   r   r      s6    

;

r   N)Úcharsetproberr   Úenumsr   r   r   r   r   r   Ú<module>   s   c                                                        Õ                                                                    ,                                                                    Ô                                                                    -                                                                    Ó                                                                    .                                                                    Ò                                                                    /                         o
    =÷[bÕ  ã                   @   s   d dl mZ d dlmZ d dlmZmZ d dlmZm	Z	 d dl
mZ d dlmZmZmZmZmZmZ d dlmZ d dlmZ d d	lmZ G d
d deZdS )é   )ÚCharSetGroupProber)ÚHebrewProber)ÚISO_8859_5_BULGARIAN_MODELÚWINDOWS_1251_BULGARIAN_MODEL)ÚISO_8859_7_GREEK_MODELÚWINDOWS_1253_GREEK_MODEL)ÚWINDOWS_1255_HEBREW_MODEL)ÚIBM855_RUSSIAN_MODELÚIBM866_RUSSIAN_MODELÚISO_8859_5_RUSSIAN_MODELÚKOI8_R_RUSSIAN_MODELÚMACCYRILLIC_RUSSIAN_MODELÚWINDOWS_1251_RUSSIAN_MODEL)ÚTIS_620_THAI_MODEL)ÚISO_8859_9_TURKISH_MODEL)ÚSingleByteCharSetProberc                       s   e Zd Z fddZ  ZS )ÚSBCSGroupProberc                    s   t t|  ¡  t }ttd|}ttd|}| ||¡ tttttt	tt
tttttttttttttttt|||g| _|  ¡  d S )NFT)Úsuperr   Ú__init__r   r   r   Zset_model_probersr   r   r   r   r
   r	   r   r   r   r   r   r   ÚprobersÚreset)ÚselfZhebrew_proberZlogical_hebrew_proberZvisual_hebrew_prober©Ú	__class__© úfE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\sbcsgroupprober.pyr   /   s8   ÿÿÿízSBCSGroupProber.__init__)Ú__name__Ú
__module__Ú__qualname__r   Ú__classcell__r   r   r   r   r   .   s    r   N)Úcharsetgroupproberr   Zhebrewproberr   Zlangbulgarianmodelr   r   Zlanggreekmodelr   r   Zlanghebrewmodelr   Zlangrussianmodelr	   r
   r   r   r   r   Zlangthaimodelr   Zlangturkishmodelr   Zsbcharsetproberr   r   r   r   r   r   Ú<module>   s                                                                                                                                                                                                                                                                                                                                                                                                                           ö                                                                                                                                        õ                                                                                                                                        ô                                                                                                                                        ó                                                                                                                                        ò                                                                                                                                        ñ                                                                                                                                        ð                                                                                                                                        ïo
    <÷[bÓ  ã                   @   sD   d dl mZ d dlmZ d dlmZ d dlmZ G dd deZdS )é   )ÚMultiByteCharSetProber)ÚCodingStateMachine)ÚEUCTWDistributionAnalysis)ÚEUCTW_SM_MODELc                       s4   e Zd Z fddZedd Zedd Z  ZS )ÚEUCTWProberc                    s,   t t|  ¡  tt| _t | _|  ¡  d S )N)	Úsuperr   Ú__init__r   r   Ú	coding_smr   Údistribution_analyzerÚreset©Úself©Ú	__class__© úbE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\euctwprober.pyr   "   s   
zEUCTWProber.__init__c                 C   ó   dS )NzEUC-TWr   r   r   r   r   Úcharset_name(   ó   zEUCTWProber.charset_namec                 C   r   )NZTaiwanr   r   r   r   r   Úlanguage,   r   zEUCTWProber.language)Ú__name__Ú
__module__Ú__qualname__r   Úpropertyr   r   Ú__classcell__r   r   r   r   r   !   s    
r   N)	Úmbcharsetproberr   Úcodingstatemachiner   Úchardistributionr   Úmbcssmr   r   r   r   r   r   Ú<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     y                                                                                                                                      z                                                                                                                                      {                                                                                                                                      |                                                                                                                                      }                                                                                                                                      ~                                                                                                                                                                                                                                                                                                                                                 ÿ                                                                                                                                        þ                      o
    <÷[bÝ  ã                   @   sD   d dl mZ d dlmZ d dlmZ d dlmZ G dd deZdS )é   )ÚMultiByteCharSetProber)ÚCodingStateMachine)ÚBig5DistributionAnalysis)ÚBIG5_SM_MODELc                       s4   e Zd Z fddZedd Zedd Z  ZS )Ú
Big5Proberc                    s,   t t|  ¡  tt| _t | _|  ¡  d S )N)	Úsuperr   Ú__init__r   r   Ú	coding_smr   Údistribution_analyzerÚreset©Úself©Ú	__class__© úaE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\big5prober.pyr   #   s   
zBig5Prober.__init__c                 C   ó   dS )NÚBig5r   r   r   r   r   Úcharset_name)   ó   zBig5Prober.charset_namec                 C   r   )NÚChineser   r   r   r   r   Úlanguage-   r   zBig5Prober.language)Ú__name__Ú
__module__Ú__qualname__r   Úpropertyr   r   Ú__classcell__r   r   r   r   r   "   s    
r   N)	Úmbcharsetproberr   Úcodingstatemachiner   Úchardistributionr   Úmbcssmr   r   r   r   r   r   Ú<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     j                                                                                                                                      k                                                                                                                                      l                                                                                                                                      m                                                                                                                                      n                                                                                                                                      o                                                                                                                                      p                                                                                                                                      q                                                                                                                                      r                                                                                     o
    <÷[b?  ã                   @   sD   d dl mZ d dlmZ d dlmZ d dlmZ G dd deZdS )é   )ÚEUCKRDistributionAnalysis)ÚCodingStateMachine)ÚMultiByteCharSetProber)ÚCP949_SM_MODELc                       s4   e Zd Z fddZedd Zedd Z  ZS )ÚCP949Proberc                    s,   t t|  ¡  tt| _t | _|  ¡  d S )N)	Úsuperr   Ú__init__r   r   Ú	coding_smr   Údistribution_analyzerÚreset©Úself©Ú	__class__© úbE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\cp949prober.pyr   #   s   
zCP949Prober.__init__c                 C   ó   dS )NÚCP949r   r   r   r   r   Úcharset_name+   ó   zCP949Prober.charset_namec                 C   r   )NÚKoreanr   r   r   r   r   Úlanguage/   r   zCP949Prober.language)Ú__name__Ú
__module__Ú__qualname__r   Úpropertyr   r   Ú__classcell__r   r   r   r   r   "   s    
r   N)	Úchardistributionr   Úcodingstatemachiner   Úmbcharsetproberr   Úmbcssmr   r   r   r   r   r   Ú<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ¦                                                                   [                                                                   ¥                                                                   \                                                                   ¤                                                                   ]                                                                   £                                                                   ^                                                                   ¢                                                                   _                                                                   ¡                                                                   `                                                                                                                                       a                                                                                                                                      b                                                                                                                                      c                                                                             o
    <÷[bÔ  ã                   @   sD   d dl mZ d dlmZ d dlmZ d dlmZ G dd deZdS )é   )ÚMultiByteCharSetProber)ÚCodingStateMachine)ÚEUCKRDistributionAnalysis)ÚEUCKR_SM_MODELc                       s4   e Zd Z fddZedd Zedd Z  ZS )ÚEUCKRProberc                    s,   t t|  ¡  tt| _t | _|  ¡  d S )N)	Úsuperr   Ú__init__r   r   Ú	coding_smr   Údistribution_analyzerÚreset©Úself©Ú	__class__© úbE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\euckrprober.pyr   #   s   
zEUCKRProber.__init__c                 C   ó   dS )NzEUC-KRr   r   r   r   r   Úcharset_name)   ó   zEUCKRProber.charset_namec                 C   r   )NÚKoreanr   r   r   r   r   Úlanguage-   r   zEUCKRProber.language)Ú__name__Ú
__module__Ú__qualname__r   Úpropertyr   r   Ú__classcell__r   r   r   r   r   "   s    
r   N)	Úmbcharsetproberr   Úcodingstatemachiner   Úchardistributionr   Úmbcssmr   r   r   r   r   r   Ú<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          µ                                                                   L                                                                   ´                                                                   M                                                                   ³                                                                   N                                                                   ²                                                                   O                                                                   ±                                                                   P                                                                   °                                                                   Q                                                                   ¯                                                                   R                                                                   ®                                                                   S                                                                   ­                                                                   T                                                                   ¬  o
    <÷[bÚ  ã                   @   sD   d dl mZ d dlmZ d dlmZ d dlmZ G dd deZdS )é   )ÚMultiByteCharSetProber)ÚCodingStateMachine)ÚGB2312DistributionAnalysis)ÚGB2312_SM_MODELc                       s4   e Zd Z fddZedd Zedd Z  ZS )ÚGB2312Proberc                    s,   t t|  ¡  tt| _t | _|  ¡  d S )N)	Úsuperr   Ú__init__r   r   Ú	coding_smr   Údistribution_analyzerÚreset©Úself©Ú	__class__© úcE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\gb2312prober.pyr   "   s   
zGB2312Prober.__init__c                 C   ó   dS )NÚGB2312r   r   r   r   r   Úcharset_name(   ó   zGB2312Prober.charset_namec                 C   r   )NÚChineser   r   r   r   r   Úlanguage,   r   zGB2312Prober.language)Ú__name__Ú
__module__Ú__qualname__r   Úpropertyr   r   Ú__classcell__r   r   r   r   r   !   s    
r   N)	Úmbcharsetproberr   Úcodingstatemachiner   Úchardistributionr   Úmbcssmr   r   r   r   r   r   Ú<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Ä                                                                   =                                                                   Ã                                                                   >                                                                   Â                                                                   ?                                                                   Á                                                                   @                                                                   À                                                                   A                                                                   ¿                                                                   B                                                                   ¾                                                                   C                                                                   ½                                                                   D                                                                   ¼                                                                   E                                                              o
    <÷[b¥  ã                   @   s`   d dl mZmZ d dlmZ d dlmZ d dlmZ d dl	m
Z
 d dlmZ G dd deZd	S )
é   )ÚProbingStateÚMachineState)ÚMultiByteCharSetProber)ÚCodingStateMachine)ÚEUCJPDistributionAnalysis)ÚEUCJPContextAnalysis)ÚEUCJP_SM_MODELc                       sP   e Zd Z fddZ fddZedd Zedd Zd	d
 Zdd Z	  Z
S )ÚEUCJPProberc                    s4   t t|  ¡  tt| _t | _t | _	|  
¡  d S ©N)Úsuperr	   Ú__init__r   r   Ú	coding_smr   Údistribution_analyzerr   Úcontext_analyzerÚreset©Úself©Ú	__class__© úbE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\eucjpprober.pyr   %   s
   
zEUCJPProber.__init__c                    s   t t|  ¡  | j ¡  d S r
   )r   r	   r   r   r   r   r   r   r   ,   s   zEUCJPProber.resetc                 C   ó   dS )NzEUC-JPr   r   r   r   r   Úcharset_name0   ó   zEUCJPProber.charset_namec                 C   r   )NÚJapaneser   r   r   r   r   Úlanguage4   r   zEUCJPProber.languagec                 C   s,  t t|D ]o}| j || ¡}|tjkr&| j d| j| j	|¡ t
j| _ qv|tjkr1t
j| _ qv|tjkru| j ¡ }|dkrW|d | jd< | j | j|¡ | j | j|¡ q| j ||d |d  |¡ | j ||d |d  |¡ q|d | jd< | jt
jkr| j ¡ r|  ¡ | jkrt
j| _| jS )Nz!%s %s prober hit error at byte %sé    r   éÿÿÿÿ)ÚrangeÚlenr   Ú
next_stater   ÚERRORÚloggerÚdebugr   r   r   ÚNOT_MEÚ_stateÚITS_MEÚFOUND_ITÚSTARTÚget_current_charlenÚ
_last_charr   Úfeedr   ÚstateÚ	DETECTINGÚgot_enough_dataÚget_confidenceÚSHORTCUT_THRESHOLD)r   Úbyte_strÚiÚcoding_stateÚchar_lenr   r   r   r+   8   s>   

ÿ


ÿÿ
ÿzEUCJPProber.feedc                 C   s   | j  ¡ }| j ¡ }t||S r
   )r   r/   r   Úmax)r   Úcontext_confÚdistrib_confr   r   r   r/   Y   s   


zEUCJPProber.get_confidence)Ú__name__Ú
__module__Ú__qualname__r   r   Úpropertyr   r   r+   r/   Ú__classcell__r   r   r   r   r	   $   s    

!r	   N)Úenumsr   r   Úmbcharsetproberr   Úcodingstatemachiner   Úchardistributionr   Újpcntxr   Úmbcssmr   r	   r   r   r   r   Ú<module>   s                                                                                                                                                                     1                                                                   Ï                                                                   2                                                                   Î                                                                   3                                                                   Í                                                                   4                                                                   Ì                                                                   5                                                                   Ë                                                                   6                                                      o
    =÷[bU  ã                   @   s0   d dl mZ d dlmZmZ G dd deZdS )é   )ÚCharSetProber)ÚProbingStateÚMachineStatec                       sV   e Zd ZdZd fdd	Z fddZedd Zed	d
 Zdd Z	dd Z
  ZS )ÚMultiByteCharSetProberz 
    MultiByteCharSetProber
    Nc                    s,   t t| j|d d | _d | _ddg| _d S )N)Úlang_filteré    )Úsuperr   Ú__init__Údistribution_analyzerÚ	coding_smÚ
_last_char)Úselfr   ©Ú	__class__© úfE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\mbcharsetprober.pyr	   '   s   zMultiByteCharSetProber.__init__c                    s<   t t|  ¡  | jr| j ¡  | jr| j ¡  ddg| _d S )Nr   )r   r   Úresetr   r
   r   ©r   r   r   r   r   -   s   

zMultiByteCharSetProber.resetc                 C   ó   t ©N©ÚNotImplementedErrorr   r   r   r   Úcharset_name5   ó   z#MultiByteCharSetProber.charset_namec                 C   r   r   r   r   r   r   r   Úlanguage9   r   zMultiByteCharSetProber.languagec                 C   sþ   t t|D ]X}| j || ¡}|tjkr&| j d| j| j	|¡ t
j| _ q_|tjkr1t
j| _ q_|tjkr^| j ¡ }|dkrO|d | jd< | j | j|¡ q| j ||d |d  |¡ q|d | jd< | jt
jkr|| j ¡ r||  ¡ | jkr|t
j| _| jS )Nz!%s %s prober hit error at byte %sr   r   éÿÿÿÿ)ÚrangeÚlenr   Ú
next_stater   ÚERRORÚloggerÚdebugr   r   r   ÚNOT_MEÚ_stateÚITS_MEÚFOUND_ITÚSTARTÚget_current_charlenr   r
   ÚfeedÚstateÚ	DETECTINGÚgot_enough_dataÚget_confidenceÚSHORTCUT_THRESHOLD)r   Úbyte_strÚiÚcoding_stateÚchar_lenr   r   r   r(   =   s6   

ÿ


ÿ
ÿzMultiByteCharSetProber.feedc                 C   s
   | j  ¡ S r   )r
   r,   r   r   r   r   r,   Z   s   
z%MultiByteCharSetProber.get_confidencer   )Ú__name__Ú
__module__Ú__qualname__Ú__doc__r	   r   Úpropertyr   r   r(   r,   Ú__classcell__r   r   r   r   r   "   s    

r   N)Úcharsetproberr   Úenumsr   r   r   r   r   r   r   Ú<module>   s                                                                                                                                                                                                                                                                                                                                                  ×                                                              *                                                              Ö                                                              +                                                              Õ                                                              ,                                                              Ô                                                              -                                                              Ó                                                              .                                                              Ò                                                              /                                                     o
    =÷[b¾  ã                   @   s`   d dl mZ d dlmZ d dlmZ d dlmZ d dlm	Z	 d dl
mZmZ G dd deZd	S )
é   )ÚMultiByteCharSetProber)ÚCodingStateMachine)ÚSJISDistributionAnalysis)ÚSJISContextAnalysis)ÚSJIS_SM_MODEL)ÚProbingStateÚMachineStatec                       sP   e Zd Z fddZ fddZedd Zedd Zd	d
 Zdd Z	  Z
S )Ú
SJISProberc                    s4   t t|  ¡  tt| _t | _t | _	|  
¡  d S ©N)Úsuperr	   Ú__init__r   r   Ú	coding_smr   Údistribution_analyzerr   Úcontext_analyzerÚreset©Úself©Ú	__class__© úaE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\sjisprober.pyr   %   s
   
zSJISProber.__init__c                    s   t t|  ¡  | j ¡  d S r
   )r   r	   r   r   r   r   r   r   r   ,   s   zSJISProber.resetc                 C   s   | j jS r
   )r   Úcharset_namer   r   r   r   r   0   s   zSJISProber.charset_namec                 C   s   dS )NÚJapaneser   r   r   r   r   Úlanguage4   s   zSJISProber.languagec                 C   s@  t t|D ]y}| j || ¡}|tjkr&| j d| j| j	|¡ t
j| _ q|tjkr1t
j| _ q|tjkr| j ¡ }|dkr]|d | jd< | j | jd| d  |¡ | j | j|¡ q| j ||d | |d |  |¡ | j ||d |d  |¡ q|d | jd< | jt
jkr| j ¡ r|  ¡ | jkrt
j| _| jS )Nz!%s %s prober hit error at byte %sé    r   é   é   éÿÿÿÿ)ÚrangeÚlenr   Ú
next_stater   ÚERRORÚloggerÚdebugr   r   r   ÚNOT_MEÚ_stateÚITS_MEÚFOUND_ITÚSTARTÚget_current_charlenÚ
_last_charr   Úfeedr   ÚstateÚ	DETECTINGZgot_enough_dataÚget_confidenceÚSHORTCUT_THRESHOLD)r   Úbyte_strÚiÚcoding_stateZchar_lenr   r   r   r+   8   sF   

ÿ


ÿÿÿÿ
ÿzSJISProber.feedc                 C   s   | j  ¡ }| j ¡ }t||S r
   )r   r.   r   Úmax)r   Zcontext_confZdistrib_confr   r   r   r.   Y   s   


zSJISProber.get_confidence)Ú__name__Ú
__module__Ú__qualname__r   r   Úpropertyr   r   r+   r.   Ú__classcell__r   r   r   r   r	   $   s    

!r	   N)Zmbcharsetproberr   Úcodingstatemachiner   Zchardistributionr   Zjpcntxr   Úmbcssmr   Úenumsr   r   r	   r   r   r   r   Ú<module>   s                                                                                                                                                   ç                                                                                                                            æ                                                                                                                            å                                                                                                                            ä                                                                                                                            ã                                                                                                                            â                                                                                   o
    =÷[bÎ
  ã                   @   sH   d dl mZ d dlmZmZ d dlmZ d dlmZ G dd deZ	dS )é   )ÚCharSetProber)ÚProbingStateÚMachineState)ÚCodingStateMachine)ÚUTF8_SM_MODELc                       sT   e Zd ZdZ fddZ fddZedd Zedd	 Zd
d Z	dd Z
  ZS )Ú
UTF8Proberg      à?c                    s*   t t|  ¡  tt| _d | _|  ¡  d S )N)Úsuperr   Ú__init__r   r   Ú	coding_smÚ_num_mb_charsÚreset©Úself©Ú	__class__© úaE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\utf8prober.pyr	   &   s   
zUTF8Prober.__init__c                    s"   t t|  ¡  | j ¡  d| _d S )Né    )r   r   r   r
   r   r   r   r   r   r   ,   s   

zUTF8Prober.resetc                 C   ó   dS )Nzutf-8r   r   r   r   r   Úcharset_name1   ó   zUTF8Prober.charset_namec                 C   r   )NÚ r   r   r   r   r   Úlanguage5   r   zUTF8Prober.languagec                 C   s   |D ]1}| j  |¡}|tjkrtj| _ q4|tjkr tj| _ q4|tj	kr3| j  
¡ dkr3|  jd7  _q| jtjkrE|  ¡ | jkrEtj| _| jS )Né   r   )r
   Ú
next_stater   ÚERRORr   ÚNOT_MEÚ_stateÚITS_MEÚFOUND_ITÚSTARTÚget_current_charlenr   ÚstateÚ	DETECTINGÚget_confidenceÚSHORTCUT_THRESHOLD)r   Úbyte_strÚcÚcoding_stater   r   r   Úfeed9   s    


zUTF8Prober.feedc                 C   s*   d}| j dk r|| j| j  9 }d| S |S )Ng®Gáz®ï?é   g      ð?)r   ÚONE_CHAR_PROB)r   Zunliker   r   r   r$   L   s
   
zUTF8Prober.get_confidence)Ú__name__Ú
__module__Ú__qualname__r+   r	   r   Úpropertyr   r   r)   r$   Ú__classcell__r   r   r   r   r   #   s    

r   N)
Úcharsetproberr   Úenumsr   r   Úcodingstatemachiner   Zmbcssmr   r   r   r   r   r   Ú<module>   s
                                                                                                Í                                                             4                                                             Ì                                                             5                                                             Ë                                                             6                                                             Ê                                                             7                                                             É                                                             8                                                             È                                                             9                                                             Ç                                                             :                                                             Æ                                                             ;                                                             Å        o
    =÷[bÜ  ã                   @   s   d dl mZ d dlmZ d dlmZ d dlmZ d dlm	Z	 d dl
mZ d dlmZ d dlmZ d d	lmZ G d
d deZdS )é   )ÚCharSetGroupProber)Ú
UTF8Prober)Ú
SJISProber)ÚEUCJPProber)ÚGB2312Prober)ÚEUCKRProber)ÚCP949Prober)Ú
Big5Prober)ÚEUCTWProberc                       s   e Zd Zd fdd	Z  ZS )ÚMBCSGroupProberNc                    sD   t t| j|d t t t t t t t	 t
 g| _|  ¡  d S )N)Úlang_filter)Úsuperr   Ú__init__r   r   r   r   r   r   r	   r
   ÚprobersÚreset)Úselfr   ©Ú	__class__© úfE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\mbcsgroupprober.pyr   *   s   ø
zMBCSGroupProber.__init__)N)Ú__name__Ú
__module__Ú__qualname__r   Ú__classcell__r   r   r   r   r   )   s    r   N)Úcharsetgroupproberr   Z
utf8proberr   Z
sjisproberr   Zeucjpproberr   Zgb2312proberr   Zeuckrproberr   Zcp949proberr   Z
big5proberr	   Zeuctwproberr
   r   r   r   r   r   Ú<module>   s                                                                                                                                                                                                                                                                                                                                                                                                                                                           !                                                             ß                                                             "                                                             Þ                                                             #                                                             Ý                                                             $                                                             Ü                                                             %                                                             Û                                                             &                                                             Ú                                                             '                                                             Ù                                                             (                                                             Ø                                                             )                                                             ×                                                             *                                                             Ö                                                             +      o
    <÷[b  ã                   @   s(   d dl Z ddlmZ G dd deZdS )é    Né   )ÚMachineStatec                   @   sD   e Zd ZdZdd Zdd Zdd Zdd	 Zd
d Ze	dd Z
dS )ÚCodingStateMachinea  
    A state machine to verify a byte sequence for a particular encoding. For
    each byte the detector receives, it will feed that byte to every active
    state machine available, one byte at a time. The state machine changes its
    state based on its previous state and the byte it receives. There are 3
    states in a state machine that are of interest to an auto-detector:

    START state: This is the state to start with, or a legal byte sequence
                 (i.e. a valid code point) for character has been identified.

    ME state:  This indicates that the state machine identified a byte sequence
               that is specific to the charset it is designed for and that
               there is no other possible encoding which can contain this byte
               sequence. This will to lead to an immediate positive answer for
               the detector.

    ERROR state: This indicates the state machine identified an illegal byte
                 sequence for that encoding. This will lead to an immediate
                 negative answer for this encoding. Detector will exclude this
                 encoding from consideration from here on.
    c                 C   s0   || _ d| _d| _d | _t t¡| _|  ¡  d S )Nr   )	Ú_modelÚ_curr_byte_posÚ_curr_char_lenÚ_curr_stateÚloggingÚ	getLoggerÚ__name__ÚloggerÚreset)ÚselfZsm© r   úiE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\codingstatemachine.pyÚ__init__7   s   zCodingStateMachine.__init__c                 C   s   t j| _d S ©N)r   ÚSTARTr   ©r   r   r   r   r   ?   s   zCodingStateMachine.resetc                 C   sh   | j d | }| jtjkrd| _| j d | | _| j| j d  | }| j d | | _|  jd7  _| jS )NZclass_tabler   Zchar_len_tableZclass_factorZstate_tabler   )r   r   r   r   r   r   )r   ÚcZ
byte_classZ
curr_stater   r   r   Ú
next_stateB   s   ÿzCodingStateMachine.next_statec                 C   s   | j S r   )r   r   r   r   r   Úget_current_charlenP   s   z&CodingStateMachine.get_current_charlenc                 C   ó
   | j d S )NÚname©r   r   r   r   r   Úget_coding_state_machineS   s   
z+CodingStateMachine.get_coding_state_machinec                 C   r   )NÚlanguager   r   r   r   r   r   V   s   
zCodingStateMachine.languageN)r   Ú
__module__Ú__qualname__Ú__doc__r   r   r   r   r   Úpropertyr   r   r   r   r   r   !   s    r   )r	   Úenumsr   Úobjectr   r   r   r   r   Ú<module>   s                                                                                                                                                                                                     B                                                            ¾                                                            C                                                            ½                                                            D                                                            ¼                                                            E                                                            »                                                            F   o
    <÷[bn  ã                   @   sX   d dl mZ d dlmZ d dlmZmZmZ d dlm	Z	m
Z
mZmZ G dd deZdS )é   )ÚCharSetProber)ÚCodingStateMachine)ÚLanguageFilterÚProbingStateÚMachineState)ÚHZ_SM_MODELÚISO2022CN_SM_MODELÚISO2022JP_SM_MODELÚISO2022KR_SM_MODELc                       sV   e Zd ZdZd fdd	Z fddZedd Zed	d
 Zdd Z	dd Z
  ZS )ÚEscCharSetProberz¼
    This CharSetProber uses a "code scheme" approach for detecting encodings,
    whereby easily recognizable escape or shift sequences are relied on to
    identify these encodings.
    Nc                    s    t t| j|d g | _| jtj@ r"| j tt	¡ | j tt
¡ | jtj@ r0| j tt¡ | jtj@ r>| j tt¡ d | _d | _d | _d | _|  ¡  d S )N)Úlang_filter)Úsuperr   Ú__init__Ú	coding_smr   r   ÚCHINESE_SIMPLIFIEDÚappendr   r   r   ÚJAPANESEr	   ÚKOREANr
   Úactive_sm_countÚ_detected_charsetÚ_detected_languageÚ_stateÚreset)Úselfr   ©Ú	__class__© ú`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\escprober.pyr   *   s   zEscCharSetProber.__init__c                    sJ   t t|  ¡  | jD ]}|sq
d|_| ¡  q
t| j| _d | _d | _d S )NT)	r   r   r   r   ÚactiveÚlenr   r   r   )r   r   r   r   r   r   :   s   


zEscCharSetProber.resetc                 C   ó   | j S ©N©r   ©r   r   r   r   Úcharset_nameE   ó   zEscCharSetProber.charset_namec                 C   r    r!   )r   r#   r   r   r   ÚlanguageI   r%   zEscCharSetProber.languagec                 C   s   | j rdS dS )Ng®Gáz®ï?g        r"   r#   r   r   r   Úget_confidenceM   s   zEscCharSetProber.get_confidencec                 C   s¤   |D ]L}| j D ]F}|r|jsq| |¡}|tjkr4d|_|  jd8  _| jdkr3tj| _| j	    S q|tj
krMtj| _| ¡ | _|j| _| j	    S qq| j	S )NFr   é    )r   r   Z
next_stater   ÚERRORr   r   ÚNOT_MEr   ÚstateÚITS_MEÚFOUND_ITZget_coding_state_machiner   r&   r   )r   Úbyte_strÚcr   Zcoding_stater   r   r   ÚfeedS   s(   




þ

üözEscCharSetProber.feedr!   )Ú__name__Ú
__module__Ú__qualname__Ú__doc__r   r   Úpropertyr$   r&   r'   r0   Ú__classcell__r   r   r   r   r   #   s    

r   N)Úcharsetproberr   Zcodingstatemachiner   Úenumsr   r   r   Zescsmr   r   r	   r
   r   r   r   r   r   Ú<module>   s
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Ï                                                            2                                                            Î                                                            3                                                            Í                                                            4                                                            Ì                                                            5                             o
    <÷[bö  ã                   @   s0   d dl Z d dlZddlmZ G dd deZdS )é    Né   )ÚProbingStatec                   @   sn   e Zd ZdZdddZdd Zedd Zd	d
 Zedd Z	dd Z
edd Zedd Zedd ZdS )ÚCharSetProbergffffffî?Nc                 C   s   d | _ || _t t¡| _d S ©N)Ú_stateÚlang_filterÚloggingÚ	getLoggerÚ__name__Úlogger)Úselfr   © r   údE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\charsetprober.pyÚ__init__'   s   zCharSetProber.__init__c                 C   s   t j| _d S r   )r   Ú	DETECTINGr   ©r   r   r   r   Úreset,   s   zCharSetProber.resetc                 C   ó   d S r   r   r   r   r   r   Úcharset_name/   s   zCharSetProber.charset_namec                 C   r   r   r   )r   Úbufr   r   r   Úfeed3   ó   zCharSetProber.feedc                 C   s   | j S r   )r   r   r   r   r   Ústate6   s   zCharSetProber.statec                 C   s   dS )Ng        r   r   r   r   r   Úget_confidence:   r   zCharSetProber.get_confidencec                 C   s   t  dd| ¡} | S )Ns   ([ -])+ó    )ÚreÚsub)r   r   r   r   Úfilter_high_byte_only=   s   z#CharSetProber.filter_high_byte_onlyc                 C   s\   t  }t d| ¡}|D ] }| |dd ¡ |dd }| ¡ s&|dk r&d}| |¡ q|S )u9  
        We define three types of bytes:
        alphabet: english alphabets [a-zA-Z]
        international: international characters [Â-Ã¿]
        marker: everything else [^a-zA-ZÂ-Ã¿]

        The input buffer can be thought to contain a series of words delimited
        by markers. This function works to filter all words that contain at
        least one international character. All contiguous sequences of markers
        are replaced by a single space ascii character.

        This filter applies to all scripts which do not use English characters.
        s%   [a-zA-Z]*[-ÿ]+[a-zA-Z]*[^a-zA-Z-ÿ]?Néÿÿÿÿó   r   )Ú	bytearrayr   ÚfindallÚextendÚisalpha)r   ÚfilteredÚwordsÚwordZ	last_charr   r   r   Úfilter_international_wordsB   s   ÿz(CharSetProber.filter_international_wordsc                 C   s¤   t  }d}d}tt| D ]7}| ||d  }|dkrd}n|dkr$d}|dk rD| ¡ sD||kr@|s@| | || ¡ | d¡ |d }q|sP| | |d	 ¡ |S )
aÈ  
        Returns a copy of ``buf`` that retains only the sequences of English
        alphabet and high byte characters that are not between <> characters.
        Also retains English alphabet and high byte characters immediately
        before occurrences of >.

        This filter can be applied to all scripts which contain both English
        characters and extended ASCII characters, but is currently only used by
        ``Latin1Prober``.
        Fr   r   ó   >ó   <Tr   r   N)r    ÚrangeÚlenr#   r"   )r   r$   Zin_tagÚprevÚcurrZbuf_charr   r   r   Úfilter_with_english_lettersg   s$   
z)CharSetProber.filter_with_english_lettersr   )r
   Ú
__module__Ú__qualname__ZSHORTCUT_THRESHOLDr   r   Úpropertyr   r   r   r   Ústaticmethodr   r'   r.   r   r   r   r   r   #   s     




$r   )r   r   Úenumsr   Úobjectr   r   r   r   r   Ú<module>   s                                                                                                                             Þ                                                            #                                                            Ý                                                            $                                                       o
    <÷[b}  ã                   @   sh   d Z G dd deZG dd deZG dd deZG dd deZG d	d
 d
eZG dd deZdS )zr
All of the Enums that are used throughout the chardet package.

:author: Dan Blanchard (dan.blanchard@gmail.com)
c                   @   ó   e Zd ZdZdZdZdZdS )Ú
InputStatezS
    This enum represents the different states a universal detector can be in.
    é    é   é   N)Ú__name__Ú
__module__Ú__qualname__Ú__doc__Ú
PURE_ASCIIÚ	ESC_ASCIIÚ	HIGH_BYTE© r   r   ú\E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\enums.pyr      ó
    r   c                   @   s<   e Zd ZdZdZdZdZdZdZdZ	eeB Z
e
eB eB ZdS )	ÚLanguageFilterzj
    This enum represents the different language filters we can apply to a
    ``UniversalDetector``.
    r   r   é   é   é   é   N)r   r   r   r	   ZCHINESE_SIMPLIFIEDZCHINESE_TRADITIONALZJAPANESEZKOREANÚNON_CJKÚALLZCHINESEZCJKr   r   r   r   r      s    r   c                   @   r   )ÚProbingStatezG
    This enum represents the different states a prober can be in.
    r   r   r   N)r   r   r   r	   Z	DETECTINGÚFOUND_ITÚNOT_MEr   r   r   r   r       r   r   c                   @   r   )ÚMachineStatezN
    This enum represents the different states a state machine can be in.
    r   r   r   N)r   r   r   r	   ZSTARTÚERRORZITS_MEr   r   r   r   r   )   r   r   c                   @   s,   e Zd ZdZdZdZdZdZedd Z	dS )	ÚSequenceLikelihoodzX
    This enum represents the likelihood of a character following the previous one.
    r   r   r   é   c                 C   s   dS )z::returns: The number of likelihood categories in the enum.r   r   )Úclsr   r   r   Úget_num_categories;   s   z%SequenceLikelihood.get_num_categoriesN)
r   r   r   r	   ZNEGATIVEZUNLIKELYZLIKELYZPOSITIVEÚclassmethodr   r   r   r   r   r   2   s    r   c                   @   s$   e Zd ZdZdZdZdZdZdZdS )ÚCharacterCategoryz¸
    This enum represents the different categories language models for
    ``SingleByteCharsetProber`` put characters into.

    Anything less than CONTROL is considered a letter.
    éÿ   éþ   éý   éü   éû   N)	r   r   r   r	   Z	UNDEFINEDZ
LINE_BREAKZSYMBOLZDIGITZCONTROLr   r   r   r   r!   A   s    r!   N)r	   Úobjectr   r   r   r   r   r!   r   r   r   r   Ú<module>   s    			                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ~                                                                                                                                                                                                                                                                                                         ÿ                                                                                                                        þ                                              o
    <÷[bÿ  ã                   @   s,   d dl mZ d dlmZ G dd deZdS )é   )ÚProbingState)ÚCharSetProberc                       sR   e Zd Zd fdd	Z fddZedd Zedd	 Zd
d Zdd Z	  Z
S )ÚCharSetGroupProberNc                    s(   t t| j|d d| _g | _d | _d S )N)Úlang_filteré    )Úsuperr   Ú__init__Ú_active_numÚprobersÚ_best_guess_prober)Úselfr   ©Ú	__class__© úiE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\charsetgroupprober.pyr   !   s   
zCharSetGroupProber.__init__c                    sJ   t t|  ¡  d| _| jD ]}|r| ¡  d|_|  jd7  _qd | _d S )Nr   Tr   )r   r   Úresetr	   r
   Úactiver   )r   Úproberr   r   r   r   '   s   

zCharSetGroupProber.resetc                 C   ó    | j s|  ¡  | j sd S | j jS ©N)r   Úget_confidenceÚcharset_name©r   r   r   r   r   1   ó
   zCharSetGroupProber.charset_namec                 C   r   r   )r   r   Úlanguager   r   r   r   r   9   r   zCharSetGroupProber.languagec                 C   s   | j D ]?}|sq|jsq| |¡}|sq|tjkr%|| _tj| _| j  S |tjkrBd|_|  j	d8  _	| j	dkrBtj| _| j  S q| jS )NFr   r   )
r
   r   Úfeedr   ÚFOUND_ITr   Ú_stateÚstateÚNOT_MEr	   )r   Úbyte_strr   r   r   r   r   r   A   s(   






zCharSetGroupProber.feedc                 C   s   | j }|tjkr
dS |tjkrdS d}d | _| jD ])}|sq|js*| j d|j	¡ q| 
¡ }| j d|j	|j|¡ ||k rB|}|| _q| jsHdS |S )Ng®Gáz®ï?g{®Gáz?g        z%s not activez%s %s confidence = %s)r   r   r   r   r   r
   r   ÚloggerÚdebugr   r   r   )r   r   Z	best_confr   Zconfr   r   r   r   V   s,   


z!CharSetGroupProber.get_confidencer   )Ú__name__Ú
__module__Ú__qualname__r   r   Úpropertyr   r   r   r   Ú__classcell__r   r   r   r   r       s    


r   N)Úenumsr   Zcharsetproberr   r   r   r   r   r   Ú<module>   s                                                                                                                                                                                                                                                                                                                                                                                                                  k                                                                                                                      l                                                                                                                      m                                                                                                                      n                                                                                                                      o                                                                                                                      p                                                                                                     o
    =÷[bÇ  ã                   @   sD   d dl mZ d dlmZ d dlmZmZ g d¢Zdd Zdd Z	d	S )
é   )ÚUniversalDetector)Ú
InputState)Ú__version__ÚVERSION)r   ÚdetectÚ
detect_allr   r   c                 C   sF   t | tst | tstd t| ¡t| } t }| | ¡ | ¡ S )z£
    Detect the encoding of the given byte string.

    :param byte_str:     The byte sequence to examine.
    :type byte_str:      ``bytes`` or ``bytearray``
    ú3Expected object of type bytes or bytearray, got: {})	Ú
isinstanceÚ	bytearrayÚbytesÚ	TypeErrorÚformatÚtyper   ÚfeedÚclose)Úbyte_strÚdetector© r   ú_E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\chardet\__init__.pyr      s   


ÿ
r   c                 C   sÚ   t | tst | tstd t| ¡t| } t }| | ¡ | ¡  |j	t
jkrig }|jD ],}| ¡ |jkrZ|j}|j ¡ }| d¡rN|jrN|j ||¡}| || ¡ |jd¡ q.t|dkrit|dd dS |jgS )z±
    Detect all the possible encodings of the given byte string.

    :param byte_str:     The byte sequence to examine.
    :type byte_str:      ``bytes`` or ``bytearray``
    r   ziso-8859)ÚencodingÚ
confidenceÚlanguageé    c                 S   s
   | d  S )Nr   r   )Úresultr   r   r   Ú<lambda>Q   s   
 zdetect_all.<locals>.<lambda>)Úkey)r	   r
   r   r   r   r   r   r   r   Z_input_stater   Z	HIGH_BYTEZ_charset_probersZget_confidenceZMINIMUM_THRESHOLDÚcharset_nameÚlowerÚ
startswithZ_has_win_bytesZISO_WIN_MAPÚgetÚappendr   ÚlenÚsortedr   )r   r   ÚresultsZproberr   Zlower_charset_namer   r   r   r   -   s:   


ÿ



ÿýr   N)
Zuniversaldetectorr   Zenumsr   Úversionr   r   Ú__all__r   r   r   r   r   r   Ú<module>   s                                                                                                                                                                                                        Ë                                                           6                                                           Ê                                                           7                                                           É                                                           8                                                           È                                                           9                                                           Ç                                                           :                                                           Æ                                                           ;                                                           Å                                                           <                                                           Ä                                                           =                                                           Ã                  o
    ?÷[bB  ã                   @   sÂ  d Z ddlmZ ddlZejZed dkZed dkZddlZer|ddl	m
Z
mZmZmZmZmZmZmZmZ ddlmZmZmZmZmZ ddlmZ ddlZdd	lmZ dd
lmZ ddlmZm Z m!Z!m"Z" e#Z$e#Z%e&Z#e'Z'e(e)e*fZ+e(e)fZ,e-Z.dS erßddl/mZmZmZmZmZm
Z
mZmZmZmZ ddl0mZmZmZmZmZ ddl1m2Z dd	l3mZ dd
l4mZ ddlm"Z" ddl5mZm Z m!Z! ddlm.Z. e#Z$e#Z#e%Z%e#e%fZ'e(e*fZ+e(fZ,dS dS )zq
requests.compat
~~~~~~~~~~~~~~~

This module handles import compatibility issues between Python 2 and
Python 3.
é    )ÚchardetNé   é   )	ÚquoteÚunquoteÚ
quote_plusÚunquote_plusÚ	urlencodeÚ
getproxiesÚproxy_bypassÚproxy_bypass_environmentÚgetproxies_environment)ÚurlparseÚ
urlunparseÚurljoinÚurlsplitÚ	urldefrag)Úparse_http_list)ÚMorsel)ÚStringIO)ÚCallableÚMappingÚMutableMappingÚOrderedDict)
r   r   r   r   r	   r   r   r   r   r   )r   r
   r   r   r   )Ú	cookiejar)r   )r   r   r   )ÚJSONDecodeError)6Ú__doc__Úpip._vendorr   ÚsysÚversion_infoZ_verZis_py2Zis_py3ZjsonÚurllibr   r   r   r   r	   r
   r   r   r   r   r   r   r   r   Zurllib2r   Z	cookielibZCookier   r   Úcollectionsr   r   r   r   ÚstrZbuiltin_strÚbytesÚunicodeZ
basestringÚintÚlongÚfloatZnumeric_typesÚinteger_typesÚ
ValueErrorr   Úurllib.parseZurllib.requestÚhttpr   Zhttp.cookiesÚioÚcollections.abc© r.   r.   ú^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\requests\compat.pyÚ<module>   sL   	,
0
ð                                                                                                                                                                                                                                                                                                                                                                                                                                              Ü                                                           %                                                           Û                                                           &                                                           Ú                                                           '                                                           Ù                                                           (                                                           Ø                                                           )                                                           ×                                                           *                                                           Ö                                                           +                                                           Õ                                                           ,                                                           Ô          o
    A÷[bò  ã                   @   sD   d dl Z ddlmZ ddlmZ ejrd dlZG dd dejZdS )é    Né   )Úsix©Úqueuec                   @   s0   e Zd Zdd ZefddZdd Zdd Zd	S )
Ú	LifoQueuec                 C   s   t  ¡ | _d S ©N)ÚcollectionsÚdequer   )ÚselfÚ_© r   úaE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\queue.pyÚ_init   s   zLifoQueue._initc                 C   s
   || j S r   r   )r
   Úlenr   r   r   Ú_qsize   ó   
zLifoQueue._qsizec                 C   s   | j  |¡ d S r   )r   Úappend)r
   Úitemr   r   r   Ú_put   s   zLifoQueue._putc                 C   s
   | j  ¡ S r   )r   Úpop)r
   r   r   r   Ú_get   r   zLifoQueue._getN)Ú__name__Ú
__module__Ú__qualname__r   r   r   r   r   r   r   r   r   r      s
    r   )	r   Úpackagesr   Úpackages.six.movesr   ÚPY2ÚQueueZ_unused_module_Queuer   r   r   r   r   Ú<module>   s                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               (                                                          Ø                                                          )                                                          ×                                                          *                                                          Ö                                                          +                                                          Õ                                                          ,                                                          Ô                                                          -                                                          Ó                                                          .                                                          Ò                                                          /                                                          Ñ                                                          0                                                          Ð                                                          1                                                          Ï                                                          2                                                          Î                                        o
    @÷[b	  ã                   @   s   d dl mZ d dlZd dlZd dlZd dlmZ ddlmZ ddl	m
Z
 ddlmZ e d¡d	 Zd
d Zdd Zdd ZdddZdS )é    )Úabsolute_importN)ÚBytesIOé   )ÚRequestField)Úsix)Úbzutf-8é   c                  C   s$   t  t d¡¡} tjs|  d¡} | S )zN
    Our embarrassingly-simple replacement for mimetools.choose_boundary.
    é   Úascii)ÚbinasciiÚhexlifyÚosÚurandomr   ÚPY2Údecode)Úboundary© r   ú_E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\filepost.pyÚchoose_boundary   s   
r   c                 c   sL    t | trt | ¡}nt| }|D ]}t |tr|V  qtj| V  qdS )z
    Iterate over fields.

    Supports list of (k, v) tuples and dicts, and lists of
    :class:`~urllib3.fields.RequestField`.

    N)Ú
isinstanceÚdictr   Ú	iteritemsÚiterr   Zfrom_tuples)ÚfieldsÚiÚfieldr   r   r   Úiter_field_objects   s   

ür   c                 C   s,   t | trdd t | ¡D S dd | D S )a-  
    .. deprecated:: 1.6

    Iterate over fields.

    The addition of :class:`~urllib3.fields.RequestField` makes this function
    obsolete. Instead, use :func:`iter_field_objects`, which returns
    :class:`~urllib3.fields.RequestField` objects.

    Supports list of (k, v) tuples and dicts.
    c                 s   ó    | ]	\}}||fV  qd S ©Nr   ©Ú.0ÚkÚvr   r   r   Ú	<genexpr>:   ó    ziter_fields.<locals>.<genexpr>c                 s   r   r   r   r   r   r   r   r#   <   r$   )r   r   r   r   )r   r   r   r   Úiter_fields-   s   
r%   c                 C   s¸   t  }|du r
t }t| D ]8}| td| ¡ t| | ¡ ¡ |j}t|t	r.t
|}t|tjr<t| |¡ n| |¡ | d¡ q| td| ¡ t
d| }| ¡ |fS )aQ  
    Encode a dictionary of ``fields`` using the multipart/form-data MIME format.

    :param fields:
        Dictionary of fields or list of (key, :class:`~urllib3.fields.RequestField`).

    :param boundary:
        If not specified, then a random boundary will be generated using
        :func:`urllib3.filepost.choose_boundary`.
    Nz--%s
s   
z--%s--
z multipart/form-data; boundary=%s)r   r   r   Úwriter   ÚwriterZrender_headersÚdatar   ÚintÚstrr   Ú	text_typeÚgetvalue)r   r   Úbodyr   r(   Úcontent_typer   r   r   Úencode_multipart_formdata?   s    

r/   r   )Ú
__future__r   r   Úcodecsr   Úior   r   r   Úpackagesr   Zpackages.sixr   Úlookupr'   r   r   r%   r/   r   r   r   r   Ú<module>   s    
                                                                                                                                                                                                                                                                                                                                                ñ                                                                                                                  ð                                                                                                                  ï                                                                                                                  î                                                                                                                  í                                    o
    A÷[bw  ã                   @   sr   d Z ddlZddlZzddlZW n ey   dZY nw dZG dd deZdddZd	d
 Z	dd Z
dd ZdS )zJThe match_hostname() function from Python 3.3.3, essential when using SSL.é    Nz3.5.0.1c                   @   s   e Zd ZdS )ÚCertificateErrorN)Ú__name__Ú
__module__Ú__qualname__© r   r   únE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\ssl_match_hostname.pyr      s    r   é   c           
      C   sò   g }| sdS |   d¡}|d }|dd }| d¡}||kr&tdt|  |s0|  ¡ | ¡ kS |dkr:| d¡ n| d	¡sD| d	¡rM| t |¡¡ n| t |¡ 	d
d¡¡ |D ]
}| t |¡¡ q[t 
dd |¡ d tj¡}	|	 |¡S )zhMatching according to RFC 6125, section 6.4.3

    http://tools.ietf.org/html/rfc6125#section-6.4.3
    FÚ.r   r   NÚ*z,too many wildcards in certificate DNS name: z[^.]+zxn--z\*z[^.]*z\Az\.z\Z)ÚsplitÚcountr   ÚreprÚlowerÚappendÚ
startswithÚreÚescapeÚreplaceÚcompileÚjoinÚ
IGNORECASEÚmatch)
ÚdnÚhostnameZmax_wildcardsZpatsÚpartsZleftmostÚ	remainderÚ	wildcardsÚfragÚpatr   r   r   Ú_dnsname_match   s,   


ÿ
r   c                 C   s&   t | trtjdk rt| ddd} | S )N)é   ÚasciiÚstrict)ÚencodingÚerrors)Ú
isinstanceÚstrÚsysÚversion_infoZunicode)Úobjr   r   r   Ú_to_unicodeO   s   r*   c                 C   s   t  t|  ¡ ¡}||kS )zExact matching of IP addresses.

    RFC 6125 explicitly doesn't define an algorithm for this
    (section 1.7.2 - "Out of Scope").
    )Ú	ipaddressÚ
ip_addressr*   Úrstrip)ÚipnameÚhost_ipÚipr   r   r   Ú_ipaddress_matchV   s   r1   c                 C   sv  | st dz	t t|¡}W n% t y   d}Y n ty$   d}Y n ty4   tdu r1d}n Y nw g }|  dd¡}|D ]/\}}|dkrY|du rSt||rS dS | |¡ q?|dkrn|durit	||ri dS | |¡ q?|s|  dd¡D ]}|D ]\}}|dkrt||r  dS | |¡ q{qwt
|d	kr§td
|d tt|¡f t
|d	kr·td||d f td)a)  Verify that *cert* (in decoded format as returned by
    SSLSocket.getpeercert()) matches the *hostname*.  RFC 2818 and RFC 6125
    rules are followed, but IP addresses are not accepted for *hostname*.

    CertificateError is raised on failure. On success, the function
    returns nothing.
    ztempty or no certificate, match_hostname needs a SSL socket or SSL context with either CERT_OPTIONAL or CERT_REQUIREDNÚsubjectAltNamer   ÚDNSz
IP AddressÚsubjectÚ
commonNamer   z&hostname %r doesn't match either of %sz, zhostname %r doesn't match %rr   z=no appropriate commonName or subjectAltName fields were found)Ú
ValueErrorr+   r,   r*   ÚUnicodeErrorÚAttributeErrorÚgetr   r   r1   Úlenr   r   Úmapr   )Úcertr   r/   ÚdnsnamesÚsanÚkeyÚvalueÚsubr   r   r   Úmatch_hostnameb   s`   ÿþý


úÿÿÿrB   )r   )Ú__doc__r   r'   r+   ÚImportErrorÚ__version__r6   r   r   r*   r1   rB   r   r   r   r   Ú<module>   s    ÿ
6                                                                                                                                                                                                                                                                                                                                                                         ¥                                                        \                                                        ¤                                                        ]                             o
    A÷[bE  ã                   @   s0   d dl mZmZmZ 	dddZ	dddZdS )é   )Úcreate_urllib3_contextÚresolve_cert_reqsÚresolve_ssl_versionNc                 C   s4   | du rdS |dkrdS | j dkr|r|jrdS dS )a?  
    Returns True if the connection requires an HTTP CONNECT through the proxy.

    :param URL proxy_url:
        URL of the proxy.
    :param ProxyConfig proxy_config:
        Proxy configuration from poolmanager.py
    :param str destination_scheme:
        The scheme of the destination. (i.e https, http, etc)
    NFÚhttpÚhttpsT)ÚschemeZuse_forwarding_for_https)Z	proxy_urlÚproxy_configÚdestination_scheme© r
   úaE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\proxy.pyÚconnection_requires_http_tunnel   s   ÿþýr   c                 C   s6   t t| t|d}|s|s|st|dr| ¡  |S )z\
    Generates a default proxy ssl context if one hasn't been provided by the
    user.
    )Ússl_versionÚ	cert_reqsÚload_default_certs)r   r   r   Úhasattrr   )r   r   Úca_certsÚca_cert_dirÚca_cert_dataÚssl_contextr
   r
   r   Úcreate_proxy_ssl_context%   s   þÿþýür   )NNN)Ússl_r   r   r   r   r   r
   r
   r
   r   Ú<module>   s
    
ÿ"ÿ                                                                                                                                                                                                                                        ö                                                                                                                õ                                                                                                                ô                                                                                                                ó                                                                                                                ò                                                                                                                ñ                                                                                                                ð                                                                                                                ï                                                                                                                î                                                                                                                í                                                                                                                ì                                                                                                     o
    A÷[b¶  ã                   @   sP   d dl mZ d dlmZmZ ddlmZ ddlmZ	 dd Z
dd	 Zd
d ZdS )é    )Úabsolute_import)Ú!MultipartInvariantViolationDefectÚStartBoundaryNotFoundDefecté   )ÚHeaderParsingError)Úhttp_clientc                 C   s`   z|   ¡ W S  ty   Y nw z| jW S  ty   Y nw z| jdu W S  ty/   Y tdw )zt
    Checks whether a given file-like object is closed.

    :param obj:
        The file-like object to check.
    Nz)Unable to determine whether fp is closed.)ÚisclosedÚAttributeErrorÚclosedÚfpÚ
ValueError)Úobj© r   údE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\response.pyÚis_fp_closed	   s    
ÿÿýr   c                 C   s   t | tjstd t| ¡t| dd}t| dd}d}|r/|  ¡ s/| }t |tt	fr/|}|r8dd |D }|s<|rBt
||ddS )a>  
    Asserts whether all headers have been successfully parsed.
    Extracts encountered errors from the result of parsing headers.

    Only works on Python 3.

    :param http.client.HTTPMessage headers: Headers to verify.

    :raises urllib3.exceptions.HeaderParsingError:
        If parsing errors are found.
    z"expected httplib.Message, got {0}.ÚdefectsNÚget_payloadc                 S   s   g | ]}t |ttfs|qS r   )Ú
isinstancer   r   )Ú.0Údefectr   r   r   Ú
<listcomp>R   s    ÿýÿz)assert_header_parsing.<locals>.<listcomp>)r   Úunparsed_data)r   ÚhttplibÚHTTPMessageÚ	TypeErrorÚformatÚtypeÚgetattrÚis_multipartÚbytesÚstrr   )Úheadersr   r   r   Úpayloadr   r   r   Úassert_header_parsing(   s"   þÿr#   c                 C   s$   | j }t|tr|dkS | ¡ dkS )zõ
    Checks whether the request of a response has been a HEAD-request.
    Handles the quirks of AppEngine.

    :param http.client.HTTPResponse response:
        Response to check if the originating request
        used 'HEAD' as a method.
    é   ÚHEAD)Ú_methodr   ÚintÚupper)ÚresponseÚmethodr   r   r   Úis_response_to_head^   s   

r+   N)Ú
__future__r   Zemail.errorsr   r   Ú
exceptionsr   Úpackages.six.movesr   r   r   r#   r+   r   r   r   r   Ú<module>   s    6                                                                                                                                                                                                                                                                                                              e                                                                                                          f                                                                                                          g                                                                                                          h                                                                                                          i                                                                                                          j                                                                                                          k                      INDX( 	 8^           (   ð  è       ØØ                  D
     v     D
    õuÄÈLRØõuÄÈLRØõuÄÈLRØõuÄÈLRØ       j               c o n n e c t i o n . c p y t h o n - 3 1 0 . p y c 4 'D
     l     D
    (ÕÈLRØ(ÕÈLRØ(ÕÈLRØ(ÕÈLRØ       =               p r o x y . c p y t h o n - 3 1 0 . p y c y c .D
     l     D
    §áÈLRØ§áÈLRØ§áÈLRØ§áÈLRØ       %               q u e u e . c p y t h o n - 3 1 0 . p y c y c  D
     p     D
    üÙÆÈLRØüÙÆÈLRØüÙÆÈLRØüÙÆÈLR                       r e q u e s t . c p y t h o n - 3 1 0 . p y c !D
     r     D
    üÙÆÈLRØüÙÆÈLRØüÙÆÈLRØüÙÆÈLRØ       2	               r e s p o n s e . c p y t h o n - 3 1 0 . p y c 
    "D
     l     D
    A<ÉÈLRØA<ÉÈLRØA<ÉÈLRØA<ÉÈLRØ @      ?               r e t r y . c p y t h o n - 3 1 0 . p y c p y %D
     z     D
    
ÄÒÈLRØ
ÄÒÈLRØ
ÄÒÈLRØ
ÄÒÈLRØ        ä               s s l t r a n s p o r t . c p y t h o n - 3 1 0 . p y c h     #D
     j     D
    åËÈLR åËÈLRØåËÈLRØåËÈLRØ 0      ,,               s s l _ . c p y t h o n - 3 1 0 . p y c . p y )D
          D
    R×ÈLRØR×ÈLRØR×ÈLRØR×ÈLRØ       Î              " s s l _ m a t c h _ h o s t n a m e . c p y t h o n - 3 1 0 . p y c  &D
     p     D
    (ÕÈLRØ(ÕÈLRØ(ÕÈLRØ(ÕÈLRØ 0      ê"               t i m e o u t . c p y t h o n - 3 1 0 . p y c $D
    x h     D
    [cÐÈLRØ[cÐÈLRØ[cÐÈLRØ[cÐÈLRØ 0      ¹)               u r l . c p y t h o n - 3 1 0 . p y c D
     j    D
    õuÄÈLRØõuÄÈLRØõuÄÈLRØõuÄÈLRØ                      w a i t . c p y t h o n - 3 1 0 . p y c . p y D
     r     D
    -ÂÈLRØ-ÂÈLRØ-ÂÈLRØ-ÂÈLRØ       R               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          o
    A÷[b  ã                   @   s    d dl mZ d dlmZ ddlmZ ddlmZmZ dZ	e
g d¢ZdZzd d	lZW n	 ey3   Y nw ed
7 Ze Z												dddZdd Zdd Zd	S )é    )Úabsolute_import)Ú	b64encodeé   )ÚUnrewindableBodyError)ÚbÚinteger_typesz@@@SKIP_HEADER@@@)úaccept-encodingÚhostú
user-agentzgzip,deflateNz,brc                 C   s   i }|rt |tr
nt |trd |¡}nt}||d< |r!||d< | r'd|d< |r6dtt| d¡ |d< |rEdtt| d¡ |d	< |rKd
|d< |S )a  
    Shortcuts for generating request headers.

    :param keep_alive:
        If ``True``, adds 'connection: keep-alive' header.

    :param accept_encoding:
        Can be a boolean, list, or string.
        ``True`` translates to 'gzip,deflate'.
        List will get joined by comma.
        String will be used as provided.

    :param user_agent:
        String representing the user-agent you want, such as
        "python-urllib3/0.6"

    :param basic_auth:
        Colon-separated username:password string for 'authorization: basic ...'
        auth header.

    :param proxy_basic_auth:
        Colon-separated username:password string for 'proxy-authorization: basic ...'
        auth header.

    :param disable_cache:
        If ``True``, adds 'cache-control: no-cache' header.

    Example::

        >>> make_headers(keep_alive=True, user_agent="Batman/1.0")
        {'connection': 'keep-alive', 'user-agent': 'Batman/1.0'}
        >>> make_headers(accept_encoding=True)
        {'accept-encoding': 'gzip,deflate'}
    ú,r   r
   z
keep-aliveÚ
connectionzBasic zutf-8Zauthorizationzproxy-authorizationzno-cachezcache-control)Ú
isinstanceÚstrÚlistÚjoinÚACCEPT_ENCODINGr   r   Údecode)Z
keep_aliveZaccept_encodingZ
user_agentZ
basic_authZproxy_basic_authZdisable_cacheÚheaders© r   úcE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\request.pyÚmake_headers   s.   *

ÿþr   c              	   C   sV   |durt | | |S t| dddur)z|  ¡ }W |S  ttfy(   t}Y |S w |S )z
    If a position is provided, move file to that point.
    Otherwise, we'll attempt to record a position for future use.
    NÚtell)Úrewind_bodyÚgetattrr   ÚIOErrorÚOSErrorÚ_FAILEDTELL)ÚbodyÚposr   r   r   Úset_file_positionb   s   
	ø
ûûr   c              	   C   sh   t | dd}|dur$t|tr$z|| W dS  ttfy#   tdw |tu r,tdtdt| )zæ
    Attempt to rewind body to a certain position.
    Primarily used for request redirects and retries.

    :param body:
        File-like object that supports seek.

    :param int pos:
        Position to seek to in file.
    ÚseekNzAAn error occurred when rewinding request body for redirect/retry.zRUnable to record file position for rewinding request body during a redirect/retry.z4body_pos must be of type integer, instead it was %s.)	r   r   r   r   r   r   r   Ú
ValueErrorÚtype)r   Úbody_posZ	body_seekr   r   r   r   t   s    ÿÿÿ
ÿr   )NNNNNN)Ú
__future__r   Úbase64r   Ú
exceptionsr   Zpackages.sixr   r   ÚSKIP_HEADERÚ	frozensetÚSKIPPABLE_HEADERSr   ZbrotliZ_unused_module_brotliÚImportErrorÚobjectr   r   r   r   r   r   r   r   Ú<module>   s.    ÿ
úH                                                                                                                            C                                                     ½                                                     D                                                     ¼                                                     E                              o
    A÷[b  ã                   @   sÌ   d dl Z d dlZd dlZd dlmZ zd dlmZ W n ey)   d dlmZ Y nw g d¢ZG dd de	Z
ejdkr@d	d
 Zndd
 ZdddZdddZdd Zdd Zdd adddZdddZdS )é    N)Úpartial)Ú	monotonic)Útime)ÚNoWayToWaitForSocketErrorÚwait_for_readÚwait_for_writec                   @   s   e Zd ZdS )r   N)Ú__name__Ú
__module__Ú__qualname__© r   r   ú`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\wait.pyr      s    r   )é   é   c                 C   s   | |S ©Nr   )ÚfnÚtimeoutr   r   r   Ú_retry_on_intr*   ó   r   c              
   C   s   |d u r	t d}nt | }	 z| |W S  ttjfyE } z"|jd tjkr( |t  }|dk r3d}|t dkr;d }W Y d }~qd }~ww )NÚinfTr   )Úfloatr   ÚOSErrorÚselectÚerrorÚargsÚerrnoZEINTR)r   r   ZdeadlineÚer   r   r   r   0   s"   



öFc           
      C   sd   |s|st dg }g }|r| | ¡ |r| | ¡ ttj|||}t||\}}}	t|p0|p0|	S )Nú2must specify at least one of read=True, write=True)ÚRuntimeErrorÚappendr   r   r   Úbool)
ÚsockÚreadÚwriter   ZrcheckZwcheckr   ZrreadyZwreadyZxreadyr   r   r   Úselect_wait_for_socketG   s   

r#   c                    s^   |s|st dd}|r|tjO }|r|tjO }t ¡    | |¡  fdd}tt||S )Nr   r   c                    s   | d ur| d9 }    | ¡S )Niè  )Úpoll)Út©Zpoll_objr   r   Údo_pollf   s   
z%poll_wait_for_socket.<locals>.do_poll)r   r   ZPOLLINZPOLLOUTr$   Úregisterr   r   )r    r!   r"   r   Úmaskr'   r   r&   r   Úpoll_wait_for_socketZ   s   

r*   c                  O   s   t d)Nzno select-equivalent available)r   ©r   Úkwargsr   r   r   Únull_wait_for_socketn   r   r-   c               	   C   s4   zt  ¡ } t| jd W dS  ttfy   Y dS w )Nr   FT)r   r$   r   ÚAttributeErrorr   r&   r   r   r   Ú_have_working_pollr   s   ýÿr/   c                  O   s.   t  rtan
ttdrtantat| i |¤S )Nr   )r/   r*   Úwait_for_socketÚhasattrr   r#   r-   r+   r   r   r   r0      s   
r0   c                 C   ó   t | d|dS )zWaits for reading to be available on a given socket.
    Returns True if the socket is readable, or False if the timeout expired.
    T)r!   r   ©r0   ©r    r   r   r   r   r      ó   r   c                 C   r2   )zWaits for writing to be available on a given socket.
    Returns True if the socket is readable, or False if the timeout expired.
    T)r"   r   r3   r4   r   r   r   r      r5   r   )FFNr   )r   r   ÚsysÚ	functoolsr   r   r   ÚImportErrorÚ__all__Ú	Exceptionr   Úversion_infor   r#   r*   r-   r/   r0   r   r   r   r   r   r   Ú<module>   s*    ÿ




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   0                                                     Ð                                                     1                                                     Ï                                                     2                                  o
    A÷[b½  ã                   @   s8   d Z ddlZdd Zdd Zdd Zd	d
 Zdd ZdS )zB
This module provides means to detect the App Engine environment.
é    Nc                   C   s   t  pt S )N)Úis_local_appengineÚis_prod_appengine© r   r   úqE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\contrib\_appengine_environ.pyÚis_appengine   s   r   c                   C   s   t  o	tjd dkS )a#  Reports if the app is running in the first generation sandbox.

    The second generation runtimes are technically still in a sandbox, but it
    is much less restrictive, so generally you shouldn't need to check for it.
    see https://cloud.google.com/appengine/docs/standard/runtimes
    ÚAPPENGINE_RUNTIMEZpython27)r   ÚosÚenvironr   r   r   r   Úis_appengine_sandbox   s   r
   c                   C   ó   dt jv ot j dd¡ d¡S )Nr   ÚSERVER_SOFTWAREÚ zDevelopment/©r   r	   ÚgetÚ
startswithr   r   r   r   r      ó
   ÿþr   c                   C   r   )Nr   r   r   zGoogle App Engine/r   r   r   r   r   r      r   r   c                   C   s   dS )zDeprecated.Fr   r   r   r   r   Úis_prod_appengine_mvms"   s   r   )Ú__doc__r   r   r
   r   r   r   r   r   r   r   Ú<module>   s    
                                                                                                                                                                                                                                                                          ì                                                                                                          ë                                                                                                          ê                                                                                                          é                                                                                                          è                                                                                                          ç                                                                                                          æ                                                                                                          å                                                                                                          ä                                                                                                          ã                                                                                                          â                                                                                           o
    A÷[b%  ã                   @   s   d dl mZ d dlZddlmZ ddlmZ ddlmZ ddl	m
Z
mZ d	d
 ZejddfddZdd Zdd Zdd ZedZdS )é    )Úabsolute_importNé   )Ú_appengine_environ)ÚLocationParseError)Úsixé   )ÚNoWayToWaitForSocketErrorÚwait_for_readc                 C   sH   t | dd}|du rdS |du rdS zt|ddW S  ty#   Y dS w )a$  
    Returns True if the connection is dropped and should be closed.

    :param conn:
        :class:`http.client.HTTPConnection` object.

    Note: For platforms like AppEngine, this will always return ``False`` to
    let the platform handle connection recycling transparently for us.
    ÚsockFNTg        )Útimeout)Úgetattrr	   r   )Úconnr
   © r   úfE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\connection.pyÚis_connection_dropped   s   
ÿr   c                 C   s(  | \}}|  d¡r| d¡}d}t }z| d¡ W n ty-   t td| d¡ Y S w t 	|||tj
¡D ]Q}|\}	}
}}}d}z't |	|
|¡}t|| |tjurY| |¡ |r`| |¡ | |¡ |W   S  tjy } z|}|dur~| ¡  d}W Y d}~q7d}~ww |dur|t d¡)ak  Connect to *address* and return the socket object.

    Convenience function.  Connect to *address* (a 2-tuple ``(host,
    port)``) and return the socket object.  Passing the optional
    *timeout* parameter will set the timeout on the socket instance
    before attempting to connect.  If no *timeout* is supplied, the
    global default timeout setting returned by :func:`socket.getdefaulttimeout`
    is used.  If *source_address* is set it must be a tuple of (host, port)
    for the socket to bind as a source address before making the connection.
    An host of '' or port 0 tells the OS to use the default.
    ú[z[]NÚidnaz'%s', label empty or too longz!getaddrinfo returns an empty list)Ú
startswithÚstripÚallowed_gai_familyÚencodeÚUnicodeErrorr   Ú
raise_fromr   ÚsocketÚgetaddrinfoÚSOCK_STREAMÚ_set_socket_optionsÚ_GLOBAL_DEFAULT_TIMEOUTÚ
settimeoutÚbindÚconnectÚerrorÚclose)Úaddressr   Úsource_addressÚsocket_optionsÚhostÚportÚerrÚfamilyÚresÚafÚsocktypeÚprotoÚ	canonnameÚsar
   Úer   r   r   Úcreate_connection%   sD   

ÿÿ





ü
r1   c                 C   s$   |d u rd S |D ]}| j |  qd S )N)Ú
setsockopt)r
   ÚoptionsÚoptr   r   r   r   d   s
   ÿr   c                  C   s   t j} trt j} | S )z³This function is designed to work in the context of
    getaddrinfo, where family=socket.AF_UNSPEC is the default and
    will perform a DNS search for both IPv6 and IPv4 records.)r   ÚAF_INETÚHAS_IPV6Ú	AF_UNSPEC)r)   r   r   r   r   l   s   r   c                 C   s`   d}d}t  ¡ r
dS tjr(zt tj¡}| | df¡ d}W n	 ty'   Y nw |r.| ¡  |S )z4Returns True if the system can bind an IPv6 address.NFr   T)r   Zis_appengine_sandboxr   Úhas_ipv6ÚAF_INET6r   Ú	Exceptionr"   )r&   r
   r8   r   r   r   Ú	_has_ipv6w   s   ÿr;   z::1)Ú
__future__r   r   Zcontribr   Ú
exceptionsr   Úpackagesr   Úwaitr   r	   r   r   r1   r   r   r;   r6   r   r   r   r   Ú<module>   s    
ü?                                                                                                                                                                                                         ö                                                                                                          õ                                                                                               o
    A÷[b  ã                   @   s´   d dl mZ ddlmZ ddlmZmZmZ ddlm	Z	 ddl
mZ ddlmZmZmZmZmZmZmZmZmZmZ ddlmZmZ dd	lmZmZmZmZ dd
lm Z m!Z! dZ"dS )é    )Úabsolute_importé   )Úis_connection_dropped)ÚSKIP_HEADERÚSKIPPABLE_HEADERSÚmake_headers)Úis_fp_closed)ÚRetry)
ÚALPN_PROTOCOLSÚHAS_SNIÚIS_PYOPENSSLÚIS_SECURETRANSPORTÚPROTOCOL_TLSÚ
SSLContextÚassert_fingerprintÚresolve_cert_reqsÚresolve_ssl_versionÚssl_wrap_socket)ÚTimeoutÚcurrent_time)ÚUrlÚget_hostÚ	parse_urlÚsplit_first)Úwait_for_readÚwait_for_write)r   r   r   r   r   r
   r	   r   r   r   r   r   r   r   r   r   r   r   r   r   r   r   r   r   N)#Ú
__future__r   Ú
connectionr   Úrequestr   r   r   Úresponser   Zretryr	   Zssl_r
   r   r   r   r   r   r   r   r   r   Útimeoutr   r   Úurlr   r   r   r   Úwaitr   r   Ú__all__© r$   r$   údE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\util\__init__.pyÚ<module>   s    0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               m                                                                                                        n                                                                                                        o                                                                                                        p                                                                                                        q                                                                                                        r                                                                                                        s                                                                                                        t                                                                                                        u                                                                                                        v                                                                                                        w                                                                                                        x                               INDX( 	 f<^           (     è       Ø  o                 D
     v     D
    -ÂÈLRØ-ÂÈLRØ-ÂÈLRØ-ÂÈLRØ @      I5               c o n n e c t i o n . c p y t h o n - 3 1 0 . p y c . D
     ~     D
    P½ÈLRØP½ÈLRØP½ÈLRØP½ÈLRØ p      c               c o n n e c t i o n p o o l . c p y t h o n - 3 1 0 . p y c  D
     v     D
    ÅÙ§ÈLRØÅÙ§ÈLRØÅÙ§ÈLRØÅÙ§ÈLRØ 0      ï*               e x c e p t i o n s . c p y t h o n - 3 1 0 . p y c 4 ,D
     n     D
    NÜÈLR 7°ÞÈLRØ7°ÞÈLRØ7°ÞÈLRØ        ö               f i e l d s . c p y t h o n - 3 1 0 . p y c y +D
     r     D
    NÜÈLRØNÜÈLRØNÜÈLRØNÜÈLRØ       »
               f i l e p o s t . c p y t h o n - 3 1 0 . p y c 
    /D
     x     D
    kvãÈLRØkvãÈLRØkvãÈLRØkvãÈLRØ @      _;               p o o l m a n a g e r . c p y t h o n - 3 1 0 . p y c *D
     p     D
    ÒìÙÈLRØÒìÙÈLRØÒìÙÈLRØÒìÙÈLRØ        ÷               r e q u e s t . c p y t h o n - 3 1 0 . p y c -D
     r    D
    §áÈLRØ§áÈLRØ§áÈLRØ§áÈLRØ `      ¼Q               r e s p o n s e . c p y t h o n - 3 1 0 . p y c . p y (D
     z     D
    R×ÈLRØR×ÈLRØR×ÈLRØR×ÈLRØ 0      l*               _ c o l l e c t i o n s . c p y t h o n - 3 1 0 . p y c 
    D
     r     D
    Ú¸ÈLRØÚ¸ÈLRØÚ¸ÈLRØÚ¸ÈLRØØ       Ò                _ v e r s i o n . c p y t h o n - 3 1 0 . p y c . 1 4 D
     r     D
    ÅÙ§ÈLRØÅÙ§ÈLRØÅÙ§ÈLRØÅÙ§ÈLRØ                      _ _ i n i t _ _ . c p y t h  n - 3 1 0 . p y c . 1 4               0 . p y c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  o
    A÷[bË
  ã                   @   s@  d Z ddlmZ ddlZddlZddlmZ ddlmZ ddlm	Z	 ddl
mZmZmZ dd	lmZ dd
lmZmZmZ ddlmZ ddlmZ ddlmZ ddlmZ ddlmZ dZdZe	Z	dZ e !e"¡ #e ¡ ej$fddZ%[ej&dej'dd ej&dej(dd ej&dej)dd ej&dej*dd ej+fddZ,dS )ze
Python HTTP library with thread-safe connection pooling, file post support, user friendly, and more
é    )Úabsolute_importN)ÚNullHandleré   )Ú
exceptions)Ú__version__)ÚHTTPConnectionPoolÚHTTPSConnectionPoolÚconnection_from_url)Úencode_multipart_formdata)ÚPoolManagerÚProxyManagerÚproxy_from_url)ÚHTTPResponse)Úmake_headers)ÚRetry)ÚTimeout)Úget_hostz(Andrey Petrov (andrey.petrov@shazow.net)ZMIT)r   r   r   r   r   r   r   Úadd_stderr_loggerr	   Údisable_warningsr
   r   r   r   c                 C   sF   t  t¡}t  ¡ }| t  d¡¡ | |¡ | | ¡ | dt¡ |S )z
    Helper for quickly adding a StreamHandler to the logger. Useful for
    debugging.

    Returns the handler after adding it.
    z%%(asctime)s %(levelname)s %(message)sz,Added a stderr logging handler to logger: %s)	ÚloggingÚ	getLoggerÚ__name__ÚStreamHandlerÚsetFormatterÚ	FormatterÚ
addHandlerÚsetLevelÚdebug)ÚlevelÚloggerÚhandler© r!   ú_E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\urllib3\__init__.pyr   .   s   
	

r   ÚalwaysT)ÚappendÚdefaultc                 C   s   t  d| ¡ dS )z<
    Helper for quickly disabling all urllib3 warnings.
    ÚignoreN)ÚwarningsÚsimplefilter)Úcategoryr!   r!   r"   r   Q   s   r   )-Ú__doc__Ú
__future__r   r   r'   r   Ú r   Ú_versionr   Zconnectionpoolr   r   r	   Zfilepostr
   Zpoolmanagerr   r   r   Úresponser   Zutil.requestr   Z
util.retryr   Zutil.timeoutr   Zutil.urlr   Ú
__author__Ú__license__Ú__all__r   r   r   ÚDEBUGr   r(   ZSecurityWarningZSubjectAltNameWarningZInsecurePlatformWarningZSNIMissingWarningZHTTPWarningr   r!   r!   r!   r"   Ú<module>   s6                                                                                                                                                                                                                                                                                                                                                                                                     Û                                                 &                                                 Ú                                                 '                                                 Ù                                                 (                                                 Ø                                                 )                                                 ×                                                 *                                                 Ö                                                 +                                                 Õ                                                 ,                                                 Ô                                                 -      o
    ?÷[b
  ã                
   @   s\  d Z ddlmZ ddlZddlmZ dZzddlmZ	 W n e
y'   dZ	Y nw dd Zd	d
 Zz	eeje	e W n eefyP   e d eje	e¡e¡ Y nw z:ddlmZ es^e
dzddlZW n e
yo   dZY nw eeddsddlmZ e ¡  ddlmZ ee W n	 e
y   Y nw ddlmZ e de¡ ddlmZmZmZmZ ddlm Z m!Z!m"Z"m#Z# ddlm$Z$m%Z% ddl&m'Z' ddl&m(Z( ddl)m*Z*m+Z+m,Z, ddl-m.Z.m/Z/m0Z0m1Z1m2Z2m3Z3m4Z4m5Z5 ddl6m7Z7m8Z8 ddl9m:Z: ddlm;Z;m<Z<m=Z=m>Z>m?Z?m@Z@mAZAmBZBmCZCmDZD ddlEZEddlEmFZF eE GeH¡ IeF ¡ ejdeAdd  dS )!aú  
Requests HTTP Library
~~~~~~~~~~~~~~~~~~~~~

Requests is an HTTP library, written in Python, for human beings.
Basic GET usage:

   >>> import requests
   >>> r = requests.get('https://www.python.org')
   >>> r.status_code
   200
   >>> b'Python is a programming language' in r.content
   True

... or POST:

   >>> payload = dict(key1='value1', key2='value2')
   >>> r = requests.post('https://httpbin.org/post', data=payload)
   >>> print(r.text)
   {
     ...
     "form": {
       "key1": "value1",
       "key2": "value2"
     },
     ...
   }

The other HTTP methods are supported - see `requests.api`. Full documentation
is at <https://requests.readthedocs.io>.

:copyright: (c) 2017 by Kenneth Reitz.
:license: Apache 2.0, see LICENSE for more details.
é    )Úurllib3Né   )ÚRequestsDependencyWarning)Ú__version__c                 C   s<  |   d¡} | dgksJ t| dkr|  d¡ | \}}}t|t|t|}}}|dks0J |dks6J |dks<J |rk|  d¡d d \}}}t|t|t|}}}d	|||f  krfd
k siJ  J d S |r|  d¡d d \}}}t|t|t|}}}d|||f  krdk sJ  J d S td)NÚ.Údevé   Ú0r   é   é   é   )r   r   r   )é   r   r   )r   r   r   )r   r   r   z7You need either charset_normalizer or chardet installed)ÚsplitÚlenÚappendÚintÚ	Exception)Zurllib3_versionÚchardet_versionÚcharset_normalizer_versionÚmajorÚminorÚpatch© r   ú`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\requests\__init__.pyÚcheck_compatibility6   s$   


&&r   c                 C   sX   zt tt|  d¡} W n
 ty   Y d S w | g d¢k r*d | ¡}t |t¡ d S d S )Nr   )r   r   é   z4Old version of cryptography ({}) may cause slowdown.)	ÚlistÚmapr   r   Ú
ValueErrorÚformatÚwarningsÚwarnr   )Úcryptography_versionÚwarningr   r   r   Ú_check_cryptographyT   s   ÿ
þr$   zWurllib3 ({}) or chardet ({})/charset_normalizer ({}) doesn't match a supported version!)ÚWINDOWSz3pip internals: don't import cryptography on WindowsZHAS_SNIF)Ú	pyopenssl)ÚDependencyWarningÚignore)Ú	__title__Ú__description__Ú__url__r   )Ú	__build__Ú
__author__Ú__author_email__Ú__license__)Ú__copyright__Ú__cake__)Úutils)Úpackages)ÚRequestÚResponseÚPreparedRequest)ÚrequestÚgetÚheadÚpostr   ÚputÚdeleteÚoptions)ÚsessionÚSession)Úcodes)
ÚRequestExceptionÚTimeoutÚURLRequiredÚTooManyRedirectsÚ	HTTPErrorÚConnectionErrorÚFileModeWarningÚConnectTimeoutÚReadTimeoutÚJSONDecodeError)ÚNullHandlerÚdefaultT)r   )JÚ__doc__Zpip._vendorr   r    Ú
exceptionsr   r   Zpip._vendor.chardetr   r   ÚImportErrorr   r$   ÚAssertionErrorr   r!   r   Úpip._internal.utils.compatr%   ÚsslÚgetattrÚpip._vendor.urllib3.contribr&   Úinject_into_urllib3Zcryptographyr"   Zpip._vendor.urllib3.exceptionsr'   Úsimplefilterr)   r*   r+   r,   r-   r.   r/   r0   r1   Ú r2   r3   Zmodelsr4   r5   r6   Zapir7   r8   r9   r:   r   r;   r<   r=   Zsessionsr>   r?   Ústatus_codesr@   rA   rB   rC   rD   rE   rF   rG   rH   rI   rJ   ÚloggingrK   Ú	getLoggerÚ__name__Ú
addHandlerr   r   r   r   Ú<module>   sl   #ÿþÿÿÿ(0                                                             o
    >÷[b  ã                   @   s,   G d d dZ e  ZG dd dZe ZdS )c                   @   s   e Zd ZdefddZdefddZdedefddZ	dedefd	d
Z
dedefddZdedefddZdedefddZdeddfddZdS )ÚInfinityTypeÚreturnc                 C   ó   dS )NÚInfinity© ©Úselfr   r   údE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\packaging\_structures.pyÚ__repr__   ó   zInfinityType.__repr__c                 C   ó   t t| S ©N©ÚhashÚreprr   r   r   r   Ú__hash__
   ó   zInfinityType.__hash__Úotherc                 C   r   ©NFr   ©r   r   r   r   r   Ú__lt__   r
   zInfinityType.__lt__c                 C   r   r   r   r   r   r   r   Ú__le__   r
   zInfinityType.__le__c                 C   ó   t || jS r   ©Ú
isinstanceÚ	__class__r   r   r   r   Ú__eq__   r   zInfinityType.__eq__c                 C   r   ©NTr   r   r   r   r   Ú__gt__   r
   zInfinityType.__gt__c                 C   r   r   r   r   r   r   r   Ú__ge__   r
   zInfinityType.__ge__r   ÚNegativeInfinityTypec                 C   ó   t S r   )ÚNegativeInfinityr   r   r   r   Ú__neg__   r
   zInfinityType.__neg__N)Ú__name__Ú
__module__Ú__qualname__Ústrr	   Úintr   ÚobjectÚboolr   r   r   r   r   r"   r   r   r   r   r      ó    r   c                   @   s   e Zd ZdefddZdefddZdedefddZ	dedefd	d
Z
dedefddZdedefddZdedefddZdedefddZdS )r   r   c                 C   r   )Nz	-Infinityr   r   r   r   r   r	   $   r
   zNegativeInfinityType.__repr__c                 C   r   r   r   r   r   r   r   r   '   r   zNegativeInfinityType.__hash__r   c                 C   r   r   r   r   r   r   r   r   *   r
   zNegativeInfinityType.__lt__c                 C   r   r   r   r   r   r   r   r   -   r
   zNegativeInfinityType.__le__c                 C   r   r   r   r   r   r   r   r   0   r   zNegativeInfinityType.__eq__c                 C   r   r   r   r   r   r   r   r   3   r
   zNegativeInfinityType.__gt__c                 C   r   r   r   r   r   r   r   r   6   r
   zNegativeInfinityType.__ge__r   c                 C   r    r   )r   r   r   r   r   r"   9   r
   zNegativeInfinityType.__neg__N)r#   r$   r%   r&   r	   r'   r   r(   r)   r   r   r   r   r   r   r"   r   r   r   r   r   #   r*   r   N)r   r   r   r!   r   r   r   r   Ú<module>   s   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ÿ                                                                                              þ                                                                                              ý                                                                                              ü                                      INDX( 	 Þra           (   ø  è       ØØ4                 E
     p     D
    ô)ÊLRØô)ÊLRØô)ÊLRØô)ÊLRØ 0      F$               m a r k e r s . c p y t h o n - 3 1 0 . p y c øD
     z     D
    e®UÊLRØe®UÊLRØe®UÊLRØe®UÊLRØ                      r e q u i r e m e n t s . c p y t h o n - 3 1 0 . p y c l     E
     v     D
    ãòÊLRØãòÊLRØãòÊLRØãòÊLRØ `      T               s p e c i f i e r s . c p y t h o n - 3 1 0 . p y c  D
     j     D
    DÈLRØDÈLR DÈLRØDÈLRØ 0      ¡/               t a g s . c p y t h o n - 3 1 0 . p y c c . p D
     l     D
    "¡ÈLRØ"¡ÈLRØ"¡ÈLRØ"¡ÈLRØ       ô               u t i l s . c p y t h o n - 3 1 0 . p y c . p D
     p     D
    *ÈLRØ*ÈLRØ*ÈLRØ*ÈLRØ @      z2               v e r s i o n . c p y t h o n - 3 1 0 . p y c D
     v     D
    reÈLRØreÈLRØreÈLRØreÈLRØ                       _ m a n y l i n u x . c p y t h o n - 3 1 0 . p y c 4 D
     v     D
    BÇÈLR BÇÈLRØBÇÈLRØBÇÈLRØ                       _ m u s l l i n u x . c p y t h o n - 3 1 0 . p y c 4 	D
     x     D
    ¦ÈLRØ¦ÈLRØ¦ÈLRØ¦ÈLRØ       
               _ s t r u c t u r e s . c p y t h o n - 3 1 0 . p y c D
     t     D
    ??ÈLRØ??ÈLRØ??ÈLRØ??ÈLRØP      K               _ _ a b o u t _ _ . c p y t h o n - 3 1 0 . p y c 1 4 D
     r     D
    ??ÈLRØ??ÈLRØ??ÈLRØ??ÈLRØÀ      »               _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1                0 . p y c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          o
    >÷[bh  ã                	   @   s  d dl Z d dlmZmZmZmZmZ ddlmZm	Z	 ddl
mZmZ eed eeef f ZedeZG dd	 d	eZG d
d deZe  d¡Ze  d¡ZdedefddZdeeef defddZdedeeeeee f fddZdedeeef fddZdS )é    N)Ú	FrozenSetÚNewTypeÚTupleÚUnionÚcasté   )ÚTagÚ	parse_tag)ÚInvalidVersionÚVersion© ÚNormalizedNamec                   @   ó   e Zd ZdZdS )ÚInvalidWheelFilenamezM
    An invalid wheel filename was found, users should refer to PEP 427.
    N©Ú__name__Ú
__module__Ú__qualname__Ú__doc__r   r   r   ú^E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\packaging\utils.pyr      ó    r   c                   @   r   )ÚInvalidSdistFilenamez^
    An invalid sdist filename was found, users should refer to the packaging user guide.
    Nr   r   r   r   r   r      r   r   z[-_.]+z	(\d+)(.*)ÚnameÚreturnc                 C   s   t  d| ¡ ¡ }tt|S )Nú-)Ú_canonicalize_regexÚsubÚlowerr   r   )r   Úvaluer   r   r   Úcanonicalize_name    s   
r   Úversionc              
   C   sü   t | trzt| }W q ty   |  Y S w | }g }|jdkr)| |j d¡ | t ddd dd |j	D ¡¡¡ |j
durO| d d	d |j
D ¡¡ |jdur]| d
|j ¡ |jdurk| d|j ¡ |jdury| d|j ¡ d |¡S )z
    This is very similar to Version.__str__, but has one subtle difference
    with the way it handles the release segment.
    r   ú!z(\.0)+$Ú Ú.c                 s   ó    | ]}t |V  qd S ©N©Ústr©Ú.0Úxr   r   r   Ú	<genexpr><   ó    z'canonicalize_version.<locals>.<genexpr>Nc                 s   r$   r%   r&   r(   r   r   r   r+   @   r,   z.postz.devú+)Ú
isinstancer'   r   r
   ZepochÚappendÚrer   ÚjoinÚreleaseÚpreZpostZdevÚlocal)r    ZparsedÚpartsr   r   r   Úcanonicalize_version&   s(   
þ
&




r6   Úfilenamec           
      C   s  |   d¡std|  | d d } |  d¡}|dvr"td|  |  d|d ¡}|d }d	|v s<t d
|tj¡d u rCtd|  t|}t|d }|dkry|d }t	 |¡}|d u ritd| d|  dt
tt| d¡| d¡f}nd}t|d }	||||	fS )Nz.whlz3Invalid wheel filename (extension must be '.whl'): éüÿÿÿr   )é   é   z0Invalid wheel filename (wrong number of parts): é   r   Ú__z^[\w\d._]*$zInvalid project name: r   r:   zInvalid build number: z in 'ú'r   éÿÿÿÿ)Úendswithr   ÚcountÚsplitr0   ÚmatchÚUNICODEr   r   Ú_build_tag_regexr   ÚBuildTagÚintÚgroupr	   )
r7   Zdashesr5   Ú	name_partr   r    Z
build_partZbuild_matchÚbuildÚtagsr   r   r   Úparse_wheel_filenameQ   s6   
ÿ
ÿ
ÿ rK   c                 C   s   |   d¡r| d td  }n|   d¡r| d td  }ntd|  | d¡\}}}|s6td|  t|}t|}||fS )Nz.tar.gzz.zipz@Invalid sdist filename (extension must be '.tar.gz' or '.zip'): r   zInvalid sdist filename: )r?   Úlenr   Ú
rpartitionr   r   )r7   Z	file_stemrH   ÚsepZversion_partr   r    r   r   r   Úparse_sdist_filenameu   s   

ÿÿrO   )r0   Útypingr   r   r   r   r   rJ   r   r	   r    r
   r   rF   r'   rE   r   Ú
ValueErrorr   r   Úcompiler   rD   r   r6   rK   rO   r   r   r   r   Ú<module>   s$   


+ÿ
þ$            `                                                                                         a                                                                                        b                                                                          o
    <÷[bd  ã                   @   s
  d Z ddlmZ ddlZddlZddlZdZej 	ej 
e¡¡Zdd Zere ej ed¡¡ej ejdd< ed ed	 ed
 ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed ed  ed! ed" ed# ed$ ed% ed& ed' ed( ed) ed* ed+ ed, ed- ed. ed/ ed0 ed1 ed2 ed3 ed4 ed5 ed6 ed7 ed8 ed9 dS dS ):zÜ
pip._vendor is for vendoring dependencies of pip to prevent needing pip to
depend on something external.

Files inside of pip._vendor should be considered immutable and should only be
updated to versions from upstream.
é    )Úabsolute_importNFc                 C   sv   d  t| ¡}zt| t t dd W n
 ty   Y d S w tj|  tj|< | dd¡\}}t	tj| |tj|   d S )Nz{0}.{1}r   )ÚlevelÚ.é   )
ÚformatÚ__name__Ú
__import__ÚglobalsÚlocalsÚImportErrorÚsysÚmodulesÚrsplitÚsetattr)Z
modulenameZvendored_nameÚbaseÚhead© r   úWE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_vendor\__init__.pyÚvendored   s   	÷r   z*.whlZcachecontrolZcertifiZcoloramaZdistlibZdistroÚhtml5libZsixz	six.moveszsix.moves.urllibzsix.moves.urllib.parseZ	packagingzpackaging.versionzpackaging.specifiersZpep517Zpkg_resourcesZplatformdirsZprogressZrequestszrequests.exceptionszrequests.packageszrequests.packages.urllib3z&requests.packages.urllib3._collectionsz$requests.packages.urllib3.connectionz(requests.packages.urllib3.connectionpoolz!requests.packages.urllib3.contribz*requests.packages.urllib3.contrib.ntlmpoolz+requests.packages.urllib3.contrib.pyopensslz$requests.packages.urllib3.exceptionsz requests.packages.urllib3.fieldsz"requests.packages.urllib3.filepostz"requests.packages.urllib3.packagesz/requests.packages.urllib3.packages.ordered_dictz&requests.packages.urllib3.packages.sixz5requests.packages.urllib3.packages.ssl_match_hostnamezErequests.packages.urllib3.packages.ssl_match_hostname._implementationz%requests.packages.urllib3.poolmanagerz!requests.packages.urllib3.requestz"requests.packages.urllib3.responsezrequests.packages.urllib3.utilz)requests.packages.urllib3.util.connectionz&requests.packages.urllib3.util.requestz'requests.packages.urllib3.util.responsez$requests.packages.urllib3.util.retryz#requests.packages.urllib3.util.ssl_z&requests.packages.urllib3.util.timeoutz"requests.packages.urllib3.util.urlZ
resolvelibZtenacityZtomliZurllib3)Ú__doc__Z
__future__r   ZglobZos.pathÚosr   Z	DEBUNDLEDÚpathÚabspathÚdirnameÚ__file__Z	WHEEL_DIRr   Újoinr   r   r   r   Ú<module>   sz    $È                                                                                                                                                                          º                                            G                                            ¹                                            H                                            ¸                                            I                                            ·                                            J                                            ¶                                            K                                            µ                                            L       INDX( 	 ÌAb           (   °  è        y _                 üC
     ~     ùC
    v´ÈLRØv´ÈLRØv´ÈLRØv´ÈLRØ        ¸               a u t o c o m p l e t i o n . c p y t h o n - 3 1 0 . p y c   ñD
     z     ùC
    %LÊLRØ%LÊLRØ%LÊLRØ%LÊLRØ        È               b a s e _ c o m m a n d . c p y t h o n - 3 1 0 . p y c 
    þC
     v     ùC
    yÈLRØ£ÛÈLRØ£ÛÈLRØ£ÛÈLRØ `      X               c m d o p t i o n s . c p y t h o n - 3 1 0 . p y c  òD
          ùC
    NÊLRØNÊLRØNÊLRØNÊLRØ                      c o m m a n d _ c o n t e x t . c p y t h o n - 3 1 0 . p y c ûC
     j     ùC
    áRÈLRØáRÈLRØáRÈLRØáRÈLRØ       W               m a i n . c p y t h o n - 3 1 0 . p y c . p y ýC
     x     ùC
    èÈLRØèÈLRØèÈLRØèÈLRØ       i               m a i n _ p a r s e r . c p y t h o n - 3 1 0 . p y c 
D
     n     ùC
    ïÈLRØïÈLRØïÈLRØïÈLRØ 0      Ô&               p a r s e r . c p y t h o n - 3 1 0 . p y c  ÛD
     |     ùC
    xë1ÊLRØxë1ÊLRØxë1ÊLRØxë1ÊLRØ 0      $               p r o g r e s s _ b a r s . c p y t h o n - 3 1 0 . p y c     E
     x     ùC
    VÈµÊLRØVÈµÊLRØVÈµÊLRØVÈµÊLRØ @      Ú4               r e q _ c o m m a n d . c p y t h o n - 3 1 0 . p y c AE
     r     ùC
    Þ ËLRØÞ ËLRØÞ ËLRØÞ ËLRØ        O               s p i n n e r s . c p y t h o n - 3 1 0 . p y c . p y D
     z     ùC
    QÈLRØQÈLRØQÈLRØQÈLRØ`      \               s t a t u s  c o d e s . c p y t h o n - 3 1 0 . p y c       úC
     r     ùC
    áRÈLRØáRÈLRØáRÈLRØáRÈLRØ                     _ _ i n i t _ _ . c p y t h o n - 3 1 0 . p y c . 1 4               c . 1 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          o
    :÷[b6
  ã                   @   s¨   d Z ddlZddlZddlmZmZ ddlmZ ddlm	Z	m
Z
 ddlmZmZ ddlmZ ddlmZmZ d	d
gZde	fdd	Zdee deeee f fdd
ZdS )z=A single place for constructing and exposing the main parser
é    N)ÚListÚTuple)Ú
cmdoptions)ÚConfigOptionParserÚUpdatingDefaultsHelpFormatter)Úcommands_dictÚget_similar_commands)ÚCommandError)Úget_pip_versionÚget_progÚcreate_main_parserÚparse_commandÚreturnc                  C   sl   t ddt dt d} |  ¡  t | _t tj| ¡}|  	|¡ d| _
dgdd t ¡ D  }d	 |¡| _| S )
z1Creates and returns the main parser for pip's CLIz
%prog <command> [options]FÚglobal)ÚusageÚadd_help_optionÚ	formatterÚnameÚprogTÚ c                 S   s"   g | ]\}}|d d|j  qS )Z27ú )Zsummary)Ú.0r   Zcommand_info© r   ú`E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\cli\main_parser.pyÚ
<listcomp>'   s    ÿÿz&create_main_parser.<locals>.<listcomp>Ú
)r   r   r   Údisable_interspersed_argsr
   Úversionr   Zmake_option_groupZgeneral_groupÚadd_option_groupÚmainr   ÚitemsÚjoinÚdescription)ÚparserZgen_optsr"   r   r   r   r      s"   û

þÚargsc                 C   sÒ   t  }| | ¡\}}|jrtj |j¡ tj tj¡ t ¡  |r-|d dkr5t	|dkr5| 
¡  t ¡  |d }|tvrZt|}d| dg}|rS| d| d¡ td |¡| d d  }| |¡ ||fS )Nr   Úhelpé   zunknown command "ú"zmaybe you meant "z - )r   Ú
parse_argsr   ÚsysÚstdoutÚwriteÚosÚlinesepÚexitÚlenÚ
print_helpr   r   Úappendr	   r!   Úremove)r$   r#   Zgeneral_optionsZ	args_elseÚcmd_nameZguessÚmsgÚcmd_argsr   r   r   r   0   s&   	
)Ú__doc__r,   r)   Útypingr   r   Zpip._internal.clir   Zpip._internal.cli.parserr   r   Úpip._internal.commandsr   r   Úpip._internal.exceptionsr	   Zpip._internal.utils.miscr
   r   Ú__all__r   Ústrr   r   r   r   r   Ú<module>   s    &                                                                                                                                                                                                                                                                                                                                                                                                                                
                                           ö                                                                                      õ                                                                                      ô                                                                                      ó                                                                                      ò                                                                                      ñ                                                                                      ð                                                                                      ï                                                                                      î          o
    :÷[b¨	  ã                   @   s   d Z ddlZddlZddlZddlZddlmZmZ ddlm	Z	 ddl
mZ ddlmZ ddlmZ ddlmZ e e¡Zdd	eee  d
efddZdS )z Primary application entrypoint.
é    N)ÚListÚOptional)Úautocomplete)Úparse_command)Úcreate_command)ÚPipError)ÚdeprecationÚargsÚreturnc              
   C   sä   | d u rt jdd  } t ¡  t  zt| \}}W n' tyA } zt j d| ¡ t j t	j
¡ t  d¡ W Y d }~nd }~ww z	t tjd¡ W n tjyd } zt d|¡ W Y d }~nd }~ww t|d|v d}| |¡S )Né   zERROR: Ú z%Ignoring error %s when setting localez
--isolated)Úisolated)ÚsysÚargvr   Zinstall_warning_loggerr   r   r   ÚstderrÚwriteÚosÚlinesepÚexitÚlocaleÚ	setlocaleÚLC_ALLÚErrorÚloggerÚdebugr   Úmain)r	   Zcmd_nameZcmd_argsÚexcÚeZcommand© r   úYE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\cli\main.pyr   -   s(   ýþ
r   )N)Ú__doc__r   Úloggingr   r   Útypingr   r   Z pip._internal.cli.autocompletionr   Zpip._internal.cli.main_parserr   Zpip._internal.commandsr   Zpip._internal.exceptionsr   Zpip._internal.utilsr   Ú	getLoggerÚ__name__r   ÚstrÚintr   r   r   r   r   Ú<module>   s    
                                                                                                                                                                                                  <                                          Ä                                          =                                          Ã                                          >                                          Â                                          ?                                          Á                                          @                                          À                                          A                                          ¿                                          B                                          ¾                                          C                                          ½                                          D                                          ¼                                          E                                          »                                          F                                          º                                          G                                          ¹                                          H                                          ¸                                          I                                          ·                                          J                                          ¶        o
    <÷[b÷  ã                   @   sR   d Z ddlZddlmZmZ dZG dd dejZdedefd	d
Z	dddZ
dS )zªCustomize logging

Defines custom logger class for the `logger.verbose(...)` method.

init_logging() must be called before any other modules that call logging.getLogger.
é    N)ÚAnyÚcasté   c                   @   s*   e Zd ZdZdedededdfddZdS )	ÚVerboseLoggerzXCustom Logger, defining a verbose log-level

    VERBOSE is between INFO and DEBUG.
    ÚmsgÚargsÚkwargsÚreturnNc                 O   s   | j t|g|¢R i |¤S )N)ÚlogÚVERBOSE)Úselfr   r   r   © r   ú[E:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\_log.pyÚverbose   s   zVerboseLogger.verbose)Ú__name__Ú
__module__Ú__qualname__Ú__doc__Ústrr   r   r   r   r   r   r      s    r   Únamer	   c                 C   s   t tt | ¡S )zBlogging.getLogger, but ensures our VerboseLogger class is returned)r   r   ÚloggingÚ	getLogger)r   r   r   r   r      s   r   c                   C   s   t  t¡ t  td¡ dS )zRegister our VerboseLogger and VERBOSE log level.

    Should be called before any calls to getLogger(),
    i.e. in pip._internal.__init__
    r   N)r   ZsetLoggerClassr   ZaddLevelNamer   r   r   r   r   Úinit_logging   s   
r   )r	   N)r   r   Útypingr   r   r   ZLoggerr   r   r   r   r   r   r   r   Ú<module>   s    
                            $                                          Ü                                          %                                          Û                                          &                                          Ú                                          '                                          Ù                                          (                                          Ø                                          )                                          ×                                          *                                          Ö                                          +                                          Õ                                          ,                                          Ô                                          -                                          Ó                                          .                                          Ò                                          /                                          Ñ                                          0                                          Ð                                          1                                          Ï                                          2                                          Î                        o
    ;÷[b  ã                   @   s    d Z ddlZdddZe  dS )a-  A helper module that injects SecureTransport, on import.

The import should be done as early as possible, to ensure all requests and
sessions (or whatever) are created after injecting SecureTransport.

Note that we only do the injection on macOS, when the linked OpenSSL is too
old to handle TLSv1.2.
é    NÚreturnc               	   C   st   t jdkrd S zdd l} W n
 ty   Y d S w | jdkrd S zddlm} W n ttfy3   Y d S w | ¡  d S )NÚdarwinr   i )Úsecuretransport)	ÚsysÚplatformÚsslÚImportErrorZOPENSSL_VERSION_NUMBERZpip._vendor.urllib3.contribr   ÚOSErrorZinject_into_urllib3)r   r   © r
   úmE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\utils\inject_securetransport.pyÚinject_securetransport   s   
ÿ
ÿr   )r   N)Ú__doc__r   r   r
   r
   r
   r   Ú<module>   s    	

                                                                          ÷                                          
                                          ö                                                                                    õ                                                                                    ô                                                                                    ó                                                                                    ò                                                                                    ñ                                                                                    ð                                                                                    ï                                                                                    î                                                                                    í                                                                                    ì                                                                                    ë                                                                                    ê                                                                                    é                                                                                    è                                                                                    ç                                                                                    æ                                        o
    :÷[b=  ã                   @   sL   d dl mZmZ d dlZd dlmZ e ¡  ddeee  de	fddZ
dS )	é    )ÚListÚOptionalN)Ú_logÚargsÚreturnc                 C   s   ddl m} || S )zThis is preserved for old console scripts that may still be referencing
    it.

    For additional details, see https://github.com/pypa/pip/issues/7498.
    r   )Ú_wrapper)Úpip._internal.utils.entrypointsr   )r   r   © r	   úYE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\pip\_internal\__init__.pyÚmain   s   r   )N)Útypingr   r   Z*pip._internal.utils.inject_securetransportZpipZpip._internal.utilsr   Zinit_loggingÚstrÚintr   r	   r	   r	   r
   Ú<module>   s
                                                                                                                                                                                                                                                                                             p                                                                                  q                                                                                  r                                                                                  s                                                                                  t                                                                                  u                                                                                  v                                                                                  w                                                                                  x                                                                                  y                                                                                  z                                                                                  {                                                                                  |                                                                                  }                                                                                  ~                                                                                                                                                                                                               ÿ                                                                                    þ                                                       o
    9÷[b|  ã                   @   sª   d Z ddlZddlZej e¡Zdd ZdZej	dkr,G dd dZ
ej de
 ¡ dS dd	lmZ dd
lmZmZ G dd deeZG dd deeZej e ¡ dS )z>Patches that are applied at runtime to the virtual environmenté    Nc                    s    | j j  fdd}|| j _dS )a  
    Distutils allows user to configure some arguments via a configuration file:
    https://docs.python.org/3/install/index.html#distutils-configuration-files

    Some of this arguments though don't make sense in context of the virtual environment files, let's fix them up.
    c                    sj    | g|¢R i |¤}|   d¡}d|v rttj tj¡f|d< dD ]}d |¡}||v r2| |d ¡ q!|S )NÚinstallÚprefix)ZpurelibZplatlibZheadersZscriptsÚdataz
install_{})	Zget_option_dictÚVIRTUALENV_PATCH_FILEÚosÚpathÚabspathÚsysr   ÚformatÚpop)ÚselfÚargsÚkwargsÚresultr   ÚbaseÚkey©Zold_parse_config_files© úNE:\work\Programming\test\baseWork\mainEdu\env\lib\site-packages\_virtualenv.pyÚparse_config_files   s   

z&patch_dist.<locals>.parse_config_filesN)ZDistributionr   )Zdistr   r   r   r   Ú
patch_dist
   s   r   )zdistutils.distzsetuptools.dist)é   é   c                   @   s:   e Zd ZdZdZg Zd	ddZedd Zedd Z	dS )
Ú_FinderzFA meta path finder that allows patching the imported distutils modulesNc              	   C   s:  |t v r| jd u rt| jdkrdd l}| ¡ }| j |¡ ddlm} ddl	m
} | jd ` || _zO|||}|d ur~t|jd}	|	rGdnd}
t|j|
}|	rT| jn| j}||urqzt|j|
||| W n	 typ   Y nw |W d | _W  d    S W d | _nd | _w W d    d S 1 sw   Y  d S d S d S )Nr   )Úpartial)Ú	find_specÚexec_moduleÚload_module)Ú_DISTUTILS_PATCHÚfullnameÚlenÚlockÚ	threadingZLockÚappendZ	functoolsr   Zimportlib.utilr   ÚhasattrÚloaderÚgetattrr   r   ÚsetattrÚAttributeError)r   r   r   Útargetr"   r!   r   r   ÚspecZ
is_new_apiZ	func_nameÚoldÚfuncr   r   r   r   3   s:   
ÿï"ïðz_Finder.find_specc                 C   s"   | | |j tv rt| d S d S ©N©Ú__name__r   r   )r+   Úmoduler   r   r   r   W   s   
ÿz_Finder.exec_modulec                 C   s   | |}|j tv rt| |S r-   r.   )r+   Únamer0   r   r   r   r   ]   s   
z_Finder.load_moduler-   )
r/   Ú
__module__Ú__qualname__Ú__doc__r   r!   r   Ústaticmethodr   r   r   r   r   r   r   )   s    
$
r   )Úfind_module)ÚImpImporterÚ	ImpLoaderc                   @   s    e Zd ZdddZdddZdS )Ú_VirtualenvImporterNc                 C   s   t  | ¡ t | |¡ d S r-   )ÚobjectÚ__init__r7   )r   r   r   r   r   r;   k   s   
z_VirtualenvImporter.__init__c                 C   sD   |t v r zt|gt| d¡d |¢R  W S  ty   Y d S w d S )NÚ.éÿÿÿÿ)r   Ú_VirtualenvLoaderr6   ÚsplitÚImportError)r   r   r   r   r   r   r6   o   s   "þz_VirtualenvImporter.find_moduler-   )r/   r2   r3   r;   r6   r   r   r   r   r9   j   s    
r9   c                       s$   e Zd Zdd Z fddZ  ZS )r>   c                 C   s    t  | ¡ t | ||||¡ d S r-   )r:   r;   r8   )r   r   ÚfileÚfilenameZetcr   r   r   r;   x   s   
z_VirtualenvLoader.__init__c                    s"   t t|  |¡}t| d |_|S r-   )Úsuperr>   r   r   Ú
__loader__)r   r   r0   ©Ú	__class__r   r   r   |   s   z_VirtualenvLoader.load_module)r/   r2   r3   r;   r   Ú__classcell__r   r   rE   r   r>   w   s    r>   )r4   r   r	   r   ÚjoinÚ__file__r   r   r   Úversion_infor   Ú	meta_pathÚinsertZimpr6   Zpkgutilr7   r8   r:   r9   r>   r#   r   r   r   r   Ú<module>   s    
;                                                # -*- coding: utf-8 -*-
"""Activate virtualenv for current interpreter:

Use exec(open(this_file).read(), {'__file__': this_file}).

This can be used when you must use an existing Python interpreter, not the virtualenv bin/python.
"""
import os
import site
import sys

try:
    abs_file = os.path.abspath(__file__)
except NameError:
    raise AssertionError("You must use exec(open(this_file).read(), {'__file__': this_file}))")

bin_dir = os.path.dirname(abs_file)
base = bin_dir[: -len("Scripts") - 1]  # strip away the bin part from the __file__, plus the path separator

# prepend bin to PATH (this file is inside the bin directory)
os.environ["PATH"] = os.pathsep.join([bin_dir] + os.environ.get("PATH", "").split(os.pathsep))
os.environ["VIRTUAL_ENV"] = base  # virtual env is right above bin directory

# add the virtual environments libraries to the host python import mechanism
prev_length = len(sys.path)
for lib in "..\Lib\site-packages".split(os.pathsep):
    path = os.path.realpath(os.path.join(bin_dir, lib))
    site.addsitedir(path.decode("utf-8") if "" else path)
sys.path[:] = sys.path[prev_length:] + sys.path[0:prev_length]

sys.real_prefix = sys.prefix
sys.prefix = base
                                                                                                                                                                                                                                                                                                                                                          ï                                                                                  î                                                                                  í                                                                                  ì                                                                                  ë                                                                                  ê                                                                                  é                                                                                  è                                                                                  ç                                                                                