public class Henkilo {
	
	

	protected String m_etunimi;
	protected String m_sukunimi;
	protected String m_kutsumanimi;
	protected int m_syntymavuosi;

    public Henkilo(){
 
    }
	// getterit ja setterit

	public String getEtunimi() {
		return m_etunimi;
	}
	public String getSukunimi() {
		return m_sukunimi;
	}
	public String getKutsumanimi() {
		return m_kutsumanimi;
	}
	public int getSyntymaVuosi() {
		return m_syntymavuosi;
	}
	

	public void setEtunimi (String ni) {
		m_etunimi = ni;
	}
	public void setSukunimi (String sni) {
		m_sukunimi = sni;
	}
	public void setKutsumanimi (String ku) {
		m_kutsumanimi = ku;
	}
	public void setSyntymaVuosi (int sv) {
		m_syntymavuosi = sv;
	} }